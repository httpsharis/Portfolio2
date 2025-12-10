import React from 'react';

export default function Education() {
    return (
        <section id="education" className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">Education</h2>

            <div className="space-y-10">
                {/* Degree */}
                <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Bachelor's in Computer Science</h3>
                        <span className="text-sm text-neutral-500 font-mono">2023 - 2027 (Expected)</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">Minhaj University, Lahore</p>
                </div>

                {/* College */}
                <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">FSC Pre-Medical</h3>
                        <span className="text-sm text-neutral-500 font-mono">2020 - 2022</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">Superior Group of Colleges, Lahore</p>
                </div>

                {/* Certs */}
                <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">Certifications</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Pitman Certificate in English</p>
                </div>
            </div>
        </section>
    );
}
