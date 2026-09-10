import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bot,
  LayoutTemplate,
  Map,
  Megaphone,
  Search,
  Settings2
} from 'lucide-react';

const serviceGroups = [
  {
    key: 'visibility',
    label: 'Visibility',
    number: '01',
    title: 'Show up stronger when high-intent buyers start looking.',
    description:
      'This category should make it clear that Social 1st can help service businesses strengthen their local search presence where real buying intent already exists.',
    items: [
      {
        title: 'Google Business Profile',
        text:
          'Position and maintain the profile so it supports stronger local discovery, trust, and action.',
        icon: Map
      },
      {
        title: 'Local Services Ads',
        text:
          'Treat LSAs like an active lead channel that needs management, not a passive add-on.',
        icon: Search
      }
    ]
  },
  {
    key: 'traffic',
    label: 'Paid growth',
    number: '02',
    title: 'Bring paid traffic into a system that is built to convert.',
    description:
      'Paid media should not feel disconnected from the rest of the site. It should read as part of a broader lead-generation and growth engine.',
    items: [
      {
        title: 'Google Ads',
        text:
          'Search campaigns built around commercial intent, service priorities, and better lead quality.',
        icon: Megaphone
      },
      {
        title: 'Meta Ads',
        text:
          'Paid social support where it helps amplify offers, retarget demand, and support local acquisition.',
        icon: Settings2
      }
    ]
  },
  {
    key: 'conversion',
    label: 'Conversion systems',
    number: '03',
    title: 'Support the click with better pages, better messaging, and better follow-up.',
    description:
      'This category should signal that Social 1st does more than drive traffic. It helps create the conditions that turn interest into better calls and stronger opportunities.',
    items: [
      {
        title: 'Websites',
        text:
          'Page structure, layout, and positioning designed to make the business feel more credible and easier to contact.',
        icon: LayoutTemplate
      },
      {
        title: 'Landing pages',
        text:
          'Focused pages built to reduce friction, support trust, and convert specific traffic sources more effectively.',
        icon: LayoutTemplate
      },
      {
        title: 'Automations and CRM support',
        text:
          'Operational systems that help businesses respond faster, stay organized, and lose fewer opportunities after the lead arrives.',
        icon: Bot
      }
    ]
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(serviceGroups[0].key);

  const activeGroup = useMemo(
    () => serviceGroups.find((group) => group.key === activeTab) ?? serviceGroups[0],
    [activeTab]
  );

  return (
    <section className="section services-premium" id="services">
      <div className="container">
        <motion.div
          className="services-premium__heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="services-premium__kicker">Capabilities</div>
          <h2>A broader system, not a disconnected list of marketing tasks.</h2>
          <p>
            The page should make it obvious that Social 1st can support the full path from search
            visibility to conversion support and operational follow-through.
          </p>
        </motion.div>

        <div className="services-premium__shell">
          <div className="services-premium__tabs" role="tablist" aria-label="Service categories">
            {serviceGroups.map((group) => (
              <button
                key={group.key}
                type="button"
                role="tab"
                aria-selected={activeTab === group.key}
                className={`services-premium__tab ${activeTab === group.key ? 'is-active' : ''}`}
                onClick={() => setActiveTab(group.key)}
              >
                <span className="services-premium__tab-label">{group.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.key}
              className="services-premium__panel"
              role="tabpanel"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="services-premium__panel-head">
                <div className="services-premium__index">{activeGroup.number}</div>

                <div className="services-premium__panel-copy">
                  <h3>{activeGroup.title}</h3>
                  <p>{activeGroup.description}</p>
                </div>
              </div>

              <div
                className={`services-premium__cards ${
                  activeGroup.key === 'conversion'
                    ? 'services-premium__cards--conversion'
                    : 'services-premium__cards--visibility'
                }`}
              >
                {activeGroup.items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      className={`services-premium__card ${index === 0 ? 'services-premium__card--1' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <div className="services-premium__card-icon">
                        <Icon size={22} />
                      </div>

                      <div className="services-premium__card-body">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}