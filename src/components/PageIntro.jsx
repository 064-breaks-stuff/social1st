export default function PageIntro({ eyebrow, title, text }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
    </header>
  );
}
