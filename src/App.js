import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import DigitalMarketing from './components/Pages/DigitalMarketing';
import ContentCreation from './components/Pages/ContentCreation';
import MotionGraphics from './components/Pages/MotionGraphics';
import PaidAdCampaign from './components/Pages/PaidAdCampaign';
import VideoEditing from './components/Pages/VideoEditing';
import WebAppDevelopment from './components/Pages/WebAppDevelopment';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamDetails from './components/Pages/TeamDetails';
import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<DigitalAgencyHome />} */}
        {/* <Route path="/" element={<DigitalAgencyHome />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route index element={<DigitalAgencyHome />} />
          <Route
            path="photography-agency"
            element={<PhotographyAgencyHome />}
          />
          {/* <Route path="digital-agency" element={<DigitalAgencyHome />} /> */}
          <Route path="marketing-agency" element={<MarketingAgencyHome />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route
            path="service/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="service/content-creation"
            element={<ContentCreation />}
          />
          <Route
            path="service/motion-graphics"
            element={<MotionGraphics />}
          />
          <Route
            path="service/paid-ad-campaign"
            element={<PaidAdCampaign />}
          />
          <Route
            path="service/video-editing"
            element={<VideoEditing />}
          />
          <Route
            path="service/web-app-development"
            element={<WebAppDevelopment />}
          />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route
            path="portfolio/:portfolioDetailsId"
            element={<PortfolioDetailsPage />}
          />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:teamDetails" element={<TeamDetails />} />
          <Route
            path="/case-study/:caseStudyDetailsId"
            element={<CaseStudyDetailsPage />}
          />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
          <Route
            path="creative-portfolio"
            element={<CreativePortfolioHome />}
          />
          <Route
            path="showcase-portfolio"
            element={<ShowcasePortfolioHome />}
          />
          <Route
            path="case-study-showcase"
            element={<CaseStudyShowcaseHome />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
