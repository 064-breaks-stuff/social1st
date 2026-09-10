import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CircleDashed,
  LayoutPanelTop,
  Menu,
  X
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Hero from './sections/Hero';
import ResultsStrip from './sections/ResultsStrip';
import ProblemSection from './sections/ProblemSection';
import FrameworkSection from './sections/FrameworkSection';
import ServicesSection from './sections/ServicesSection';
import ProofSection from './sections/ProofSection';
import ProcessSection from './sections/ProcessSection';
import AboutSection from './sections/AboutSection';
import FAQSection from './sections/FAQSection';
import FinalCTASection from './sections/FinalCTASection';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const navItems = [
  { label: 'Results', href: '#results' },
  { label: 'Framework', href: '#framework' },
  { label: 'Services', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' }
];

const subviewContent = {
  strategy: {
    icon: LayoutPanelTop,
    eyebrow: 'Growth path',
    title: 'What working together looks like',
    text:
      'We start with visibility, connect it to lead generation, and support it with the systems that help your team move faster once opportunities start coming in.',
    bullets: [
      'Clear strategy mapped to your market, goals, and service mix.',
      'Google-focused lead generation paired with strong follow-through systems.',
      'Senior-level guidance without layers, noise, or generic agency process.'
    ]
  },
  audit: {
    icon: BarChart3,
    eyebrow: 'Google review',
    title: 'What a growth review can uncover',
    text:
      'Most service businesses do not need more random tactics. They need clarity on where visibility is leaking, where lead quality is slipping, and what part of the system is slowing growth down.',
    bullets: [
      'Google presence, Local Services Ads, and paid search visibility gaps.',
      'Landing page and funnel friction that lowers conversion quality.',
      'Follow-up and CRM process issues that cost revenue after the lead arrives.'
    ]
  },
  capabilities: {
    icon: CircleDashed,
    eyebrow: 'Capabilities',
    title: 'A broader system, not a disconnected service list',
    text:
      'Every service on the page is framed around visibility, conversion, and operational follow-through so the brand reads like a growth partner rather than a list of tactics.',
    bullets: [
      'Google Business Profile and Local Services Ads management.',
      'Google Ads, Meta Ads, websites, copy, and landing pages.',
      'Automations and CRM support that help leads turn into revenue.'
    ]
  }
};

function Logo() {
  return (
    <a className="site-logo" href="#top" aria-label="Social 1st Marketing home">
      <span className="site-logo__mark" aria-hidden="true" />
      <span className="site-logo__text">Social 1st Marketing</span>
    </a>
  );
}

function ChapterBackdrop({ activeChapter }) {
  return (
    <div className="site-chapter-backdrop" aria-hidden="true">
      <div className={`site-chapter-backdrop__wash site-chapter-backdrop__wash--${activeChapter}`} />
      <div className="site-chapter-backdrop__grid" />
      <div className="site-chapter-backdrop__noise" />
    </div>
  );
}

function SubviewPanel({ active, onClose }) {
  const content = active ? subviewContent[active] : null;
  const panelRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    if (active) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
      requestAnimationFrame(() => {
        panelRef.current?.focus();
      });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [active, onClose]);

  if (!content) return null;
  const Icon = content.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="site-subview"
        role="presentation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={onClose}
      >
        <motion.div
          ref={panelRef}
          className="site-subview__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="subview-title"
          aria-describedby="subview-description"
          tabIndex={-1}
          initial={{ opacity: 0, y: 36, scale: 0.985, clipPath: 'inset(8% 0% 0% 0% round 32px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, clipPath: 'inset(0% 0% 0% 0% round 32px)' }}
          exit={{ opacity: 0, y: 18, scale: 0.99, clipPath: 'inset(10% 0% 0% 0% round 32px)' }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="site-subview__chrome">
            <div className="site-subview__chrome-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <button
              type="button"
              className="site-subview__close"
              onClick={onClose}
              aria-label="Close panel"
            >
              <X size={18} />
            </button>
          </div>

          <div className="site-subview__body">
            <div className="site-subview__rail" aria-hidden="true">
              <div className="site-subview__rail-line" />
              <div className="site-subview__rail-node" />
            </div>

            <div className="site-subview__content">
              <div className="site-subview__eyebrow">
                <Icon size={16} />
                <span>{content.eyebrow}</span>
              </div>

              <h2 id="subview-title" className="site-subview__title">
                {content.title}
              </h2>

              <p id="subview-description" className="site-subview__text">
                {content.text}
              </p>

              <div className="site-subview__list">
                {content.bullets.map((bullet, index) => (
                  <motion.div
                    key={bullet}
                    className="site-subview__item"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.42,
                      delay: 0.08 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <span className="site-subview__index">{`0${index + 1}`}</span>
                    <span>{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSubview, setActiveSubview] = useState(null);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [activeChapter, setActiveChapter] = useState('hero');
  const shellRef = useRef(null);

  const subviewIsOpen = useMemo(() => Boolean(activeSubview), [activeSubview]);

  useEffect(() => {
    const onScroll = () => {
      setHeaderSolid(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = subviewIsOpen || mobileNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [subviewIsOpen, mobileNavOpen]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const sectionMap = [
        { id: 'top', chapter: 'hero' },
        { id: 'results', chapter: 'results' },
        { id: 'problem', chapter: 'problem' },
        { id: 'framework', chapter: 'framework' },
        { id: 'services', chapter: 'services' },
        { id: 'proof', chapter: 'proof' },
        { id: 'process', chapter: 'process' },
        { id: 'about', chapter: 'about' },
        { id: 'faq', chapter: 'faq' },
        { id: 'start', chapter: 'cta' }
      ];

      mm.add('(min-width: 768px)', () => {
        sectionMap.forEach(({ id, chapter }) => {
          const el = document.getElementById(id);
          if (!el) return;

          ScrollTrigger.create({
            trigger: el,
            start: 'top 45%',
            end: 'bottom 45%',
            onEnter: () => setActiveChapter(chapter),
            onEnterBack: () => setActiveChapter(chapter)
          });
        });
      });

      mm.add('(max-width: 767px)', () => {
        sectionMap.forEach(({ id, chapter }) => {
          const el = document.getElementById(id);
          if (!el) return;

          ScrollTrigger.create({
            trigger: el,
            start: 'top 60%',
            end: 'bottom 40%',
            onEnter: () => setActiveChapter(chapter),
            onEnterBack: () => setActiveChapter(chapter)
          });
        });
      });

      return () => mm.revert();
    },
    { scope: shellRef }
  );

  const openSubview = (key) => setActiveSubview(key);
  const closeSubview = () => setActiveSubview(null);

  return (
    <div ref={shellRef} className={`site-shell site-shell--chapter-${activeChapter}`}>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <ChapterBackdrop activeChapter={activeChapter} />

      <header className={`site-header ${headerSolid ? 'site-header--solid' : 'site-header--transparent'}`}>
        <div className="site-header__inner">
          <Logo />

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.label} className="site-nav__link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <button
              type="button"
              className="site-header__ghost"
              onClick={() => openSubview('strategy')}
            >
              How it works
            </button>

            <a className="site-header__cta" href="#start">
              <span>Get My Growth Plan</span>
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              className="site-header__menu"
              onClick={() => setMobileNavOpen((value) => !value)}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileNavOpen && (
            <motion.nav
              id="mobile-nav"
              className="site-mobile-nav"
              aria-label="Mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className="site-mobile-nav__link"
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <button
                type="button"
                className="site-mobile-nav__cta"
                onClick={() => {
                  setMobileNavOpen(false);
                  openSubview('strategy');
                }}
              >
                Book a strategy review
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="content">
        <Hero onOpenModal={openSubview} />
        <ResultsStrip />
        <ProblemSection />
        <FrameworkSection />
        <ServicesSection />
        <ProofSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>

      <div className="mobile-cta-bar" role="presentation">
        <div className="mobile-cta-bar__text">
          <span className="mobile-cta-bar__eyebrow">Ready to grow?</span>
          <span>Book the strategy review</span>
        </div>
        <a className="mobile-cta-bar__button" href="#start">
          Start
        </a>
      </div>

      <SubviewPanel active={activeSubview} onClose={closeSubview} />
    </div>
  );
}