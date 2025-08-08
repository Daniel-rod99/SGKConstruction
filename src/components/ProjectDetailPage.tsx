import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContactForm from "./ContactForm";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(project?.gallery[0] || "");

  if (!project) {
    return (
      <>
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-3xl font-semibold">Project not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="py-20 px-5 md:px-10 max-w-[1600px] mx-auto">
        {/* Botón Volver */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition"
        >
          <ArrowBackIcon /> Back to Projects
        </button>

        {/* Info principal */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">{project.title}</h1>
        <p className="text-lg text-gray-700 mb-4">{project.description}</p>
        <p className="text-xl font-semibold mb-8">Price: {project.price}</p>

        {/* Imagen principal con transición */}
        <div className="mb-6 w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-lg shadow-lg">
          <img
            src={activeImage}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            key={activeImage} // fuerza la animación al cambiar
          />
        </div>

        {/* Miniaturas - scroll horizontal si son muchas */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
          {project.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              onClick={() => setActiveImage(img)}
              className={`w-28 h-20 object-cover rounded-lg cursor-pointer border-2 flex-shrink-0 transition ${
                img === activeImage
                  ? "border-[var(--color-secondary)]"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Características */}
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
