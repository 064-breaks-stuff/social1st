import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext({ pathname: '/', navigate: () => {} });

function normalizePath(pathname) {
  if (!pathname) return '/';
  return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
}

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to, { replace = false } = {}) => {
    const target = normalizePath(to);
    if (target === pathname) return;
    window.history[replace ? 'replaceState' : 'pushState']({}, '', target);
    setPathname(target);
  };

  const value = useMemo(() => ({ pathname, navigate }), [pathname]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useLocation() {
  const { pathname } = useContext(RouterContext);
  return { pathname };
}

export function useNavigate() {
  return useContext(RouterContext).navigate;
}

function isPlainLeftClick(event) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

export function Link({ to, onClick, children, ...props }) {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || !isPlainLeftClick(event) || props.target === '_blank') return;
        event.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export function NavLink({ to, className, children, ...props }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return (
    <Link to={to} className={resolvedClassName} aria-current={isActive ? 'page' : undefined} {...props}>
      {children}
    </Link>
  );
}
