import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function AdvertisingPage() {
  useDocumentMeta(
    'Advertising | Todd Marketing',
    'Google Ads, Meta Ads, and Local Services Ads aligned with landing pages, tracking, and reporting governance.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Service detail"
          title="Advertising systems aligned to conversion architecture"
          text="Paid demand strategy is built in coordination with offers, landing experiences, and CRM intake logic so campaign signals remain useful after the click."
        />
        <div className="cards-3">
          <article className="card">
            <h2>Demand strategy</h2>
            <p>Audience and intent mapping for Google Ads, Meta Ads, and Local Services Ads based on business priorities and buying-stage context.</p>
          </article>
          <article className="card">
            <h2>Creative and page alignment</h2>
            <p>Message match frameworks align ad copy, visual direction, offers, and landing page structure to reduce friction in the conversion path.</p>
          </article>
          <article className="card">
            <h2>Measurement governance</h2>
            <p>Tracking plans, event definitions, and reporting views are configured to support honest optimization without unsupported performance claims.</p>
          </article>
        </div>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
