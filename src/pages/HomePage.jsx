import { Link } from '../lib/router';
import ButtonLink from '../components/ButtonLink';
import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { CONTACT_PATH, serviceLinks } from '../config/site';

const journey = [
  { label: 'Paid Demand', x: 60, y: 260 },
  { label: 'Conversion Pages', x: 238, y: 208 },
  { label: 'CRM Intelligence', x: 404, y: 164 },
  { label: 'Automated Follow-Up', x: 560, y: 112 },
  { label: 'Revenue Visibility', x: 704, y: 66 }
];

export default function HomePage() {
  useDocumentMeta(
    'Todd Marketing | Connected Growth Infrastructure',
    'Todd Marketing connects paid advertising, conversion-oriented web experiences, CRM systems, and automation into one accountable growth infrastructure.'
  );

  return (
    <>
      <section className="hero hero--engine">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Todd Marketing · Florida & nationwide</p>
            <h1>The Todd Marketing Growth Engine connects every stage from first click to booked revenue.</h1>
            <p className="lead">
              Founder-led strategy and execution across paid demand, conversion pages, CRM intelligence, and automated follow-up so
              your team can see where revenue visibility is gained or lost.
            </p>
            <div className="hero__actions">
              <ButtonLink to={CONTACT_PATH}>Book a Growth Systems Audit</ButtonLink>
              <ButtonLink to={CONTACT_PATH} secondary>
                Review Your Current Growth System
              </ButtonLink>
            </div>
          </div>

          <div className="engine-card" aria-label="Todd Marketing Growth Engine journey">
            <div className="engine-art" aria-hidden="true">
              <div className="engine-grid" />
              <div className="engine-arches">
                <span />
                <span />
                <span />
              </div>
              <svg viewBox="0 0 760 320" role="img" aria-label="Paid Demand to Revenue Visibility journey map">
                <title>Growth system journey</title>
                <path className="engine-path" d="M60 260 C140 250 172 224 238 208 C304 192 332 182 404 164 C474 146 504 128 560 112 C616 96 652 82 704 66" />
                <path className="engine-path engine-path--secondary" d="M52 274 C152 248 188 228 248 212 C332 190 364 174 426 150 C500 124 548 108 706 56" />
                {journey.map((item, index) => (
                  <g key={item.label}>
                    <circle className="engine-node" cx={item.x} cy={item.y} r="8" />
                    <text x={item.x + 14} y={item.y - 12}>{item.label}</text>
                    <text className="engine-telemetry" x={item.x + 14} y={item.y + 10}>
                      {index === 0 && 'Signal: Demand'}
                      {index === 1 && 'Signal: Conversion'}
                      {index === 2 && 'Signal: Qualification'}
                      {index === 3 && 'Signal: Follow-up'}
                      {index === 4 && 'Signal: Visibility'}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <ol className="engine-journey-list">
              {journey.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PageIntro
            eyebrow="Founder-led accountability"
            title="One senior partner guiding architecture, execution, and decisions"
            text="Todd Marketing operates with a neutral, founder-led approach focused on clarity, responsible scope, and implementation discipline instead of inflated claims."
          />
          <div className="cards-2">
            <article className="card">
              <h2>Public-safe profile</h2>
              <p>
                Founder identity details are published only with approved assets and attribution context. Until then, this site stays intentionally neutral while
                still explaining exactly how engagements are run.
              </p>
            </article>
            <article className="card">
              <h2>Growth system priorities</h2>
              <ul>
                <li>Connect demand generation with downstream conversion pathways</li>
                <li>Align CRM structure with real sales operations</li>
                <li>Automate follow-up without losing context or compliance</li>
                <li>Maintain clear reporting visibility across the full customer journey</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cards-3">
          <article className="card">
            <h3>Ecosystem architecture</h3>
            <p>The ecosystem is structured as Attract, Capture, Convert, Retain, and Optimize so each stage has clear ownership and connected handoffs.</p>
            <Link to="/ecosystem">Explore the ecosystem →</Link>
          </article>
          <article className="card">
            <h3>Service tracks</h3>
            <ul>
              {serviceLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3>Proof methodology</h3>
            <p>
              Results are shared as case studies only when data and attribution are approved. The framework is visible now so decision-makers know how proof will be
              documented later.
            </p>
            <Link to="/results">See proof methodology →</Link>
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container cards-2">
          <article className="card">
            <h3>Process clarity</h3>
            <p>Diagnose, Map, Define, Build, Launch, and Optimize with clear artifacts and communication checkpoints at each stage.</p>
            <Link to="/process">Review the six-stage process →</Link>
          </article>
          <article className="card">
            <h3>Next step</h3>
            <p>Start with a growth systems audit to identify the highest-leverage connection points in your current stack.</p>
            <ButtonLink to={CONTACT_PATH} secondary>
              Book a Growth Systems Audit
            </ButtonLink>
          </article>
        </div>
      </section>

      <div className="container">
        <ContactCtaPanel />
      </div>
    </>
  );
}
