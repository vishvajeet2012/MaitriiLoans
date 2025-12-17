import webPush from 'web-push';
import Subscription from '@/models/Subscription';
import User from '@/models/User';

webPush.setVapidDetails(
  'mailto:info@maitriiloans.in',
  'BKZrpfCrFZ97WtBVPE6cCI4qrZPccmqh2T79nTok6XxM-UPXaKgyiNhXEseUMr-YDdqRjVbaeN2kDRDWMoihFxc',
  'wU6bycm4gNiYVcbb-e9RNK-eK9sCoGDdyACBwA8VnVs'
);

export async function sendPushNotification(payload, targetPermissions) {
  try {
    // 1. Find Users with permissions
    // If 'superadmin' is in targetPermissions, also include superadmins
    
    const query = {
        $or: [
            { permissions: { $in: targetPermissions } },
            { role: 'superadmin' }
        ]
    };

    const users = await User.find(query).select('_id');
    const userIds = users.map(u => u._id);

    // 2. Find Subscriptions for these users
    const subscriptions = await Subscription.find({ userId: { $in: userIds } });

    // 3. Send Notifications
    const promises = subscriptions.map(sub => {
        return webPush.sendNotification(
            { endpoint: sub.endpoint, keys: sub.keys },
            JSON.stringify(payload)
        ).catch(err => {
            if (err.statusCode === 410 || err.statusCode === 404) {
                // Subscription is invalid/expired, remove it
                return Subscription.deleteOne({ _id: sub._id });
            }
            console.error("Push Send Error", err);
        });
    });

    await Promise.all(promises);
    return true;
  } catch (error) {
    console.error("Push Notification Logic Error:", error);
    return false;
  }
}
