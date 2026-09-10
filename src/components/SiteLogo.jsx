import { Link } from '../lib/router';

export default function SiteLogo() {
  return (
    <Link className="site-logo" to="/" aria-label="Todd Marketing home">
      <svg viewBox="0 0 72 64" role="img" aria-hidden="true">
        <path d="M8 56V44c0-19.88 16.12-36 36-36h20v12H44c-13.25 0-24 10.75-24 24v12H8Z" />
        <rect x="40" y="40" width="24" height="16" rx="2" />
      </svg>
      <span>
        <strong>Todd</strong> Marketing
      </span>
    </Link>
  );
}
