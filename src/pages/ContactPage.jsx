import { useMemo, useState } from 'react';
import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  business: '',
  website: '',
  serviceInterest: '',
  challenge: '',
  consent: false
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please share your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter a work email.';
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.business.trim()) errors.business = 'Please enter your business name.';
  if (!values.serviceInterest) errors.serviceInterest = 'Please choose a service focus.';
  if (!values.challenge.trim()) errors.challenge = 'Please describe your primary growth challenge.';
  if (values.website && !/^https?:\/\//i.test(values.website.trim())) {
    errors.website = 'If provided, include http:// or https:// in your website URL.';
  }
  if (!values.consent) errors.consent = 'Please confirm consent to be contacted.';

  return errors;
}

export default function ContactPage() {
  useDocumentMeta(
    'Contact | Todd Marketing',
    'Contact Todd Marketing to start a growth systems audit and map your growth infrastructure priorities.'
  );

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function setField(name, value) {
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setValues(initialValues);
  }

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Contact"
          title="Book a Growth Systems Audit"
          text="Share your priorities below. After a valid submission, this page shows a staging confirmation state so your team can review the form experience safely."
        />

        {submitted && (
          <div className="form-success" role="status" aria-live="polite">
            <h2>Submission preview complete</h2>
            <p>
              Thanks for testing the intake flow. This confirmation is for staging/demo review and does not send data to a live lead system.
            </p>
          </div>
        )}

        <form className="contact-form" noValidate onSubmit={handleSubmit} aria-describedby={hasErrors ? 'form-errors' : undefined}>
          {hasErrors && (
            <div id="form-errors" className="form-error-summary contact-form__full" role="alert">
              Please review the highlighted fields and try again.
            </div>
          )}

          <label>
            Name
            <input
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => setField('name', event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
          </label>

          <label>
            Work email
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => setField('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => setField('phone', event.target.value)}
            />
          </label>

          <label>
            Business name
            <input
              name="business"
              autoComplete="organization"
              value={values.business}
              onChange={(event) => setField('business', event.target.value)}
              aria-invalid={Boolean(errors.business)}
              aria-describedby={errors.business ? 'business-error' : undefined}
            />
            {errors.business && <span id="business-error" className="form-error">{errors.business}</span>}
          </label>

          <label>
            Website
            <input
              type="url"
              name="website"
              inputMode="url"
              placeholder="https://"
              value={values.website}
              onChange={(event) => setField('website', event.target.value)}
              aria-invalid={Boolean(errors.website)}
              aria-describedby={errors.website ? 'website-error' : undefined}
            />
            {errors.website && <span id="website-error" className="form-error">{errors.website}</span>}
          </label>

          <label>
            Service interest
            <select
              name="serviceInterest"
              value={values.serviceInterest}
              onChange={(event) => setField('serviceInterest', event.target.value)}
              aria-invalid={Boolean(errors.serviceInterest)}
              aria-describedby={errors.serviceInterest ? 'service-error' : undefined}
            >
              <option value="">Select service</option>
              <option>Websites & Funnels</option>
              <option>Advertising</option>
              <option>CRM & Automation</option>
              <option>Integrated Ecosystem Build</option>
            </select>
            {errors.serviceInterest && <span id="service-error" className="form-error">{errors.serviceInterest}</span>}
          </label>

          <label className="contact-form__full">
            Primary challenge
            <textarea
              name="challenge"
              rows="5"
              value={values.challenge}
              onChange={(event) => setField('challenge', event.target.value)}
              aria-invalid={Boolean(errors.challenge)}
              aria-describedby={errors.challenge ? 'challenge-error' : undefined}
            />
            {errors.challenge && <span id="challenge-error" className="form-error">{errors.challenge}</span>}
          </label>

          <label className="consent contact-form__full">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(event) => setField('consent', event.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
            />
            <span>
              I consent to being contacted about this request and understand this page currently demonstrates the form experience in a staging context.
            </span>
            {errors.consent && <span id="consent-error" className="form-error">{errors.consent}</span>}
          </label>

          <button type="submit" className="btn contact-form__full">Book a Growth Systems Audit</button>
        </form>

        <ContactCtaPanel title="Prefer to send details by email first?" text="Use the same intake fields in your message and we will guide next steps for your growth systems audit." />
      </div>
    </section>
  );
}
