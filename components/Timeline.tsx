import React, { useState } from 'react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
    return (
        <section className="py-24 bg-white" id="experience">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-dark">Professional Journey</h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                </div>

                <div className="relative">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2 hidden md:block opacity-30"></div>

                    <div className="space-y-20">
                        {TIMELINE.map((item, index) => {
                            return (
                                <div key={item.id} className="relative flex flex-col md:flex-row-reverse gap-8 md:gap-0 group">
                                    <div className={`absolute left-0 md:left-1/2 size-4 rounded-full -translate-x-1/2 top-2 ring-4 ring-white z-10 shadow-lg transition-colors duration-300 ${index === 0 ? 'bg-primary' : 'bg-light group-hover:bg-primary'}`}></div>

                                    <div className="md:w-1/2 md:pl-12">
                                        <div className="flex flex-col items-start">
                                            <div className="flex items-center gap-3 mb-2">
                                                {item.logo && (
                                                    <LogoImage src={item.logo} alt={item.company} />
                                                )}
                                                <h3 className="text-2xl font-extrabold text-dark">{item.company}</h3>
                                            </div>
                                            <p className="text-primary font-bold mb-2">{item.role}</p>
                                            <p className="text-sm text-dark/50 mb-4 font-semibold uppercase tracking-wider">{item.period}</p>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 md:pr-12 md:text-right">
                                        <ul className="space-y-3 text-dark/60 list-disc pl-5 md:list-none md:pl-0">
                                            {item.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const LogoImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
    const [error, setError] = useState(false);

    if (error) return null;

    return (
        <img
            src={src}
            alt={`${alt} logo`}
            className="w-8 h-8 object-contain rounded-md"
            onError={() => setError(true)}
        />
    );
};

export default Timeline;