// app/page.tsx (or components/Sectors.tsx)
import React from 'react';

export default function HomeUI() {
  const sectors = [
    {
      title: 'Mortgage',
      icon: '🏠',
      sub: 'Fixed · ARM · FHA',
      tag: '3D closing',
    },
    {
      title: 'Wholesale/Non-QM',
      icon: '📊',
      sub: 'Bank statement · DSCR',
      tag: 'flexible lending',
    },
    {
      title: 'Real Estate',
      icon: '🏢',
      sub: 'Residential · Commercial',
      tag: 'investment',
    },
    {
      title: 'Insurance',
      icon: '🛡️',
      sub: 'Home · Title · Flood',
      tag: 'protection',
    },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0b1120] overflow-x-hidden font-['Inter',sans-serif] p-4">
      {/* Floating orbs (motion background) */}
      <div className="fixed w-[400px] h-[400px] bg-blue-500 rounded-full blur-[80px] opacity-20 -top-10 -left-5 animate-orb1 pointer-events-none -z-10" />
      <div className="fixed w-[500px] h-[500px] bg-purple-500 rounded-full blur-[80px] opacity-20 -bottom-15 -right-5 animate-orb2 pointer-events-none -z-10" />
      <div className="fixed w-[300px] h-[300px] bg-cyan-400 rounded-full blur-[80px] opacity-15 top-2/5 left-3/5 animate-orb3 pointer-events-none -z-10" />
      <div className="fixed inset-0 pointer-events-none -z-5 animate-shine" />

      {/* 3D scene */}
      <div className="w-full max-w-[1100px] perspective-1200 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 preserve-3d animate-floatGrid">
          {sectors.map((sector, index) => (
            <div
              key={sector.title}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 text-center shadow-2xl shadow-black/40 preserve-3d transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-y-6 hover:rotate-x-4 hover:scale-102 hover:translate-z-20 hover:shadow-[0_30px_60px_-18px_#1e293b,0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_30px_rgba(59,130,246,0.25)] hover:border-blue-500/30 hover:bg-white/10 animate-cardFloat"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <div className="text-5xl mb-4 inline-block drop-shadow-[0_8px_12px_rgba(0,180,255,0.2)] translate-z-30 transition-transform duration-300 group-hover:translate-z-50 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#3b82f6] animate-iconPulse">
                {sector.icon}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight bg-gradient-to-br from-slate-50 to-blue-300 bg-clip-text text-transparent translate-z-20 shadow-[0_0_30px_rgba(59,130,246,0.2)] mb-1">
                {sector.title}
              </h3>
              <div className="w-10 h-0.5 mx-auto my-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 translate-z-15 opacity-60" />
              <p className="text-sm text-blue-200/80 translate-z-10">
                {sector.sub}
              </p>
              <p className="text-xs text-white/40 mt-2 translate-z-5">
                {sector.tag}
              </p>
            </div>
          ))}
        </div>

        {/* caption */}
        <div className="text-center text-white/20 text-xs tracking-widest mt-8 uppercase select-none">
          <span className="inline-block px-4 py-1 border border-white/5 rounded-full backdrop-blur-sm bg-white/5">
            ◆ 3D motion · tailwind + next ◆
          </span>
        </div>
      </div>
    </main>
  );
}