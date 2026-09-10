import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Workflow
} from 'lucide-react';

const proofSignals = [
  {
    label: 'Fit',
    title: 'Built for businesses where responsiveness matters.',
    text:
      'The positioning is designed for established service businesses that depend on visibility, inbound opportunities, and strong communication.',
    icon: BriefcaseBusiness
  },
  {
    label: 'Standard',
    title: 'Close to the work, without unnecessary layers.',
    text:
      'Social 1st should feel lean, premium, commercially aware, and accountable from the first conversation onward.',
    icon: BadgeCheck
  },
  {
    label: 'Confidence',
    title: 'A clearer brand creates easier decisions.',
    text:
      'When the offer is structured clearly, the right prospects can understand the fit faster and move forward with more confidence.',
    icon: Workflow
  }
];

export default function ProofSection() {
  return (
    <section className="section proof-editorial" id="proof">
      <div className="container">
        <motion.div
          className="proof-editorial__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.32 }}
          transition={{
            duration: 0.78,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="services-premium__kicker">
            Proof and positioning
          </div>

          <div className="proof-editorial__heading">
            <span className="proof-editorial__chapter">06 / TRUST</span>

            <h2>
              The experience should make the standard obvious.
            </h2>
          </div>
        </motion.div>

        <div className="proof-editorial__layout">
          <motion.aside
            className="proof-editorial__quote"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.28 }}
            transition={{
              duration: 0.82,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="proof-editorial__quote-mark">“</span>

            <p>
              The goal is not to look like the biggest agency in the room. It
              is to feel like the clearest and most capable partner for the
              work that matters.
            </p>

            <div className="proof-editorial__quote-line" />

            <span className="proof-editorial__quote-label">
              The Social 1st standard
            </span>
          </motion.aside>

          <div className="proof-editorial__signals">
            {proofSignals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <motion.article
                  key={signal.label}
                  className={`proof-editorial__signal ${
                    index === 1 ? 'proof-editorial__signal--featured' : ''
                  }`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="proof-editorial__signal-top">
                    <div className="proof-editorial__signal-icon">
                      <Icon size={19} />
                    </div>

                    <span className="proof-editorial__signal-label">
                      {signal.label}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="proof-editorial__signal-arrow"
                    />
                  </div>

                  <div className="proof-editorial__signal-body">
                    <h3>{signal.title}</h3>
                    <p>{signal.text}</p>
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