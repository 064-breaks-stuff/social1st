import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

const framework = [
  'Business context and strategic objective',
  'Verified baseline and attribution boundary',
  'System architecture implemented',
  'Execution timeline and operational constraints',
  'Observed outcomes with approved supporting evidence',
  'Next optimization priorities'
];

export default function ResultsPage() {
  useDocumentMeta(
    'Results | Todd Marketing',
    'Todd Marketing publishes case studies only when client-approved data and attribution context are available.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Results methodology"
          title="Proof is published only with approved data and attribution context"
          text="Todd Marketing does not fabricate outcomes, testimonials, awards, or client branding. Case studies are released only when source data and usage permissions are explicitly approved."
        />
        <article className="card">
          <h2>Case study publication standard</h2>
          <ul>
            {framework.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            New examples are added to this page when they satisfy these requirements and include clear context for what influenced the outcome.
          </p>
        </article>
        <ContactCtaPanel title="Want to design a proof-ready measurement plan first?" />
      </div>
    </section>
  );
}
