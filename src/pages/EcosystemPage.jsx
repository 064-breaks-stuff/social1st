import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

const stages = [
  {
    title: 'Attract',
    text: 'Channel strategy, message architecture, and demand planning across paid and organic touchpoints to reach the right audience with intentional offers.'
  },
  {
    title: 'Capture',
    text: 'Conversion-focused pages, form pathways, and technical tracking setup that preserves lead context instead of losing it between tools.'
  },
  {
    title: 'Convert',
    text: 'CRM qualification rules, routing logic, and booking workflows that help sales teams respond quickly with cleaner information.'
  },
  {
    title: 'Retain',
    text: 'Post-conversion communication and lifecycle automation that supports onboarding, follow-up, and long-term relationship continuity.'
  },
  {
    title: 'Optimize',
    text: 'Cross-stage analysis that identifies bottlenecks, prioritizes experiments, and sharpens decisions with practical revenue visibility.'
  }
];

export default function EcosystemPage() {
  useDocumentMeta(
    'Ecosystem | Todd Marketing',
    'Understand Todd Marketing’s five-stage growth ecosystem: Attract, Capture, Convert, Retain, and Optimize.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Growth ecosystem"
          title="Attract, Capture, Convert, Retain, Optimize — one connected operating model"
          text="The ecosystem is designed so strategy, execution, and reporting stay connected as your business scales from early demand generation through long-term revenue visibility."
        />
        <div className="cards-5">
          {stages.map((stage) => (
            <article key={stage.title} className="card">
              <h2>{stage.title}</h2>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
        <ContactCtaPanel title="Want to identify your highest-leverage stage first?" />
      </div>
    </section>
  );
}
