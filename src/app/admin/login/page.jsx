'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Notification from '@/components/Notification';

const LoginPage = () => {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Credentials, 2: OTP
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '' });
    
    // Form Data
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        otp: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNotification({ message: '', type: '' });
        try {
            await axios.post('/api/auth/login', { 
                email: formData.email, 
                password: formData.password 
            });
            setStep(2); // Move to OTP step
            setNotification({ message: 'OTP sent! Please check your email.', type: 'info' });
        } catch (err) {
             setNotification({ message: err.response?.data?.error || "Login failed", type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNotification({ message: '', type: '' });
        try {
            const { data } = await axios.post('/api/auth/verify-login', { 
                email: formData.email, 
                otp: formData.otp 
            });
            setNotification({ message: 'Login successful! Redirecting...', type: 'success' });
            setTimeout(() => router.push(`/admin/dashboard/${data.user.username}`), 1500);
        } catch (err) {
             setNotification({ message: err.response?.data?.error || "Invalid OTP", type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setLoading(true);
        setNotification({ message: '', type: '' });
        try {
            await axios.post('/api/auth/login', { 
                email: formData.email, 
                password: formData.password 
            });
            setNotification({ message: 'New OTP sent to your email!', type: 'info' });
        } catch (err) {
             setNotification({ message: "Failed to resend OTP", type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
             <Notification 
                message={notification.message} 
                type={notification.type === 'error' ? 'error' : 'success'} 
                onClose={() => setNotification({ message: '', type: '' })} 
            />
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-32 h-12">
                        <Image 
                            src="/images/logo.png" 
                            alt="Logo" 
                            fill
                            className="object-contain" // Use object-contain to ensure logo fits
                            priority
                        />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-maitriiPurple mb-2">
                    {step === 1 ? 'Welcome Back' : 'Two-Factor Authentication'}
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    {step === 1 ? 'Please sign in to continue' : `Enter the OTP sent to ${formData.email}`}
                </p>

                {step === 1 ? (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maitriiPurple focus:border-transparent outline-none transition-all"
                                placeholder="admin@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maitriiPurple focus:border-transparent outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#5a2763] text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Processing...' : 'Sign In'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">OTP Code</label>
                            <input
                                type="text"
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                required
                                maxLength={6}
                                className="w-full px-4 py-3 text-center text-2xl tracking-widest rounded-lg border border-gray-300 focus:ring-2 focus:ring-maitriiOrange focus:border-transparent outline-none transition-all"
                                placeholder="123456"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#e06d3d] text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Verifying...' : 'Verify & Login'}
                        </button>
                        <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={loading}
                            className="w-full text-sm text-gray-500 hover:text-maitriiPurple hover:underline mt-2"
                        >
                            Resend Code
                        </button>
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full text-sm text-gray-500 hover:text-gray-700 underline"
                        >
                            Back to Login
                        </button>
                    </form>
                )}

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link href="/admin/signup" className="text-maitriiPurple font-semibold hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
