import React from 'react';
import { Link } from 'react-router';
import { Lock } from 'lucide-react';

/**
 * Footer component displaying copyright and admin access link.
 */
export default function Footer() {
    return (
        <footer className="flex justify-between items-center pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500 mt-20">
            <span>&copy; {new Date().getFullYear()} Muhammad Haris</span>
            <Link
                to="/admin"
                className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2"
            >
                <Lock size={16} /> Admin
            </Link>
        </footer>
    );
}
