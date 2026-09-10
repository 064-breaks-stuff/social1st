import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const nextSteps = [
  'A focused review of your current visibility, lead flow, and conversion points.',
  'Clearer insight into where Google, LSAs, pages, or follow-up may be underperforming.',
  'A practical next-step direction based on your market, goals, and service mix.'
];

export default function FinalCTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section final-cta-premium" id="start">
      <div className="container">
        <motion.div
          className="final-cta-premium__shell"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 28,
            scale: shouldReduceMotion ? 1 : 0.985
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.82,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.div
            className="final-cta-premium__content"
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.68,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="final-cta-premium__kicker">
              Start here
            </div>

            <span className="final-cta-premium__chapter">
              10 / NEXT MOVE
            </span>

            <h2>
              Ready to build a stronger search-driven growth system?
            </h2>

            <p>
              Tell us where the business is today, what kind of work you want
              more of, and where growth feels stuck. We will help you identify
              the clearest next move.
            </p>

            <div className="final-cta-premium__next">
              <span className="final-cta-premium__next-label">
                What happens next
              </span>

              <div className="final-cta-premium__list">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    className="final-cta-premium__list-item"
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 10
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.42,
                      delay: shouldReduceMotion
                        ? 0
                        : 0.22 + index * 0.07,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <CheckCircle2 size={18} />
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="final-cta-premium__form"
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.68,
              delay: shouldReduceMotion ? 0 : 0.18,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="final-cta-premium__form-grid">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                />
              </label>

              <label>
                <span>Business type</span>
                <input
                  type="text"
                  name="businessType"
                  placeholder="e.g. roofing, dental, legal"
                />
              </label>

              <label>
                <span>Main goal</span>
                <select name="goal" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>More qualified leads</option>
                  <option>Better Google visibility</option>
                  <option>Improve conversion rate</option>
                  <option>Fix follow-up and CRM flow</option>
                </select>
              </label>

              <label className="final-cta-premium__full">
                <span>What feels broken right now?</span>
                <textarea
                  name="message"
                  placeholder="Tell us what is underperforming, where opportunities are slipping, or what kind of growth you want more of."
                />
              </label>
            </div>

            <button
              type="button"
              className="final-cta-premium__submit"
            >
              <span>Get My Growth Plan</span>
              <ArrowRight size={16} />
            </button>

            <p className="final-cta-premium__form-note">
              Clear thinking, practical next steps, and no bloated agency
              process.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}