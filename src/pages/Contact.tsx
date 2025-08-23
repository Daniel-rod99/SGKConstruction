import { motion } from "framer-motion";
import { fadeUpImmediate } from "../types/animations";

import ContactForm from "../components/ContactForm";
import ContactWhatsApp from "../components/ContactWhatsApp";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />

      <section className="bg-[var(--color-primary)] mb-20">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="md:grid md:grid-cols-2 md:grid-rows-2">
            <motion.h1
              {...fadeUpImmediate}
              className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold flex items-center"
            >
              Contact us
            </motion.h1>
            <motion.p
              {...fadeUpImmediate}
              className="text-white lg:text-xl pb-5 row-start-2 pt-10 md:pt-0 lg:pt-10"
            >
              We are here to answer your questions, provide guidance, and help
              you start your next project with confidence. Reach out to us and
              our team will ensure a prompt, professional, and personalized
              response.
            </motion.p>
          </div>
        </div>
      </section>

      <ContactWhatsApp />

      <ContactForm showImage={false} />

      <Footer />
    </div>
  );
}
