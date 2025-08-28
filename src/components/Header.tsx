import DrawerMenu from "./DrawerMenu";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CustomButton from "./CustomButton";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  const location = useLocation();

  // Función para ajustar offset del scroll (header fijo)
  const scrollWithOffset = (el: HTMLElement) => {
    const yOffset = -130; // altura de tu header
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Company Profile", href: "/company-profile" },
    { label: "Service", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div
      className={`flex w-full ${
        isHome ? "" : "bg-[var(--color-primary)] text-white"
      }`}
    >
      <div className="flex items-center justify-between w-full h-20 px-5 md:h-28">
        {/* LOGO */}
        <section>
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
        </section>

        {/* NAVBAR */}
        <nav className="hidden lg:block">
          <ul className="flex gap-20 text-xl">
            {navLinks.map(({ label, href }) => (
              <li
                key={href}
                className={`border-b-2 ${
                  location.pathname === href.split("#")[0]
                    ? "border-[var(--color-secondary)]"
                    : "border-transparent"
                } hover:border-[var(--color-secondary)] transition duration-300 ease-in-out cursor-pointer`}
              >
                <HashLink smooth scroll={scrollWithOffset} to={href}>
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
        <DrawerMenu />
      </div>
    </div>
  );
}
