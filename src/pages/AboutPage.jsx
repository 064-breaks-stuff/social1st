import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function AboutPage() {
  useDocumentMeta(
    'About | Todd Marketing',
    'About Todd Marketing: founder-led growth infrastructure partner based in Florida and serving businesses nationwide.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="About"
          title="Founder-led by design"
          text="Todd Marketing is Florida-based and supports businesses across the United States with connected growth infrastructure."
        />
        <div className="cards-2">
          <article className="card">
            <h2>Founder placeholder</h2>
            <div className="placeholder-box">Replace with approved founder portrait and biography.</div>
            <p>Placeholder only. No fabricated identity details included.</p>
          </article>
          <article className="card">
            <h2>Operating principles</h2>
            <ul>
              <li>Connected ecosystem over fragmented vendors</li>
              <li>Direct communication and accountable ownership</li>
              <li>Clear scope, deliverables, and pricing logic</li>
              <li>Internal over-delivery standard</li>
            </ul>
          </article>
        </div>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
