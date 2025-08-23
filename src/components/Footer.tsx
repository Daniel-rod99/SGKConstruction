import { motion } from "framer-motion";
import { fadeUp } from "../types/animations";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export default function Footer() {
  return (
    <section
      className="bg-[var(--color-primary)] text-white"
      style={{
        marginTop: "-200px",
        paddingTop: "220px",
        paddingBottom: "40px",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-4xl font-semibold mb-12"
        >
          Build your dream property with new experience.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <motion.h3
              {...fadeUp}
              className="mb-5 text-[var(--color-secondary)] font-semibold text-2xl"
            >
              SGK Construction
            </motion.h3>
            <motion.ul {...fadeUp} className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  Connect with us.
                </a>
              </li>
              <div className="flex">
                <FacebookOutlinedIcon className="w-32 h-32" />
              </div>
            </motion.ul>
          </div>

          <motion.div {...fadeUp}>
            <h3 className="font-semibold mb-4 uppercase">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/company-profile" className="hover:underline">
                  Company
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp}>
            <h3 className="font-semibold mb-4 uppercase">Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services#plumbing" className="hover:underline">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="/services#concrete" className="hover:underline">
                  Concrete
                </a>
              </li>
              <li>
                <a
                  href="/services#remodeling-service"
                  className="hover:underline"
                >
                  Remodeling Services
                </a>
              </li>
              <li>
                <a
                  href="/services#new-construction"
                  className="hover:underline"
                >
                  New construction
                </a>
              </li>
              <li>
                <a href="/services#retrofit" className="hover:underline">
                  Retrofit
                </a>
              </li>
              <li>
                <a href="/services#addition" className="hover:underline">
                  Addition
                </a>
              </li>
              <li>
                <a
                  href="/services#comercial-construction"
                  className="hover:underline"
                >
                  Comercial construction
                </a>
              </li>
              <li>
                <a
                  href="/services#residential-construction"
                  className="hover:underline"
                >
                  Residential construction
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp}>
            <h3 className="font-semibold mb-4 uppercase">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp}>
            <h3 className="font-semibold mb-4 uppercase">Contact</h3>
            <ul className="space-y-2 text-sm">
              <a
                href="https://www.google.com/maps?q=Sherman+Oaks,+Los+Angeles+CA+91403+United+States"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Sherman Oaks, Los Angeles CA 91403 United States
              </a>

              <li>
                <a
                  href="mailto:sgkconstruction.la@gmail.com"
                  className="hover:underline"
                >
                  sgkconstruction.la@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+18188222232" className="hover:underline">
                  +1 818 822 2232
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="border-t border-gray-500 border-opacity-30 mt-12 pt-6 text-center text-sm text-[12px]"
        >
          ©Copyright 2025 SGK Construction. All rights reserved.
        </motion.div>
      </div>
    </section>
  );
}
