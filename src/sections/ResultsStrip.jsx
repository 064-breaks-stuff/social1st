import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Gauge,
  MapPinned,
  PhoneCall
} from 'lucide-react';

const resultCards = [
  {
    id: 'visibility',
    kicker: 'Search visibility',
    title: 'Show up where serious buyers already look.',
    text:
      'A stronger Google presence helps service businesses capture more of the intent that already exists in their market.',
    icon: MapPinned,
    featured: true
  },
  {
    id: 'lead-quality',
    kicker: 'Lead quality',
    title: 'Create better inbound opportunities.',
    text:
      'Lead flow matters most when the right prospects are calling, booking, and moving forward.',
    icon: PhoneCall
  },
  {
    id: 'clarity',
    kicker: 'Commercial clarity',
    title: 'Make growth easier to understand.',
    text:
      'The system should make it clearer what is working, where friction exists, and what needs attention next.',
    icon: Gauge
  }
];

const revealTransition = {
  duration: 0.78,
  ease: [0.16, 1, 0.3, 1]
};

export default function ResultsStrip() {
  return (
    <section className="section results-signature" id="results">
      <div className="container">
        <motion.div
          className="results-signature__intro"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={revealTransition}
        >
          <div className="results-strip-premium__kicker">
            What matters most
          </div>

          <div className="results-signature__heading">
            <div>
              <span className="results-signature__chapter">01</span>

              <h2>
                Growth should feel clearer before it feels bigger.
              </h2>
            </div>

            <p>
              Social 1st connects visibility, lead quality, and commercial
              clarity so the growth path is easier to understand and easier to
              improve.
            </p>
          </div>
        </motion.div>

        <div className="results-signature__stage">
          <div className="results-signature__stage-line" />

          <div className="results-signature__cards">
            {resultCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.id}
                  className={`results-signature__card ${
                    card.featured ? 'results-signature__card--featured' : ''
                  }`}
                  initial={{
                    opacity: 0,
                    y: 48,
                    rotate: index === 0 ? -2 : index === 1 ? 1.5 : -1
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: 0
                  }}
                  viewport={{ once: false, amount: 0.28 }}
                  transition={{
                    ...revealTransition,
                    delay: index * 0.12
                  }}
                >
                  <div className="results-signature__card-top">
                    <div className="results-signature__icon">
                      <Icon size={21} />
                    </div>

                    <span className="results-signature__index">
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="results-signature__arrow"
                    />
                  </div>

                  <div className="results-signature__card-content">
                    <span className="results-signature__card-kicker">
                      {card.kicker}
                    </span>

                    <h3>{card.title}</h3>

                    <p>{card.text}</p>
                  </div>

                  <div className="results-signature__card-footer">
                    <span>
                      {index === 0
                        ? 'Demand'
                        : index === 1
                          ? 'Opportunity'
                          : 'Direction'}
                    </span>

                    <span className="results-signature__card-dot" />
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