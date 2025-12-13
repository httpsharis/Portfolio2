import React, { useEffect, useState } from 'react';

/**
 * LoadingScreen Component.
 * Displays a full-screen loading animation with a personal touch.
 * Includes an exit animation before unmounting.
 */
export default function LoadingScreen({ onComplete }) {
    const [animationStep, setAnimationStep] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Sequence of animations
        const steps = [
            { time: 500, action: () => setAnimationStep(1) }, // Start Name
            { time: 1200, action: () => setAnimationStep(2) }, // Show Role
            { time: 2200, action: () => setIsExiting(true) },  // Start Exit
            { time: 2800, action: () => onComplete && onComplete() } // Complete
        ];

        let timeouts = [];

        steps.forEach((step) => {
            const id = setTimeout(step.action, step.time);
            timeouts.push(id);
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div className="relative">
                {/* Initial Circle Pulse */}
                <div className={`absolute -inset-12 bg-neutral-800/50 rounded-full blur-2xl transition-all duration-1000 ${animationStep >= 1 ? 'scale-150 opacity-0' : 'scale-50 opacity-100'}`}></div>

                {/* Name Reveal */}
                <h1 className={`relative text-4xl md:text-6xl font-black text-white tracking-tight transition-all duration-700 transform ${animationStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Haris<span className="text-neutral-500">.</span>dev
                </h1>

                {/* Role Reveal - Typed effect style */}
                <div className={`mt-4 h-6 overflow-hidden flex justify-center transition-all duration-700 delay-100 ${animationStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-neutral-400 font-mono text-sm tracking-widest uppercase animate-pulse">
                        Portfolio Loading...
                    </p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-10 w-48 h-1 bg-neutral-900 rounded-full overflow-hidden">
                <div className={`h-full bg-white transition-all duration-2000 ease-out ${animationStep > 0 ? 'w-full' : 'w-0'}`}></div>
            </div>
        </div>
    );
}
