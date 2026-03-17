import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-primary overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-bold rounded-full uppercase tracking-wider">
              Executive Summary
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-light leading-relaxed max-w-xl">
              <p>
                I'm a product leader who likes turning complex product areas into clear strategy and shipped outcomes. I've spent the last decade building and growing products in FinTech and SaaS, across B2B and B2C experiences on web and mobile.
              </p>
              <p>
                My value is in taking ideas from early discovery to working releases, then scaling adoption through iteration. I'm at my best where teams need focus, alignment, and momentum-shaping the roadmap, partnering closely with design and engineering, and using data and AI to keep improving what we ship.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Strategy</span>
                  <span className="text-sm text-light">Roadmap & Growth</span>
                </div>
                <div className="w-px h-10 bg-white/30 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Execution</span>
                  <span className="text-sm text-light">MVP to Scale</span>
                </div>
                <div className="w-px h-10 bg-white/30 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Impact</span>
                  <span className="text-sm text-light">Revenue & Retention</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="abstract-element mesh-grid flex items-center justify-center border border-white/10">
              <div className="blob w-64 h-64 -top-10 -left-10 bg-secondary/40"></div>
              <div className="blob w-80 h-80 bottom-0 right-0 bg-light/20" style={{ animationDelay: '-5s' }}></div>
              <div className="relative z-10 p-12 text-center">
                <div className="size-24 bg-white/15 rounded-3xl shadow-2xl flex items-center justify-center mb-6 mx-auto border border-white/20">
                  <span className="material-symbols-outlined text-white text-5xl">rocket_launch</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-32 bg-secondary/30 rounded-full mx-auto"></div>
                  <div className="h-1.5 w-48 bg-white/30 rounded-full mx-auto"></div>
                  <div className="h-1.5 w-24 bg-light/30 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;