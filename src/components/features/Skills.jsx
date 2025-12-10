import React from 'react';
import { Layout, Server, Wrench } from 'lucide-react';

/**
 * Skills section displaying technical expertise.
 */
export default function Skills() {
    const skills = [
        {
            title: 'Frontend',
            icon: <Layout className="text-blue-500" />,
            items: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
        },
        {
            title: 'Backend & DB',
            icon: <Server className="text-green-500" />,
            items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB']
        },
        {
            title: 'Tools & Others',
            icon: <Wrench className="text-orange-500" />,
            items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Context API']
        }
    ];

    return (
        <section id="stack" className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-12">
                {skills.map((skill) => (
                    <div key={skill.title}>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            {skill.icon} {skill.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span key={item} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 rounded-md text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
