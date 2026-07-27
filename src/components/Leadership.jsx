import React from 'react';
import { educationTimeline, leadershipList } from '../data/portfolioData';

const TimelineCard = ({ item, align = 'left', delay = '0' }) => {
  if (!item) {
    return <div className="hidden md:block w-full" />;
  }

  return (
    <div
      data-aos={align === 'left' ? 'fade-right' : 'fade-left'}
      data-aos-delay={delay}
      className={`w-full ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}
    >
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_15px_35px_rgba(255,42,42,0.1)] transition-all duration-500">
        <div className={`flex flex-wrap gap-2 items-center mb-3 ${align === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
          <span className="bg-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#ff2a2a]/30">
            {item.badge}
          </span>
        </div>

        <h3 className="text-white text-xl font-black mb-1 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
          {item.title}
        </h3>
        <p className="text-red-400 text-xs font-bold font-mono tracking-wider uppercase mb-1">
          {item.role}
        </p>
        {item.period && (
          <p className="text-white/45 text-[11px] font-bold tracking-wider uppercase mb-4">
            {item.period}
          </p>
        )}
        <p className="text-white/60 text-sm leading-relaxed font-medium">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Leadership = () => {
  const rows = Array.from(
    { length: Math.max(educationTimeline.length, leadershipList.length) },
    (_, index) => ({
      education: educationTimeline[index],
      leadership: leadershipList[index],
      index,
    })
  );

  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Education & Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education & Leadership
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Education on the left side and leadership on the right side in one aligned timeline.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          <div className="w-full">
            {rows.map((row) => (
              <div key={`row-${row.index}`} className="relative flex flex-col md:flex-row items-stretch justify-between mb-12 md:mb-16 w-full group">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 top-6 bg-[#ff2a2a] rounded-full border-4 border-black z-30 shadow-[0_0_15px_#ff2a2a] group-hover:scale-125 transition-transform duration-300" />

                <div className="w-full md:w-[45%] pl-12 md:pl-0 md:order-1">
                  <TimelineCard item={row.education} align="left" delay={String(row.index * 100)} />
                </div>

                <div className="w-full md:w-[45%] pl-12 md:pl-0 md:order-2 mt-5 md:mt-0">
                  <TimelineCard item={row.leadership} align="right" delay={String(row.index * 100 + 50)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
