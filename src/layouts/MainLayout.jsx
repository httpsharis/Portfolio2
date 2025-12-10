import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

/**
 * MainLayout wraps the application content with Navbar and Footer.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 */
export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300 font-sans antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                {children}
                <Footer />
            </main>
        </div>
    );
}
