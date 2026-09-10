import ButtonLink from '../components/ButtonLink';
import { Link } from '../lib/router';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function NotFoundPage() {
  useDocumentMeta('Page not found | Todd Marketing', 'The requested page does not exist. Return to Todd Marketing home or contact page.');

  return (
    <section className="section">
      <div className="container not-found">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you requested could not be found. Use the links below to continue.</p>
        <div className="hero__actions">
          <ButtonLink to="/contact">Go to contact</ButtonLink>
        </div>
        <p><Link to="/">Or return to the home page.</Link></p>
      </div>
    </section>
  );
}
