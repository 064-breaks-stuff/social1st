import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function CrmAutomationPage() {
  useDocumentMeta(
    'CRM & Automation | Todd Marketing',
    'GoHighLevel setup, client CRM integrations, and n8n workflows for routing, follow-up, and visibility.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Service detail"
          title="CRM and automation as operating infrastructure"
          text="GoHighLevel configuration or client CRM integration, with n8n workflows that route leads, trigger follow-up, and improve booking visibility."
        />
        <div className="cards-2">
          <article className="card"><h2>Implementation areas</h2><ul><li>Lead routing</li><li>Follow-up workflows</li><li>Pipeline and booking automation</li><li>Re-engagement sequences</li></ul></article>
          <article className="card"><h2>Data visibility</h2><p>Track journey touchpoints from lead creation through handoff outcomes for better operational decisions.</p></article>
        </div>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
