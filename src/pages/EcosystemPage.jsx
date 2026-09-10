import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

const stages = ['Attract', 'Capture', 'Convert', 'Retain', 'Optimize'];

export default function EcosystemPage() {
  useDocumentMeta(
    'Ecosystem | Todd Marketing',
    'Understand Todd Marketing’s five-stage growth ecosystem: Attract, Capture, Convert, Retain, and Optimize.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Growth ecosystem"
          title="A five-stage system built to stay connected"
          text="You can start with one layer and build toward a complete demand, conversion, CRM, and automation infrastructure."
        />
        <div className="cards-5">
          {stages.map((stage) => (
            <article key={stage} className="card">
              <h2>{stage}</h2>
              <p>
                Placeholder module for {stage.toLowerCase()} strategy, deliverables, and future supporting visuals.
              </p>
            </article>
          ))}
        </div>
        <ContactCtaPanel title="Need help deciding where to start?" />
      </div>
    </section>
  );
}
