import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { services } from "../data/services";

import { fadeUpImmediate, fadeUp } from "../types/animations";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Service() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -130;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });

          history.replaceState(null, "", location.pathname);
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.section
        {...fadeUpImmediate}
        className="bg-[var(--color-primary)] mb-20"
      >
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <motion.div
            {...fadeUpImmediate}
            className="md:grid md:grid-cols-2 md:grid-rows-2"
          >
            <motion.h1
              {...fadeUp}
              className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold flex items-center"
            >
              Our Services
            </motion.h1>
            <motion.p
              {...fadeUp}
              className="text-white lg:text-xl pb-5 row-start-2 pt-10 md:pt-0 lg:pt-10"
            >
              From small repairs to full plumbing installations, SGK
              Construction delivers reliable, high-quality solutions for your
              home or business. Our licensed team handles leaks, pipe
              replacements, fixture installations, and complete system upgrades
              — always ensuring safety, efficiency, and lasting performance you
              can trust.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section {...fadeUpImmediate}>
        <motion.div
          {...fadeUpImmediate}
          className="max-w-[1600px] mx-auto px-5 md:px-10"
        >
          {services.map((service, idx) => (
            <motion.div
              {...fadeUp}
              key={service.id}
              id={service.name.replace(/\s+/g, "-").toLowerCase()} // ID para hash
              className="grid gap-5 mb-10 md:grid-cols-2 items-center"
            >
              {/* Text */}
              <motion.div
                {...fadeUp}
                className={`flex flex-col justify-center ${
                  idx % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <motion.h2
                  {...fadeUp}
                  className="text-2xl md:text-4xl font-semibold mb-4"
                >
                  {service.name}
                </motion.h2>
                <p>{service.comment}</p>
              </motion.div>

              {/* Image */}
              <motion.div
                {...fadeUp}
                className={`flex ${
                  idx % 2 !== 0 ? "justify-start" : "justify-end"
                }`}
              >
                <img
                  src={service.immage}
                  alt={service.name}
                  className="w-ful max-w-[500px] rounded-md object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <ContactForm />
      <Footer />
    </>
  );
}
