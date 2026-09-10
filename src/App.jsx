import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EcosystemPage from './pages/EcosystemPage';
import ServicesPage from './pages/ServicesPage';
import WebsitesFunnelsPage from './pages/WebsitesFunnelsPage';
import AdvertisingPage from './pages/AdvertisingPage';
import CrmAutomationPage from './pages/CrmAutomationPage';
import ProcessPage from './pages/ProcessPage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { useLocation, useNavigate } from './lib/router';
import { useEffect } from 'react';

const routeMap = {
  '/': HomePage,
  '/ecosystem': EcosystemPage,
  '/services': ServicesPage,
  '/services/websites-funnels': WebsitesFunnelsPage,
  '/services/advertising': AdvertisingPage,
  '/services/crm-automation': CrmAutomationPage,
  '/process': ProcessPage,
  '/results': ResultsPage,
  '/about': AboutPage,
  '/contact': ContactPage
};

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/social-1st') {
      navigate('/', { replace: true });
    }
  }, [navigate, pathname]);

  const Page = routeMap[pathname] || NotFoundPage;

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
