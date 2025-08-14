import { motion } from "framer-motion";
import { fadeUp } from "../types/animations";

import { useState } from "react";
import Header from "../components/Header";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <>
      <Header />

      <div className="bg-[var(--color-primary)] text-white flex flex-col justify-center">
        <div className="py-20 px-5 md:px-10 max-w-[1600px] mx-auto md:grid md:grid-cols-2">
          <motion.h1
            {...fadeUp}
            className="text-4xl md:text-6xl lg:text-8xl font-bold pb-8"
          >
            Our projects
          </motion.h1>
          <motion.p {...fadeUp} className="lg:col-start-1">
            SGKConstruction’s legacy of successfully completed projects is the
            best demonstration of our capabilities. We have a diverse portfolio
            which showcases our deep expertise and experience.
          </motion.p>
        </div>
      </div>

      <div className="py-20 px-5 md:px-10 max-w-[1600px] mx-auto">
        <motion.h1
          {...fadeUp}
          className="text-4xl lg:text-6xl font-semibold text-center mb-10"
        >
          All Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-20">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visibleCount < projects.length && (
          <motion.div {...fadeUp} className="mt-10 text-center">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-md shadow-md hover:bg-[var(--color-secondary)] transition"
            >
              View More Projects
            </button>
          </motion.div>
        )}
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
