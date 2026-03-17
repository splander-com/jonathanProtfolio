import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-24 relative z-10">
      <div className="bg-light/70 backdrop-blur-sm border border-dark/10 rounded-xl p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-primary/20">
          {STATS.map((stat, index) => {
            const isInfinite = index < 2;
            const animationClass = isInfinite ? 'animate-roll-infinite' : 'animate-roll-once';

            return (
              <div
                  key={index}
                  className={`flex flex-col items-center lg:items-start lg:px-8 pt-8 lg:pt-0 ${index === 0 ? 'first:pl-0 border-t lg:border-t-0' : ''}`}
              >
                {stat.values.length > 1 ? (
                  <div className="rolling-metric-container w-full">
                    <div className={animationClass}>
                      {stat.values.map((val, vIndex) => (
                          <span key={vIndex} className="h-12 flex items-center text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
                              {val}
                          </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <span className="h-12 flex items-center text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
                      {stat.values[0]}
                  </span>
                )}
                <span className="text-sm font-bold text-primary uppercase tracking-widest mt-2">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;