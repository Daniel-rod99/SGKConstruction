import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import CompanyProfile from "./pages/CompanyProfile";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetailPage from "./components/ProjectDetailPage";
import TermsAndConditions from "./components/TermsAndConditions";

import { pageTransition } from "./types/animations";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} {...pageTransition}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
