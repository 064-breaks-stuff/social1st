import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What kinds of businesses are the best fit?',
    a:
      'The best fit is an established service business that depends on visibility, inbound opportunities, and strong communication to keep growth moving.'
  },
  {
    q: 'Do you only handle ads?',
    a:
      'No. Social 1st is positioned as a broader growth partner that can support visibility, paid media, websites, landing pages, CRM structure, and follow-up systems.'
  },
  {
    q: 'Why present the offer as a system?',
    a:
      'Because most service businesses do not need one disconnected deliverable. They need search visibility, conversion support, and operational follow-through working together.'
  },
  {
    q: 'What happens after I reach out?',
    a:
      'The next step is a strategy conversation or growth review focused on where visibility, lead quality, or conversion support may currently be underperforming.'
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="faq-premium section" id="faq">
      <div className="container">
        <motion.div
          className="faq-premium__intro"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 18
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: false, amount: 0.34 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.62,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="services-premium__kicker">
            FAQ
          </div>

          <div className="faq-premium__heading">
            <span className="faq-premium__chapter">
              09 / CLARITY
            </span>

            <h2>
              Answer the practical questions before they slow down action.
            </h2>

            <p>
              The FAQ should reduce hesitation with direct answers, not add
              another layer of visual noise.
            </p>
          </div>
        </motion.div>

        <div className="faq-premium__list">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <motion.article
                key={item.q}
                className={`faq-premium__item ${
                  isOpen ? 'is-open' : ''
                }`}
                initial={{
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : 18
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{ once: false, amount: 0.22 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.52,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1]
                }}
                layout
              >
                <button
                  type="button"
                  className="faq-premium__button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-premium__question">
                    {item.q}
                  </span>

                  <span
                    className="faq-premium__icon"
                    aria-hidden="true"
                  >
                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      style={{
                        display: 'inline-flex'
                      }}
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="faq-premium__answer-wrap"
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.28,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <div className="faq-premium__answer">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}