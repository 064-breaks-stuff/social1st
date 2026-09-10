import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function AdvertisingPage() {
  useDocumentMeta(
    'Advertising | Todd Marketing',
    'Google Ads, Meta Ads, and Local Services Ads aligned with landing pages, tracking, and reporting.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Service detail"
          title="Advertising execution aligned to downstream conversion"
          text="Google Ads, Meta Ads, and Local Services Ads are planned with landing page alignment, event tracking, and reporting clarity from day one."
        />
        <div className="cards-3">
          <article className="card"><h2>Channels</h2><p>Google Ads, Meta Ads, Local Services Ads.</p></article>
          <article className="card"><h2>Alignment</h2><p>Message match from ad to page, clear offers, clear next step.</p></article>
          <article className="card"><h2>Measurement</h2><p>Conversion tracking and reporting structure without unsupported performance promises.</p></article>
        </div>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
