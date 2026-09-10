import { Link } from '../lib/router';

export default function ButtonLink({ to, children, secondary = false, className = '', ...props }) {
  return (
    <Link to={to} className={`btn ${secondary ? 'btn--secondary' : ''} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}
