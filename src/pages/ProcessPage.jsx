import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

const steps = ['Diagnose', 'Map', 'Define', 'Build', 'Launch', 'Optimize'];

export default function ProcessPage() {
  useDocumentMeta(
    'Process | Todd Marketing',
    'Todd Marketing’s six-step process: Diagnose, Map, Define, Build, Launch, Optimize.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Process"
          title="A transparent six-step engagement model"
          text="Direct communication, clear scope, and explicit deliverables at each stage without unsupported guarantees."
        />
        <ol className="step-list">
          {steps.map((step) => (
            <li key={step} className="card">
              <h2>{step}</h2>
              <p>Placeholder section for exact step deliverables, milestone definitions, and communication cadence.</p>
            </li>
          ))}
        </ol>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
