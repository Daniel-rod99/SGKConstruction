import { motion } from "framer-motion";
import { fadeUpImmediate } from "../types/animations";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function ContactWhatsApp() {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.a
            {...fadeUpImmediate}
            href="https://wa.me/18188222232"
            target="_blank"
            className="bg-white p-6 rounded shadow-2xl flex flex-col items-center text-center hover:scale-105 transition transform"
          >
            <p className="flex gap-3">
              <WhatsAppIcon className="text-green-500 text-5xl mb-4" />
              <span className="text-xl font-semibold mb-2">
                +1 818 822 2232
              </span>
            </p>
            <h2 className="text-lg font-medium">Socratis Koocheradis</h2>
            <h2 className="text-lg font-medium">English</h2>
          </motion.a>

          <motion.a
            {...fadeUpImmediate}
            href="https://wa.me/17472881357"
            target="_blank"
            className="bg-white p-6 rounded shadow-2xl flex flex-col items-center text-center hover:scale-105 transition transform"
          >
            <p className="flex gap-3">
              <WhatsAppIcon className="text-green-500 text-5xl mb-4" />
              <span className="text-xl font-semibold mb-2">
                +1 747 288 1357
              </span>
            </p>
            <h2 className="text-lg font-medium">Karen Rodriguez</h2>
            <h2 className="text-lg font-medium">Español</h2>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
