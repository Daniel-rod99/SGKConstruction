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

import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/company-profile"
            element={
              <motion.div {...pageTransition}>
                <CompanyProfile />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div {...pageTransition}>
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div {...pageTransition}>
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div {...pageTransition}>
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <motion.div {...pageTransition}>
                <ProjectDetailPage />
              </motion.div>
            }
          />
          <Route
            path="/terms"
            element={
              <motion.div {...pageTransition}>
                <TermsAndConditions />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
