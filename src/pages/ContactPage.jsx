import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function ContactPage() {
  useDocumentMeta(
    'Contact | Todd Marketing',
    'Contact Todd Marketing to start a strategy audit and map your growth infrastructure priorities.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Contact"
          title="Request a strategy-audit conversation"
          text="Front-end intake form ready for future GoHighLevel or n8n integration. No external submission endpoint is configured yet."
        />

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Work email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
          <label>Business name<input name="business" autoComplete="organization" required /></label>
          <label>Website<input type="url" name="website" placeholder="https://" /></label>
          <label>
            Service interest
            <select name="serviceInterest" required>
              <option value="">Select service</option>
              <option>Websites & Funnels</option>
              <option>Advertising</option>
              <option>CRM & Automation</option>
              <option>Integrated Ecosystem Build</option>
            </select>
          </label>
          <label className="contact-form__full">
            Primary challenge
            <textarea name="challenge" rows="5" required />
          </label>
          <label className="consent contact-form__full">
            <input type="checkbox" required />
            I consent to being contacted about this request. (Integration and consent copy placeholders should be finalized before launch.)
          </label>
          <button type="submit" className="btn contact-form__full">Submit placeholder request</button>
        </form>

        <ContactCtaPanel title="Prefer email-first communication?" text="Use the same intake structure in your message and we will reply with next steps." />
      </div>
    </section>
  );
}
