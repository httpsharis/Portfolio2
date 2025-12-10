import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="mb-20">
            <div className="bg-neutral-50 dark:bg-neutral-900 p-10 rounded-2xl border border-neutral-100 dark:border-neutral-800 text-center">
                <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg mx-auto">
                    Feel free to reach out for collaborations or just a friendly hello.
                </p>

                <div className="space-y-4">
                    <a href="mailto:itsharis.dev@gmail.com" className="block text-xl font-medium hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                        <Mail className="inline-block" size={24} /> itsharis.dev@gmail.com
                    </a>
                    <a href="tel:+923457371958" className="block text-xl font-medium hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                        <Phone className="inline-block" size={24} /> +92 345 7371958
                    </a>
                </div>
            </div>
        </section>
    );
}
