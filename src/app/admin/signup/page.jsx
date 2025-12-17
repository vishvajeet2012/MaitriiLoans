'use client';

import Image from 'next/image';
import Notification from '@/components/Notification';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '' });
    
    // Form Data
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        otp: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNotification({ message: '', type: '' });
        try {
            await axios.post('/api/auth/register', { 
                name: formData.name,
                username: formData.username,
                email: formData.email, 
                password: formData.password 
            });
            setStep(2); // Move to Verification step
            setNotification({ message: 'OTP sent! Please verify your email.', type: 'info' });
        } catch (err) {
             setNotification({ message: err.response?.data?.error || "Registration failed", type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNotification({ message: '', type: '' });
        try {
            await axios.post('/api/auth/verify-email', { 
                email: formData.email, 
                otp: formData.otp 
            });
            setNotification({ message: 'Account verified! Redirecting...', type: 'success' });
            setTimeout(() => router.push('/admin/login'), 2000);
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
             // Re-calling register works because we added logic to handle existing unverified users
            await axios.post('/api/auth/register', { 
                name: formData.name,
                username: formData.username,
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
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
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-maitriiPurple mb-2">
                    {step === 1 ? 'Create Account' : 'Verify Email'}
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    {step === 1 ? 'Join us to manage your loans' : `Enter the verification code sent to ${formData.email}`}
                </p>

                {step === 1 ? (
                    <form onSubmit={handleSignup} className="space-y-4">
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maitriiPurple focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maitriiPurple focus:border-transparent outline-none transition-all"
                                placeholder="johndoe123"
                            />
                        </div>
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
                            {loading ? 'Registering...' : 'Sign Up'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyEmail} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Verification Code</label>
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
                            {loading ? 'Verifying...' : 'Verify Email'}
                        </button>
                        <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={loading}
                            className="w-full text-sm text-gray-500 hover:text-maitriiPurple hover:underline mt-2"
                        >
                            Resend Code
                        </button>
                    </form>
                )}

                <div className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link href="/admin/login" className="text-maitriiPurple font-semibold hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
