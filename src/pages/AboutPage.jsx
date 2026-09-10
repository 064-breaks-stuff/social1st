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
          title="Founder-led growth infrastructure partner"
          text="Todd Marketing is based in Florida and serves businesses nationwide with a connected approach to demand, conversion, CRM intelligence, and automation."
        />
        <div className="cards-2">
          <article className="card">
            <h2>Founder-led narrative</h2>
            <p>
              Engagements are led directly by the founder to keep strategy and implementation aligned. Public founder identity details and portrait assets are published only after explicit approval.
            </p>
          </article>
          <article className="card">
            <h2>Operating principles</h2>
            <ul>
              <li>Connected ecosystem over fragmented vendor handoffs</li>
              <li>Clear scope, transparent milestones, and practical documentation</li>
              <li>Implementation choices based on business context, not hype</li>
              <li>Proof published only with approved data and attribution context</li>
            </ul>
          </article>
        </div>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
