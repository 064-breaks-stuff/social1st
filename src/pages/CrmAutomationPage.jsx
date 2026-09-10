import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function CrmAutomationPage() {
  useDocumentMeta(
    'CRM & Automation | Todd Marketing',
    'CRM configuration, GoHighLevel implementation planning, and n8n workflow architecture for lead routing and follow-up.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Service detail"
          title="CRM and n8n automation as operational infrastructure"
          text="This track aligns pipeline structure, routing logic, and follow-up workflows so sales and operations teams can act quickly with better context."
        />
        <div className="cards-2">
          <article className="card">
            <h2>Core build scope</h2>
            <ul>
              <li>GoHighLevel account architecture or integration with an existing CRM</li>
              <li>Lead source tagging and qualification logic</li>
              <li>n8n workflow design for routing, assignment, and follow-up triggers</li>
              <li>Pipeline visibility and handoff checkpoints for internal teams</li>
            </ul>
          </article>
          <article className="card">
            <h2>Execution principles</h2>
            <p>
              Automation is scoped to reduce manual overhead while preserving human review points, compliance awareness, and reporting clarity across every stage of the customer journey.
            </p>
          </article>
        </div>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
