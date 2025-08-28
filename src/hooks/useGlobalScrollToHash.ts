import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useGlobalScrollToHash() {
  const { hash, pathname } = useLocation();
  const [headerOffset, setHeaderOffset] = useState(112); // default desktop

  // Evita que el navegador guarde la posición de scroll
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Actualiza el offset según el tamaño de ventana
  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 768) setHeaderOffset(80); // móvil
      else if (window.innerWidth < 1024) setHeaderOffset(100); // tablet
      else setHeaderOffset(112); // desktop
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  // Scroll al hash o top
  useEffect(() => {
    const scrollToPosition = () => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Limpia el hash para que recargar la página no cause scroll loco
          window.history.replaceState(null, "", pathname);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    // Aseguramos que el DOM haya renderizado antes de scroll
    requestAnimationFrame(scrollToPosition);
  }, [hash, pathname, headerOffset]);
}
