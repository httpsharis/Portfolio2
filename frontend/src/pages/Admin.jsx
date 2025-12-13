import React, { useState, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AdminContext } from '../context/AdminContext';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, Save } from 'lucide-react';

/**
 * Admin page for managing projects.
 * Includes a simple PIN-based authentication.
 */
export default function Admin() {
    const { login, isAdmin } = useContext(AdminContext);
    const [pin, setPin] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAdmin) {
            navigate('/');
        }
    }, [isAdmin, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        const correctPin = import.meta.env.VITE_ADMIN_PIN;
        if (pin === correctPin) {
            login(correctPin); // Using PIN as token for now
            navigate('/');
        } else {
            alert('Incorrect PIN');
        }
    };
    if (!isAdmin) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 px-4">
                <Helmet>
                    <title>Admin Login | Muhammad Haris</title>
                </Helmet>
                <div className="w-full max-w-sm p-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm">
                    <h1 className="text-2xl font-bold text-center mb-6">System Access</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Enter PIN"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 text-center text-xl tracking-widest transition-all"
                            autoFocus
                        />
                        <div className="flex gap-4 pt-2">
                            <Link to="/" className="flex-1 py-3 text-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                Cancel
                            </Link>
                            <button type="submit" className="flex-1 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity">
                                Unlock
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    // Render Dashboard (Optional fallback if redirect hasn't happened yet)
    return null;
}
