import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

const framework = ['Challenge', 'System Gap', 'What We Built', 'Outcome', 'Why It Mattered'];

export default function ResultsPage() {
  useDocumentMeta(
    'Results | Todd Marketing',
    'Proof-ready case study structure for Todd Marketing engagements without fabricated numbers or testimonials.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Results"
          title="Proof-ready case study index"
          text="This page intentionally uses placeholders until verified client approvals and data are available."
        />
        <article className="card">
          <h2>Case Study Placeholder A</h2>
          <ul>
            {framework.map((item) => (
              <li key={item}><strong>{item}:</strong> Placeholder content pending verification.</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2>Case Study Placeholder B</h2>
          <ul>
            {framework.map((item) => (
              <li key={item}><strong>{item}:</strong> Placeholder content pending verification.</li>
            ))}
          </ul>
        </article>
        <ContactCtaPanel title="Want to discuss your own case study roadmap?" />
      </div>
    </section>
  );
}
