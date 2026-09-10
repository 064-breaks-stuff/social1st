import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    number: '01',
    title: 'Strategy and market review',
    text:
      'We align priorities, service lines, market reality, visibility, paid traffic, landing pages, and follow-up into one practical growth plan.'
  },
  {
    number: '02',
    title: 'Build and launch',
    text:
      'We implement campaigns, site sections, offers, and system support with clear communication throughout.'
  },
  {
    number: '03',
    title: 'Optimize and improve',
    text:
      'We keep refining visibility, lead quality, and conversion support based on what the market shows us.'
  }
];

const getActiveIndex = (progress) => {
  if (progress < 0.34) return 0;
  if (progress < 0.68) return 1;
  return 2;
};

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (nextIndex) => {
    if (activeIndexRef.current === nextIndex) return;

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1025px)', () => {
        const cards = gsap.utils.toArray('.process-signature__chapter');
        const progressFill = document.querySelector(
          '.process-signature__progress-fill'
        );

        if (cards.length !== steps.length || !progressFill) return;

        gsap.set(cards, {
          y: 80,
          opacity: 0.18,
          scale: 0.96,
          rotateX: -10,
          transformPerspective: 1000,
          transformOrigin: 'center center'
        });

        gsap.set(cards[0], {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center 15% center',
            end: '+=100%',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              updateActiveIndex(getActiveIndex(self.progress));
            }
          }
        });

        timeline
          .to(
            '.process-signature__intro',
            {
              y: -22,
              opacity: 0.76,
              duration: 0.18
            },
            0
          )
          .to(
            progressFill,
            {
              scaleY: 1,
              transformOrigin: 'top center',
              duration: 1
            },
            0
          )
          .to(
            cards[0],
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateX: 0,
              duration: 0.18
            },
            0.04
          )
          .to(
            cards[1],
            {
              y: 0,
              opacity: 0.34,
              scale: 0.96,
              rotateX: -4,
              duration: 0.18
            },
            0.12
          )
          .to(
            cards[2],
            {
              y: 0,
              opacity: 0.2,
              scale: 0.94,
              rotateX: -6,
              duration: 0.18
            },
            0.18
          )
          .to(
            cards[0],
            {
              xPercent: -10,
              opacity: 0.32,
              scale: 0.95,
              rotateX: -4,
              duration: 0.2
            },
            0.34
          )
          .to(
            cards[1],
            {
              xPercent: 0,
              opacity: 1,
              scale: 1.02,
              rotateX: 0,
              duration: 0.2
            },
            0.34
          )
          .to(
            cards[1],
            {
              xPercent: -10,
              opacity: 0.34,
              scale: 0.95,
              rotateX: -4,
              duration: 0.2
            },
            0.68
          )
          .to(
            cards[2],
            {
              xPercent: 0,
              opacity: 1,
              scale: 1.02,
              rotateX: 0,
              duration: 0.2
            },
            0.68
          );
      });

      mm.add('(min-width: 768px) and (max-width: 1024px)', () => {
        const cards = gsap.utils.toArray('.process-signature__chapter');

        if (cards.length !== steps.length) return;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 40%',
          onUpdate: (self) => {
            updateActiveIndex(getActiveIndex(self.progress));
          }
        });

        gsap.fromTo(
          cards,
          {
            y: 26,
            opacity: 0.35
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: 0.7
            }
          }
        );
      });

      mm.add('(min-width: 1025px)', () => {
        anime({
          targets: '.process-signature__chapter-number',
          translateY: [12, 0],
          opacity: [0, 1],
          delay: anime.stagger(90, { start: 180 }),
          duration: 700,
          easing: 'easeOutExpo'
        });
      });

      return () => {
        activeIndexRef.current = 0;
        setActiveIndex(0);
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="section process-signature process-signature--cinematic"
      id="process"
      ref={sectionRef}
    >
      <div className="container">
        <div className="process-signature__intro">
          <div className="services-premium__kicker">Process</div>

          <div className="process-signature__headline">
            <h2>
              From first conversation to live growth engine, the experience
              should feel clear.
            </h2>

            <p>
              The process should communicate structure without feeling bloated
              or corporate. Each stage should make the engagement feel easier
              to understand, easier to trust, and easier to move forward with.
            </p>
          </div>
        </div>

        <div className="process-signature__scene">
          <div
            className="process-signature__progress"
            aria-hidden="true"
          >
            <div className="process-signature__progress-line" />
            <div className="process-signature__progress-fill" />
          </div>

          <div className="process-signature__chapters">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={step.number}
                  className={`process-signature__chapter ${
                    isActive ? 'is-active is-dark' : ''
                  }`}
                >
                  <div className="process-signature__chapter-top">
                    <span className="process-signature__chapter-number">
                      {step.number}
                    </span>

                    <span className="process-signature__chapter-line" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${step.number}-${isActive ? 'active' : 'idle'}`}
                      className="process-signature__chapter-body"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        duration: 0.34,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </motion.div>
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}