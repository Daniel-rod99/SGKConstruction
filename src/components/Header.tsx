import DrawerMenu from "./DrawerMenu";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CustomButton from "./CustomButton";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  const location = useLocation();

  // Función dinámica para scroll, toma la altura del header
  const scrollWithOffset = (el: HTMLElement) => {
    const header = document.querySelector(".header"); // ajusta si tu header tiene otra clase
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Company Profile", path: "/company-profile" },
    { label: "Service", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <div
      className={`header flex w-full ${
        isHome ? "" : "bg-[var(--color-primary)] text-white"
      }`}
    >
      <div className="flex items-center justify-between w-full h-20 px-5 md:h-28">
        {/* LOGO */}
        <section>
          <HashLink smooth scroll={scrollWithOffset} to="/">
            <h1
              className={`text-2xl md:text-4xl font-bold cursor-pointer ${
                isHome ? "text-[var(--color-primary)]" : "text-white"
              }`}
            >
              SGK{" "}
              <span
                className={`font-bold ${
                  isHome ? "text-[var(--color-secondary)]" : "text-white"
                }`}
              >
                Construction
              </span>
            </h1>
          </HashLink>
        </section>

        {/* NAVBAR */}
        <nav className="hidden lg:block">
          <ul className="flex gap-20 text-xl">
            {navLinks.map(({ label, path }) => (
              <li
                key={path}
                className={`border-b-2 ${
                  location.pathname === path.split("#")[0]
                    ? "border-[var(--color-secondary)]"
                    : "border-transparent"
                } hover:border-[var(--color-secondary)] transition duration-300 ease-in-out cursor-pointer`}
              >
                <HashLink smooth scroll={scrollWithOffset} to={path}>
                  {label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* BUTTON ACTION */}
        <CustomButton
          to="/contact"
          className="hidden md:block bg-[var(--color-secondary)] text-white text-xl px-8 py-4 cursor-pointer hover:bg-white hover:text-[var(--color-secondary)] hover:border-2 border-2 transition duration-300 ease-in-out"
        >
          Get a Quote
        </CustomButton>
      </div>

      {/* DRAWER MENU */}
      <div className="flex items-center h-20 px-2 lg:hidden md:h-28">
        <DrawerMenu scrollWithOffset={scrollWithOffset} />
      </div>
    </div>
  );
}
