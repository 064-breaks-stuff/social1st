import { useRef } from 'react';
import { CircleOff, MousePointerClick, RefreshCcw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const pains = [
  {
    icon: MousePointerClick,
    title: 'Clicks without real momentum',
    text:
      'Traffic can create activity without creating the kind of calls, jobs, and opportunities the business actually wants more of.'
  },
  {
    icon: CircleOff,
    title: 'Visibility gaps on Google',
    text:
      'Profiles, Local Services Ads, and broader local search presence often stay under-managed while stronger competitors capture demand first.'
  },
  {
    icon: RefreshCcw,
    title: 'Leads arrive, then stall',
    text:
      'Without better pages, faster follow-up, and cleaner systems behind the scenes, strong opportunities still leak out of the pipeline.'
  }
];

export default function ProblemSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1025px)', () => {
        const cards = gsap.utils.toArray('.problem-section__card');

        gsap.set(cards, {
          transformOrigin: '50% 50%',
          y: 80,
          opacity: 0.25,
          scale: 0.92
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center 35% center',
            end: '+=100%',
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        });

        tl.to('.problem-section__intro', { y: -26, opacity: 0.72, duration: 0.24 }, 0)
          .to('.problem-section__grid', { yPercent: -2, duration: 1 }, 0)
          .to(cards[0], { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.28 }, 0.1)
          .to(cards[1], { y: 0, opacity: 0.95, scale: 0.985, duration: 0.28 }, 0.35)
          .to(cards[2], { y: 0, opacity: 0.9, scale: 0.97, duration: 0.28 }, 0.6)
          .to(cards[0], { xPercent: -8, scale: 0.96, opacity: 0.52, duration: 0.24 }, 0.76)
          .to(cards[1], { xPercent: 0, scale: 1.02, opacity: 1, duration: 0.24 }, 0.76)
          .to(cards[2], { xPercent: 8, scale: 0.96, opacity: 0.56, duration: 0.24 }, 0.76)
          .to(cards[1], { xPercent: -8, scale: 0.96, opacity: 0.52, duration: 0.22 }, 1.02)
          .to(cards[2], { xPercent: 0, scale: 1.03, opacity: 1, duration: 0.22 }, 1.02)
          .to('.problem-section__veil', { opacity: 1, duration: 0.3 }, 0.78)
          .to('.problem-section__grain', { opacity: 0.48, duration: 0.45 }, 0.2);
      });

      mm.add('(min-width: 768px) and (max-width: 1024px)', () => {
        gsap.fromTo(
          '.problem-section__card',
          { y: 26, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: 0.6
            }
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section className="section problem-section" id="problem" ref={sectionRef}>
      <div className="problem-section__veil" aria-hidden="true" />
      <div className="problem-section__grain" aria-hidden="true" />

      <div className="container">
        <div className="problem-section__intro">
          <div className="results-strip-premium__kicker">The friction</div>

          <div className="results-strip-premium__headline-row">
            <h2>You do not need more random marketing activity. You need a system that holds together.</h2>
            <p>
              Most service businesses are not short on tactics. They are short on alignment. When
              visibility, paid traffic, landing pages, and follow-up are handled separately,
              performance becomes harder to trust and harder to improve.
            </p>
          </div>
        </div>

        <div className="problem-section__grid">
          {pains.map((pain, index) => {
            const Icon = pain.icon;

            return (
              <article
                key={pain.title}
                className={`problem-section__card ${index === 1 ? 'problem-section__card--featured' : ''}`}
              >
                <div className="problem-section__card-top">
                  <div className="problem-section__icon">
                    <Icon size={18} />
                  </div>
                  <span className="problem-section__index">{`0${index + 1}`}</span>
                </div>

                <div className="problem-section__card-content">
                  <div className="card-kicker">Common growth drag</div>
                  <div className="problem-section__title">{pain.title}</div>
                  <p>{pain.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}