import ContactCtaPanel from '../components/ContactCtaPanel';
import PageIntro from '../components/PageIntro';
import useDocumentMeta from '../hooks/useDocumentMeta';

const steps = [
  {
    title: 'Diagnose',
    detail: 'Audit demand sources, website conversion paths, CRM setup, and follow-up workflows to identify the highest-priority system gaps.'
  },
  {
    title: 'Map',
    detail: 'Define the target-state journey from first touch to revenue visibility, including key handoffs, ownership, and platform dependencies.'
  },
  {
    title: 'Define',
    detail: 'Confirm scope, milestones, success criteria, and implementation sequence so teams can execute with fewer assumptions.'
  },
  {
    title: 'Build',
    detail: 'Implement websites, funnel pathways, paid demand systems, CRM architecture, and n8n automations according to the approved roadmap.'
  },
  {
    title: 'Launch',
    detail: 'Run QA, activation checklists, and monitoring safeguards before campaigns and workflows are released to live operations.'
  },
  {
    title: 'Optimize',
    detail: 'Review telemetry, identify bottlenecks, and prioritize iterative improvements across Attract, Capture, Convert, Retain, and Optimize stages.'
  }
];

export default function ProcessPage() {
  useDocumentMeta(
    'Process | Todd Marketing',
    'Todd Marketing’s six-step process: Diagnose, Map, Define, Build, Launch, Optimize.'
  );

  return (
    <section className="section">
      <div className="container">
        <PageIntro
          eyebrow="Process"
          title="A transparent six-stage delivery model"
          text="Every engagement follows the same six stages so decisions, handoffs, and implementation quality stay consistent as scope expands."
        />
        <ol className="step-list">
          {steps.map((step) => (
            <li key={step.title} className="card">
              <h2>{step.title}</h2>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
        <ContactCtaPanel />
      </div>
    </section>
  );
}
