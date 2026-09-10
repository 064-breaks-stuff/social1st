import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function WebsitesFunnelsPage() {
  useDocumentMeta(
    'Websites & Funnels | Todd Marketing',
    'Conversion architecture, websites, landing pages, and integration planning for Todd Marketing engagements.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Service detail"
          title="Websites and funnels built for confident conversion decisions"
          text="This track focuses on information hierarchy, conversion flows, and implementation quality so paid traffic and CRM automation have a reliable foundation."
        />
        <div className="cards-2">
          <article className="card">
            <h2>Website and funnel scope</h2>
            <ul>
              <li>Messaging framework for target audiences and offers</li>
              <li>Information architecture and page-level conversion pathways</li>
              <li>Landing page and form experiences mapped to CRM requirements</li>
              <li>Technical QA across performance, accessibility, and responsive behavior</li>
            </ul>
          </article>
          <article className="card">
            <h2>Implementation detail</h2>
            <p>
              Deliverables include design-direction guardrails, content structure support, event tracking requirements, and launch readiness checklists so downstream teams can execute consistently.
            </p>
          </article>
        </div>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
