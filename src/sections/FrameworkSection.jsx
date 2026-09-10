import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const pillars = [
  {
    id: 'visibility',
    number: '01',
    label: 'Visibility',
    summary: 'Show up where strong buyers already search.',
    body:
      'Google presence, maps visibility, Local Services Ads, and search positioning work best when they are handled as one coordinated visibility layer.',
    points: [
      'Search and map visibility aligned around commercial intent.',
      'LSA and local presence treated as active lead channels, not side tasks.',
      'Positioning that supports stronger first impressions before the click.'
    ]
  },
  {
    id: 'conversion',
    number: '02',
    label: 'Conversion',
    summary: 'Turn intent into better calls and better leads.',
    body:
      'Landing pages, offer framing, page structure, and trust signals should reduce friction so the right people act faster and with more confidence.',
    points: [
      'Page structure built to reduce hesitation and improve action.',
      'Offer framing that clarifies value without unnecessary noise.',
      'Trust elements that support stronger lead quality, not just volume.'
    ]
  },
  {
    id: 'followthrough',
    number: '03',
    label: 'Follow-through',
    summary: 'Support the lead after it arrives.',
    body:
      'CRM organization, automations, response speed, and cleaner internal systems help businesses protect lead quality after the click or call happens.',
    points: [
      'Cleaner pipelines and workflows behind the scenes.',
      'Automation that supports speed without making communication feel robotic.',
      'Operational follow-through that protects revenue after lead capture.'
    ]
  }
];

const getActiveIndex = (progress) => {
  if (progress < 0.34) return 0;
  if (progress < 0.68) return 1;
  return 2;
};

export default function FrameworkSection() {
  const sectionRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(
    () => pillars[activeIndex] ?? pillars[0],
    [activeIndex]
  );

  const updateActiveIndex = (nextIndex) => {
    if (activeIndexRef.current === nextIndex) return;

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1025px)', () => {
        const steps = gsap.utils.toArray(
          '.framework-signature__step'
        );

        const trackLine = sectionRef.current?.querySelector(
          '.framework-signature__track-line'
        );

        const intro = sectionRef.current?.querySelector(
          '.framework-signature__intro'
        );

        const previewShell = sectionRef.current?.querySelector(
          '.framework-signature__preview-shell'
        );

        if (
          steps.length !== pillars.length ||
          !trackLine ||
          !intro ||
          !previewShell
        ) {
          return;
        }

        gsap.set(steps, {
          opacity: 0.38,
          x: 0
        });

        gsap.set(steps[0], {
          opacity: 1,
          x: 8
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center 65% center',
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
            intro,
            {
              y: -20,
              opacity: 0.78,
              duration: 0.18
            },
            0
          )
          .to(
            trackLine,
            {
              scaleY: 1,
              transformOrigin: 'top center',
              duration: 1
            },
            0
          )
          .to(
            steps[0],
            {
              opacity: 1,
              x: 8,
              duration: 0.16
            },
            0.05
          )
          .to(
            previewShell,
            {
              y: -8,
              duration: 1
            },
            0
          )
          .to(
            steps[0],
            {
              opacity: 0.52,
              x: 0,
              duration: 0.18
            },
            0.34
          )
          .to(
            steps[1],
            {
              opacity: 1,
              x: 8,
              duration: 0.18
            },
            0.34
          )
          .to(
            previewShell,
            {
              y: 8,
              duration: 0.24
            },
            0.34
          )
          .to(
            steps[1],
            {
              opacity: 0.52,
              x: 0,
              duration: 0.18
            },
            0.68
          )
          .to(
            steps[2],
            {
              opacity: 1,
              x: 8,
              duration: 0.18
            },
            0.68
          )
          .to(
            previewShell,
            {
              y: -4,
              duration: 0.24
            },
            0.68
          );
      });

      mm.add('(min-width: 768px) and (max-width: 1024px)', () => {
        const steps = gsap.utils.toArray(
          '.framework-signature__step'
        );

        if (steps.length !== pillars.length) return;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 55%',
          end: 'bottom 45%',
          onUpdate: (self) => {
            updateActiveIndex(getActiveIndex(self.progress));
          }
        });

        gsap.fromTo(
          steps,
          {
            opacity: 0.35,
            x: 0
          },
          {
            opacity: 1,
            x: 6,
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

      return () => {
        activeIndexRef.current = 0;
        setActiveIndex(0);
        mm.revert();
      };
    },
    {
      scope: sectionRef
    }
  );

  return (
    <section
      className="section framework-signature framework-signature--cinematic"
      id="framework"
      ref={sectionRef}
    >
      <div className="container">
        <div className="framework-signature__intro">
          <div className="services-premium__kicker">
            The framework
          </div>

          <div className="framework-signature__headline">
            <h2>
              One integrated system built around the three jobs that matter
              most.
            </h2>

            <p>
              Social 1st should feel less like a list of services and more like
              a clear operating model: stronger visibility, better conversion,
              and cleaner follow-through.
            </p>
          </div>
        </div>

        <div className="framework-signature__layout">
          <div className="framework-signature__track">
            <div className="framework-signature__track-line" />

            {pillars.map((pillar, index) => (
              <article
                key={pillar.id}
                className={`framework-signature__step ${
                  activeIndex === index ? 'is-active' : ''
                }`}
              >
                <div className="framework-signature__step-number">
                  {pillar.number}
                </div>

                <div className="framework-signature__step-copy">
                  <h3>{pillar.label}</h3>
                  <p>{pillar.summary}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="framework-signature__preview-shell">
            <div className="framework-signature__preview">
              <div className="framework-signature__preview-panel">
                <div className="framework-signature__preview-top">
                  <span className="framework-signature__preview-kicker">
                    {active.number}
                  </span>

                  <span className="framework-signature__preview-label">
                    {active.label}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    className="framework-signature__preview-stage"
                    initial={{
                      opacity: 0,
                      y: 20,
                      clipPath: 'inset(8% 0% 0% 0% round 24px)'
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      clipPath: 'inset(0% 0% 0% 0% round 24px)'
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                      clipPath: 'inset(0% 0% 8% 0% round 24px)'
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <div className="framework-signature__preview-body">
                      <h3>{active.summary}</h3>
                      <p>{active.body}</p>
                    </div>

                    <div className="framework-signature__preview-list">
                      {active.points.map((point, index) => (
                        <motion.div
                          key={`${active.id}-${point}`}
                          className="framework-signature__preview-item"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.34,
                            delay: index * 0.06,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        >
                          <span className="framework-signature__preview-index">
                            0{index + 1}
                          </span>

                          <span>{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}