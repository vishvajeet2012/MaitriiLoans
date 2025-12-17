'use client';

import React, { useEffect } from 'react';
import axios from 'axios';

const AdminLayout = ({ children }) => {
    
    useEffect(() => {
        const registerServiceWorker = async () => {
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                try {
                    const registration = await navigator.serviceWorker.register('/sw.js');
                    console.log('SW Registered');

                    // Check/Request Permission
                    const permission = await Notification.requestPermission();
                    if (permission === 'granted') {
                        subscribeUser(registration);
                    }
                } catch (error) {
                    console.error('SW Error', error);
                }
            }
        };

        const subscribeUser = async (registration) => {
            try {
                // Get VAPID Key (Hardcoded for reliability)
                const vapidKey = 'BKZrpfCrFZ97WtBVPE6cCI4qrZPccmqh2T79nTok6XxM-UPXaKgyiNhXEseUMr-YDdqRjVbaeN2kDRDWMoihFxc';
                if (!vapidKey) return;

                const convertedVapidKey = urlBase64ToUint8Array(vapidKey);
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                });

                // Get User ID (Assuming verified by session cookie on backend, but we need ID to link)
                // We'll fetch 'me' to be sure
                const { data } = await axios.get('/api/auth/me');
                if (data.user) {
                    await axios.post('/api/admin/push/subscribe', {
                        subscription,
                        userId: data.user._id
                    });
                }
            } catch (e) {
                console.error('Subscription failed', e);
            }
        };

        const urlBase64ToUint8Array = (base64String) => {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');
            
            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);
        
            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        };

        registerServiceWorker();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
            {children}
        </div>
    );
};

export default AdminLayout;
