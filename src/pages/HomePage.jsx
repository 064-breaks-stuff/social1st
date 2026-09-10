import { Link } from '../lib/router';
import ButtonLink from '../components/ButtonLink';
import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { CONTACT_PATH, serviceLinks } from '../config/site';

const journey = ['Paid Demand', 'Conversion Pages', 'CRM Intelligence', 'Automated Follow-Up', 'Revenue Visibility'];

export default function HomePage() {
  useDocumentMeta(
    'Todd Marketing | Connected Growth Infrastructure',
    'Todd Marketing connects paid advertising, conversion-oriented web experiences, CRM systems, and automation into one accountable growth infrastructure.'
  );

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Todd Marketing · Florida & nationwide</p>
            <h1>Your growth should not depend on disconnected vendors.</h1>
            <p className="lead">
              Todd Marketing connects paid acquisition, high-converting web experiences, CRM infrastructure,
              and automation into one accountable system.
            </p>
            <div className="hero__actions">
              <ButtonLink to={CONTACT_PATH}>Request strategy audit</ButtonLink>
              <ButtonLink to={CONTACT_PATH} secondary>
                Discuss your current setup
              </ButtonLink>
            </div>
          </div>
          <div className="engine-card" aria-label="Growth engine journey">
            <svg viewBox="0 0 640 320" role="img" aria-label="Connected growth engine diagram">
              <path d="M24 264h120l48-88h106l42-72h120l52-80h104" />
              {journey.map((label, idx) => {
                const x = [24, 192, 340, 502, 608][idx];
                const y = [264, 176, 176, 104, 24][idx];
                return (
                  <g key={label}>
                    <circle cx={x} cy={y} r="11" />
                    <text x={x + 14} y={y + 5}>{label}</text>
                  </g>
                );
              })}
            </svg>
            <ol>
              {journey.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PageIntro
            eyebrow="Founder-led accountability"
            title="One senior partner. One connected system."
            text="Direct communication, clear scope, explicit deliverables, and pricing logic built around what the business needs next."
          />
          <div className="founder-placeholder">
            <div className="placeholder-box" aria-label="Founder portrait placeholder">
              Todd Marketing founder portrait placeholder
            </div>
            <p>
              Placeholder content area for verified founder bio and portrait. Replace with real founder identity assets
              before launch.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cards-3">
          <article className="card">
            <h3>Problem framing</h3>
            <p>Most teams buy ads, website work, CRM setup, and automation separately and lose visibility between each layer.</p>
          </article>
          <article className="card">
            <h3>Ecosystem preview</h3>
            <p>Start with one layer, then connect Attract, Capture, Convert, Retain, and Optimize into a complete infrastructure.</p>
            <Link to="/ecosystem">Explore the ecosystem →</Link>
          </article>
          <article className="card">
            <h3>Service preview</h3>
            <ul>
              {serviceLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container cards-2">
          <article className="card">
            <h3>Proof-ready structure</h3>
            <p>Case study templates and placeholders are prepared for verified production examples only.</p>
            <Link to="/results">See proof framework →</Link>
          </article>
          <article className="card">
            <h3>Process preview</h3>
            <p>Diagnose, Map, Define, Build, Launch, Optimize — scoped and communicated directly with the founder.</p>
            <Link to="/process">Review process →</Link>
          </article>
        </div>
      </section>

      <div className="container">
        <ContactCtaPanel />
      </div>
    </>
  );
}
