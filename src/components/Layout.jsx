import { useState } from 'react';
import { Link, NavLink } from '../lib/router';
import { Menu, X } from 'lucide-react';
import SiteLogo from './SiteLogo';
import ScrollToTop from './ScrollToTop';
import ButtonLink from './ButtonLink';
import { CONTACT_PATH, navLinks } from '../config/site';

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
              Start with contact
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
              <Link key={item.to} to={item.to} className="mobile-nav__link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <ButtonLink to={CONTACT_PATH} onClick={() => setMobileOpen(false)}>
              Contact Todd Marketing
            </ButtonLink>
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
          </div>
        </div>
      </footer>
    </>
  );
}
