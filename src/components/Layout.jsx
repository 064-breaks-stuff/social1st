import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from '../lib/router';
import { Menu, X } from 'lucide-react';
import SiteLogo from './SiteLogo';
import ScrollToTop from './ScrollToTop';
import ButtonLink from './ButtonLink';
import { CONTACT_PATH, navLinks } from '../config/site';

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container site-header__inner">
          <SiteLogo />
          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `site-nav__link ${isActive ? 'active' : ''}`.trim()}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="site-header__actions">
            <ButtonLink to={CONTACT_PATH} className="desktop-only">
              Book a Growth Systems Audit
            </ButtonLink>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to} className="mobile-nav__link">
                {item.label}
              </Link>
            ))}
            <ButtonLink to={CONTACT_PATH}>Book a Growth Systems Audit</ButtonLink>
          </nav>
        )}
      </header>

      <main id="content" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <SiteLogo />
          <p>
            Florida-based growth infrastructure partner serving businesses across the United States.
          </p>
          <div className="site-footer__links">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
            <Link to={CONTACT_PATH}>Book a Growth Systems Audit</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
