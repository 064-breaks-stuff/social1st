import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CircleDashed, LayoutPanelTop, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import anime from 'animejs/lib/anime.es.js';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const heroCards = [
  {
    title: 'Visibility',
    text: 'Search, maps, LSAs, paid traffic, and positioning aligned around high-intent demand.',
    icon: LayoutPanelTop
  },
  {
    title: 'Conversion',
    text: 'Landing pages, copy, offers, and funnel logic designed to create better calls and leads.',
    icon: BarChart3
  },
  {
    title: 'Follow-through',
    text: 'CRM structure and automation that help your team respond faster and recover lost opportunities.',
    icon: CircleDashed
  }
];

const statPills = [
  'Google-first strategy',
  'Built for service businesses',
  'Systems that support better follow-up'
];

export default function Hero({ onOpenModal }) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1025px)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=50%',
            scrub: true,
            pin: true,
            anticipatePin: 1
          }
        });

        tl.to('.hero-premium__content', { yPercent: -16, opacity: 0.92 }, 0)
          .to('.hero-premium__eyebrow', { y: -32, opacity: 0.55 }, 0)
          .to('.hero-premium__title', { y: -48, scale: 0.955 }, 0)
          .to('.hero-premium__copy', { y: -22, opacity: 0.82 }, 0.02)
          .to('.hero-premium__pill-row', { y: -14, opacity: 0.7 }, 0.04)
          .to('.hero-premium__visual-shell', { rotate: -2.4, yPercent: 4, scale: 0.982 }, 0)
          .to('.hero-premium__orb--one', { xPercent: 12, yPercent: 18, scale: 1.18 }, 0)
          .to('.hero-premium__orb--two', { xPercent: -10, yPercent: -16, scale: 1.12 }, 0)
          .to('.hero-premium__gradient-band--one', { xPercent: 18, yPercent: -14 }, 0.08)
          .to('.hero-premium__gradient-band--two', { xPercent: -20, yPercent: 18 }, 0.08)
          .to('.hero-premium__core-ring--one', { scale: 1.12, rotate: 18, transformOrigin: '50% 50%' }, 0.1)
          .to('.hero-premium__core-ring--two', { scale: 1.06, rotate: -14, transformOrigin: '50% 50%' }, 0.1)
          .to('.hero-premium__panel--top', { yPercent: -16, opacity: 0.82 }, 0.12)
          .to('.hero-premium__panel--bottom', { yPercent: 18, opacity: 0.84 }, 0.12)
          .to('.hero-premium__card--1', { xPercent: 14, yPercent: -18, rotate: -4 }, 0.18)
          .to('.hero-premium__card--2', { xPercent: -10, yPercent: 4, rotate: 3.4 }, 0.18)
          .to('.hero-premium__card--3', { xPercent: 18, yPercent: 18, rotate: -2.2 }, 0.18)
          .to('.hero-premium__signal--one', { scaleY: 1.35, opacity: 0.95, transformOrigin: 'top center' }, 0.1)
          .to('.hero-premium__signal--two', { scaleY: 1.22, opacity: 0.9, transformOrigin: 'top center' }, 0.14)
          .to('.hero-premium__signal--three', { scaleY: 1.28, opacity: 0.9, transformOrigin: 'top center' }, 0.16);
      });

      mm.add('(min-width: 641px) and (max-width: 1024px)', () => {
        gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=80%',
            scrub: 1
          }
        })
          .to('.hero-premium__visual-shell', { y: 28, rotate: -1.2 }, 0)
          .to('.hero-premium__card--1', { y: -12 }, 0.05)
          .to('.hero-premium__card--2', { y: 12 }, 0.05)
          .to('.hero-premium__card--3', { y: -8 }, 0.05)
          .to('.hero-premium__content', { y: -18 }, 0);
      });

      mm.add('(min-width: 768px)', () => {
        anime({
          targets: '.hero-premium__pill',
          translateY: [10, 0],
          opacity: [0, 1],
          delay: anime.stagger(90, { start: 520 }),
          duration: 900,
          easing: 'easeOutExpo'
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section className="hero-premium hero-premium--cinematic" id="top" ref={sectionRef}>
      <div className="hero-premium__backdrop" aria-hidden="true">
        <div className="hero-premium__orb hero-premium__orb--one" />
        <div className="hero-premium__orb hero-premium__orb--two" />
        <div className="hero-premium__grid" />
        <div className="hero-premium__gradient-band hero-premium__gradient-band--one" />
        <div className="hero-premium__gradient-band hero-premium__gradient-band--two" />
      </div>

      <div className="hero-premium__inner">
        <motion.div
          className="hero-premium__content"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-premium__eyebrow">Search-first growth systems</div>

          <h1 className="hero-premium__title">
            Lead the Search.
            <span>Build a stronger system behind every lead.</span>
          </h1>

          <p className="hero-premium__copy">
            We help service businesses build a stronger Google presence, generate better
            opportunities, and create the systems that turn those opportunities into revenue.
          </p>

          <div className="hero-premium__actions">
            <a className="hero-premium__cta hero-premium__cta--primary" href="#start">
              <span>Get My Growth Plan</span>
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              className="hero-premium__cta hero-premium__cta--secondary"
              onClick={() => onOpenModal('strategy')}
            >
              <Play size={16} />
              <span>See how it works</span>
            </button>
          </div>

          <div className="hero-premium__pill-row">
            {statPills.map((pill) => (
              <span key={pill} className="hero-premium__pill">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-premium__visual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-premium__visual-shell">
            <div className="hero-premium__signal hero-premium__signal--one" />
            <div className="hero-premium__signal hero-premium__signal--two" />
            <div className="hero-premium__signal hero-premium__signal--three" />

            <div className="hero-premium__panel hero-premium__panel--top">
              <span className="hero-premium__panel-label">Growth system</span>
              <div className="hero-premium__panel-value">
                Visibility → Conversion → Follow-through
              </div>
            </div>

            <div className="hero-premium__visual-core" aria-hidden="true">
              <div className="hero-premium__core-ring hero-premium__core-ring--one" />
              <div className="hero-premium__core-ring hero-premium__core-ring--two" />
              <div className="hero-premium__core-axis hero-premium__core-axis--horizontal" />
              <div className="hero-premium__core-axis hero-premium__core-axis--vertical" />
            </div>

            <div className="hero-premium__visual-stack">
              {heroCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className={`hero-premium__card hero-premium__card--${index + 1}`}
                  >
                    <div className="hero-premium__card-icon">
                      <Icon size={20} />
                    </div>

                    <div className="hero-premium__card-body">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="hero-premium__panel hero-premium__panel--bottom">
              <button type="button" onClick={() => onOpenModal('audit')}>
                Open a growth review
              </button>
              <button type="button" onClick={() => onOpenModal('capabilities')}>
                Explore capabilities
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}