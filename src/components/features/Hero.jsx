import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

/**
 * Hero section displaying introduction and social links.
 */
export default function Hero() {
    return (
        <section id="home" className="mb-32">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full">
                Lahore, Pakistan
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Hello, I'm Muhammad Haris. <br />
                MERN Stack Developer.
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8">
                Motivated developer with a strong foundation in frontend and backend technologies. Experienced in building responsive web applications using React.js, Node.js, and Tailwind CSS. Passionate about creating pixel-perfect UI/UX and optimizing application performance.
            </p>
            <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Contact Me
                </a>
                <a href="/MERN Stack Developer CV.pdf" download className="px-6 py-3 rounded-lg font-medium border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex items-center gap-2">
                    <Download size={20} /> Download CV
                </a>
                <a href="https://github.com/httpsharis" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-medium border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex items-center gap-2">
                    <Github size={20} /> GitHub
                </a>
                <a href="https://linkedin.com/in/devharis" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-medium border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex items-center gap-2">
                    <Linkedin size={20} /> LinkedIn
                </a>
            </div>
        </section>
    );
}
