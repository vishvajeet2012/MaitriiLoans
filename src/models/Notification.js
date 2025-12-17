import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  type: { type: String, default: 'system' }, // contact, system, error
  targetPermissions: [{ type: String }], // 'contact', 'superadmin' etc.
  readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who have read this
  link: { type: String }, // Optional link to redirect
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);
