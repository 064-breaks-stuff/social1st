import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function WebsitesFunnelsPage() {
  useDocumentMeta(
    'Websites & Funnels | Todd Marketing',
    'Conversion architecture, websites, landing pages, and integrations for Todd Marketing clients.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Service detail"
          title="Websites & funnels built for conversion architecture"
          text="From information hierarchy to form pathways, every page is designed for clear user decisions and measurable handoff into CRM workflows."
        />
        <div className="cards-2">
          <article className="card"><h2>Deliverables</h2><ul><li>Conversion architecture map</li><li>Website and landing page builds</li><li>Offer and CTA structure</li><li>CRM and tracking integrations</li></ul></article>
          <article className="card"><h2>Operational notes</h2><p>Includes content framework, quality assurance, and launch-ready implementation handoff.</p></article>
        </div>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
