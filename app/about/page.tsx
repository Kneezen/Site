'use client';

import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedBorder from '../components/AnimatedBorder';
import ScrollReveal from '../components/ScrollReveal';

const ACCENT = '#ECEFF1';

const MANIFESTO = [
  {
    tag: 'MISSION STATEMENT',
    content:
      'Operating at the precise intersection of human linguistic expression and cognitive computing architectures. Every system I build — whether a lesson plan or a language model training pipeline — is rooted in the same structural principle: decode complexity, encode clarity, and deliver meaning with zero signal loss.',
  },
  {
    tag: 'THE NARRATIVE',
    content:
      'Structural immersion in language began not in a university lecture hall, but during an intensive, universal English language teaching curriculum throughout high school — a crucible that forged instinct-level grammatical awareness and phonological sensitivity long before formal pedagogy entered the picture. That foundation evolved into a dual-engine path: driving pedagogical innovation in modern classrooms at TED University while simultaneously training next-generation large language models to parse context, nuance, and advanced semantic reasoning at Outlier. The global transit insights gathered from navigating metropolitan systems in Tokyo and Beijing further sharpened a cross-cultural awareness that now informs every teaching framework and AI evaluation rubric I construct.',
  },
  {
    tag: 'ADMINISTRATIVE TRAJECTORY',
    content:
      'An administrative trajectory driven by heavy, systematic reliance on complex lesson-planning architectures. Expertise centers on designing deeply scaffolded educational environments using comprehensive template frameworks to balance cognitive load and maximize target-language output. By merging Vygotskyan social cognitive theories with structural data engineering, language is treated as an active, living operating system.',
  },
  {
    tag: 'METHODOLOGICAL STACK',
    content:
      'The architecture relies on the exact same core principles whether optimizing an LLM or scaffold-teaching a communicative language classroom: clarity of instruction, logical sequencing, and ruthless elimination of ambiguity. This is materialized through a highly defined methodological stack: Communicative Language Teaching (CLT) for authentic interaction, Presentation-Practice-Production (PPP) loops for systematic acquisition, the 5E Instructional Model for narrative-driven engagement, and UNESCO-aligned PREPARE frameworks for generating high-impact acoustic and materials-driven learning assets.',
  },
];

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  const titleReveal = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1.2, tension: 100, friction: 28 },
    delay: 200,
  });

  const subtitleReveal = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 120, friction: 26 },
    delay: 500,
  });

  return (
    <div className="min-h-screen w-full bg-transparent text-white font-inter flex flex-col selection:bg-white selection:text-black antialiased relative">
      {/* GLOBAL FIXED VIDEO FLOOR */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none opacity-30"
        style={{ zIndex: -20 }}
        src="/3129595-uhd_3840_2160_30fps.mp4"
      />

      {/* Ambient page glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] pointer-events-none glow-pulse"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${ACCENT}09 0%, transparent 70%)` }}
      />

      {/* Back Navigation */}
      <Link
        href="/"
        className="fixed top-6 left-8 z-50 font-mono text-xs font-semibold tracking-wider text-neutral-400 uppercase hover-flicker transition-colors duration-500"
      >
        ← RETURN TO CANVAS
      </Link>

      {/* Page Header */}
      <div className="w-full border-b border-white/10 bg-black/40 backdrop-blur-sm px-8 md:px-16 py-5 flex justify-end items-center font-mono text-xs md:text-sm text-neutral-400 font-medium tracking-widest uppercase relative z-10">
        <div>SECTION: PHILOSOPHY</div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-start px-8 md:px-16 py-28 relative z-10">
        <div className="w-full max-w-screen-2xl space-y-24">
          {/* Title Block */}
          <div className="space-y-6">
            <animated.div style={titleReveal}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.05em] text-white leading-[0.95]">
                Executive Profile & Philosophy
              </h1>
            </animated.div>
            <animated.div style={subtitleReveal}>
              <div className="h-px w-20" style={{ backgroundColor: `${ACCENT}40` }} />
            </animated.div>
            <animated.div style={subtitleReveal}>
              <p className="font-mono text-xs md:text-sm tracking-widest text-neutral-400 font-medium uppercase">
                Core Philosophy
              </p>
            </animated.div>
          </div>

          {/* Manifesto Sections */}
          <div className="space-y-12">
            {MANIFESTO.map((section, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <AnimatedBorder delay={400 + idx * 250} accentColor={ACCENT}>
                  <div className="backdrop-blur-md bg-zinc-950/40 p-10 md:p-14 lg:p-16 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                      <span className="font-mono text-xl md:text-2xl lg:text-3xl tracking-[0.08em] font-bold uppercase leading-tight" style={{ color: ACCENT }}>
                        {section.tag}
                      </span>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl text-neutral-300 leading-[1.9] font-sans tracking-[0.01em]">
                      {section.content}
                    </p>
                  </div>
                </AnimatedBorder>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact / Social Links */}
          <ScrollReveal delay={150}>
            <AnimatedBorder delay={800} accentColor={ACCENT}>
              <div className="backdrop-blur-md bg-zinc-950/40 p-10 md:p-14 lg:p-16 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                  <span className="font-mono text-xl md:text-2xl lg:text-3xl tracking-[0.08em] font-bold uppercase leading-tight" style={{ color: ACCENT }}>
                    COMMUNICATIONS & NETWORK
                  </span>
                </div>
                <div className="h-px w-full" style={{ backgroundColor: `${ACCENT}10` }} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 w-full">
                  <a
                    href="https://www.linkedin.com/in/ozan-özen-6a46a82a3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden font-mono text-sm md:text-base lg:text-lg tracking-[0.15em] font-bold px-8 py-6 uppercase text-center transition-all duration-500 flex items-center justify-center gap-3"
                    style={{ color: ACCENT, border: `1px solid ${ACCENT}40` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = ACCENT;
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = ACCENT;
                    }}
                  >
                    LINKEDIN // NETWORK
                  </a>
                  
                  <a
                    href="mailto:ozanozen05@gmail.com"
                    className="group relative overflow-hidden font-mono text-sm md:text-base lg:text-lg tracking-[0.15em] font-bold px-8 py-6 uppercase text-center transition-all duration-500 flex items-center justify-center gap-3"
                    style={{ color: ACCENT, border: `1px solid ${ACCENT}40` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = ACCENT;
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = ACCENT;
                    }}
                  >
                    EMAIL // DIRECT CHANNEL
                  </a>
                </div>
              </div>
            </AnimatedBorder>
          </ScrollReveal>

          {/* Signature Divider */}
          <ScrollReveal delay={200}>
            <div className="flex items-center gap-6 pt-8">
              <div className="h-px flex-grow" style={{ backgroundColor: `${ACCENT}15` }} />
              <span className="font-mono text-xs md:text-sm tracking-widest text-neutral-400 font-medium uppercase">
                END_TRANSMISSION // PHILOSOPHY_MODULE
              </span>
              <div className="h-px flex-grow" style={{ backgroundColor: `${ACCENT}15` }} />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-white/10 bg-black/40 backdrop-blur-sm px-8 md:px-16 py-5 flex justify-between items-center font-mono text-xs font-semibold tracking-wider text-neutral-400 uppercase relative z-10">
        <div>ABOUT // CORE ARCHITECTURE</div>
        <div>ANKARA, TR // 2026</div>
      </div>
    </div>
  );
}
