import { motion } from 'framer-motion';
import { Building2, Radar, ShieldCheck } from 'lucide-react';

const aboutCards = [
  {
    label: 'Operating style',
    title: 'Practical, accountable, and commercially aware.',
    text:
      'The brand should feel welcoming and confident without sounding stiff, bloated, or overly corporate.',
    icon: ShieldCheck
  },
  {
    label: 'Company direction',
    title: 'A trusted growth company, not a solo-operator brand.',
    text:
      'Clients should feel that they are engaging a capable business built to support visibility, conversion, and operational follow-through.',
    icon: Building2,
    featured: true
  },
  {
    label: 'Client experience',
    title: 'Clear strategy, cleaner execution, and a higher standard of support.',
    text:
      'Every interaction should reinforce trust, responsiveness, and the sense that important details will be handled well.',
    icon: Radar
  }
];

export default function AboutSection() {
  return (
    <section className="section about-signature about-signature--editorial" id="about">
      <div className="container">
        <motion.div
          className="about-signature__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.32 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="results-strip-premium__kicker">
            About Social 1st
          </div>

          <div className="about-signature__headline">
            <div>
              <span className="about-signature__chapter">08 / THE COMPANY</span>

              <h2>
                A growth company built to stay close to the work.
              </h2>
            </div>

            <p>
              Social 1st is positioned as a premium growth partner for
              businesses that want stronger visibility, better lead flow, and
              a team they can trust to handle the details.
            </p>
          </div>
        </motion.div>

        <div className="about-signature__layout">
          <motion.div
            className="about-signature__statement"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="about-signature__line" />

            <p>
              Clients are not hiring random execution. They are hiring a
              partner that understands how visibility, conversion, and
              follow-through work together when growth is taken seriously.
            </p>

            <span className="about-signature__statement-index">
              SOCIAL 1ST / 08
            </span>
          </motion.div>

          <div className="about-signature__grid">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.label}
                  className={`about-signature__card ${
                    card.featured
                      ? 'about-signature__card--featured'
                      : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{
                    duration: 0.72,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="about-signature__card-top">
                    <div className="about-signature__icon">
                      <Icon size={20} />
                    </div>

                    <span className="about-signature__card-index">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="about-signature__card-content">
                    <span className="about-signature__card-label">
                      {card.label}
                    </span>

                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}