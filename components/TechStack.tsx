import React from 'react';
import { TECH_TOOLS } from '../constants';

const TechStack: React.FC = () => {
    const marqueeTools = [...TECH_TOOLS, ...TECH_TOOLS];

    return (
        <section className="py-24 bg-primary overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">Technology & Tools</h2>
                <div className="h-1.5 w-20 bg-light rounded-full"></div>
            </div>

            <div className="relative w-full overflow-hidden group">
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                    {marqueeTools.map((tool, index) => (
                        <div key={`${tool.name}-${index}`} className="flex flex-col items-center justify-center mx-4 w-32 h-32 bg-white/10 rounded-2xl border border-white/15 p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-105 hover:bg-white/20 cursor-pointer">
                            <img
                                src={tool.logo}
                                alt={tool.name}
                                className="w-16 h-16 object-contain mb-2 brightness-0 invert"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <span className="hidden text-xs font-bold text-center text-white">{tool.name}</span>
                        </div>
                    ))}
                </div>
                {/* Fade edges */}
                <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default TechStack;