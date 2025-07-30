import Header from "../components/Header";

import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="py-20 px-5 md:px-10 max-w-[1600px] mx-auto">
        <h1 className="text-4xl lg:text-6xl font-semibold text-center mb-10">
          All Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
