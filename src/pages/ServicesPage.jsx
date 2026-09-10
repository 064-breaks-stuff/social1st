import { Link } from '../lib/router';
import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { serviceLinks } from '../config/site';

const serviceSummaries = {
  '/services/websites-funnels': 'Conversion-focused websites and funnel architecture that support clear decisions and measurable CRM handoff.',
  '/services/advertising': 'Paid media planning and management aligned with offer strategy, landing experiences, and tracking governance.',
  '/services/crm-automation': 'CRM, GoHighLevel, and n8n workflow architecture that supports routing, follow-up, and operational visibility.'
};

export default function ServicesPage() {
  useDocumentMeta(
    'Services | Todd Marketing',
    'Todd Marketing service overview: Websites & Funnels, Advertising, and CRM & Automation.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Services"
          title="Distinct service tracks designed to work as one growth system"
          text="Each engagement can start with a single service and expand into a connected ecosystem with shared strategy, implementation standards, and measurable handoff criteria."
        />
        <div className="cards-3">
          {serviceLinks.map((service) => (
            <article key={service.to} className="card">
              <h2>{service.label}</h2>
              <p>{serviceSummaries[service.to]}</p>
              <Link to={service.to}>View details →</Link>
            </article>
          ))}
        </div>
        <ContactCtaPanel title="Need help selecting your first service track?" />
      </div>
    </section>
  );
}
