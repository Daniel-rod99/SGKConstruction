import DrawerMenu from "./DrawerMenu";
import { useNavigate, useLocation } from "react-router-dom";

import CustomButton from "./CustomButton";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex w-full">
      <div className="flex items-center justify-between w-full h-20 px-5 md:h-28">
        {/* LOGO */}
        <section>
          <h1
            className="text-2xl md:text-4xl text-[var(--color-primary)] font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            SGK{" "}
            <span className="text-[var(--color-secondary)]">Construction</span>
          </h1>
        </section>

        {/* NAVBAR */}
        <nav className="hidden lg:block">
          <ul className="flex gap-20 text-xl">
            <li
              className={`border-b-2 ${
                location.pathname === "/"
                  ? "border-[var(--color-primary)]"
                  : "border-transparent"
              } hover:border-[var(--color-primary)] transition duration-300 ease-in-out cursor-pointer`}
              onClick={() => setTimeout(() => navigate("/"), 400)}
            >
              Home
            </li>
            <li
              className={`border-b-2 ${
                location.pathname === "/company-profile"
                  ? "border-[var(--color-primary)]"
                  : "border-transparent"
              } hover:border-[var(--color-primary)] transition duration-300 ease-in-out cursor-pointer`}
              onClick={() => navigate("/company-profile")}
            >
              Company Profile
            </li>
            <li
              className={`border-b-2 ${
                location.pathname === "/services"
                  ? "border-[var(--color-primary)]"
                  : "border-transparent"
              } hover:border-[var(--color-primary)] transition duration-300 ease-in-out cursor-pointer`}
              onClick={() => navigate("/services")}
            >
              Service
            </li>
            <li
              className={`border-b-2 ${
                location.pathname === "/projects"
                  ? "border-[var(--color-primary)]"
                  : "border-transparent"
              } hover:border-[var(--color-primary)] transition duration-300 ease-in-out cursor-pointer`}
              onClick={() => navigate("/projects")}
            >
              Projects
            </li>
            <li
              className={`border-b-2 ${
                location.pathname === "/contact"
                  ? "border-[var(--color-primary)]"
                  : "border-transparent"
              } hover:border-[var(--color-primary)] transition duration-300 ease-in-out cursor-pointer`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
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
