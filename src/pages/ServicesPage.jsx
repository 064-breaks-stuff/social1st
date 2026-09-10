import { Link } from '../lib/router';
import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { serviceLinks } from '../config/site';

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
          title="Three delivery tracks. One integrated objective."
          text="Each service is scoped with clear deliverables and designed to connect with the rest of your growth infrastructure."
        />
        <div className="cards-3">
          {serviceLinks.map((service) => (
            <article key={service.to} className="card">
              <h2>{service.label}</h2>
              <p>Delivery-focused module with architecture notes, implementation steps, and integration checkpoints.</p>
              <Link to={service.to}>View details →</Link>
            </article>
          ))}
        </div>
        <ContactCtaPanel title="Need help selecting the right service track?" />
      </div>
    </section>
  );
}
