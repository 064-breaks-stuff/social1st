import ButtonLink from './ButtonLink';
import { CONTACT_PATH } from '../config/site';

export default function ContactCtaPanel({ title = 'Ready to connect your growth system?', text }) {
  return (
    <section className="cta-panel" aria-label="Contact call to action">
      <p className="eyebrow">Start with a growth systems audit</p>
      <h2>{title}</h2>
      <p>{text || 'We will map where demand, conversion, CRM intelligence, and automation should connect first.'}</p>
      <div className="cta-panel__actions">
        <ButtonLink to={CONTACT_PATH}>Book a Growth Systems Audit</ButtonLink>
        <ButtonLink to={CONTACT_PATH} secondary>
          Review Your Current Growth System
        </ButtonLink>
      </div>
    </section>
  );
}
