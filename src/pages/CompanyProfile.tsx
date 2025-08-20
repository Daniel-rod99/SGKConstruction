import { motion } from "framer-motion";
import { fadeUp } from "../types/animations";

import ContactForm from "../components/ContactForm";
import CustomImg from "../components/CustomImg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CompanyProfile() {
  return (
    <div>
      <Header />
      {/* HERO SECTION */}
      <div className="bg-[var(--color-primary)] relative">
        <div className="py-10 lg:py-24 w-full max-w-[1600px] mx-auto px-5 md:px-10 text-white relative z-10">
          <div>
            <motion.h1
              {...fadeUp}
              className="text-4xl md:text-6xl lg:text-8xl font-bold pb-10"
            >
              About us
            </motion.h1>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-14 relative lg:pb-10">
            <motion.div {...fadeUp} className="relative">
              <CustomImg
                className="object-cover rounded-br-[100px] lg:rounded-br-[200px] 
                     w-full h-full 
                     lg:w-[500px] lg:h-[750px] 
                     lg:absolute lg:top-0 lg:left-0"
                src="/building.webp"
                alt="Building Img"
              />

              {/* SPACER HIDDEN */}
              <div className="hidden lg:block lg:w-[500px]"></div>
            </motion.div>

            <motion.div {...fadeUp} className="relative z-10">
              <h1 className="font-semibold lg:text-5xl text-2xl md:text-3xl pb-5 pt-5 md:pt-0 text-[var(--color-secondary)]">
                We are your partner in building legacy
              </h1>
              <p className="pb-5">
                SGK Construction is a company proudly serving the Los Angeles
                area since 1988. With over 35 years of experience, we specialize
                in new construction, remodeling, plumbing, electrical, concrete,
                and general repairs. Our team is licensed, insured, and
                dedicated to delivering top-quality work with honesty,
                reliability, and precision.
              </p>
              <p className="pb-5">
                We believe in building more than just homes — we build trust.
                Whether you're renovating a single room or developing an entire
                property, SGK Construction brings the knowledge, craftsmanship,
                and care needed to make your project a success from start to
                finish.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* OUR MISSION AND VISION*/}
      <div className="py-10 lg:py-24 w-full max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="md:grid md:grid-cols-2 md:gap-5 md:auto-rows-auto">
          <motion.div {...fadeUp}>
            <CustomImg
              className="object-cover rounded-br-[100px] lg:rounded-br-[200px] col-start-2"
              src="/OurVisionImg.webp"
              alt="OurVision Img"
            />
          </motion.div>
          <div className="col-start-1 row-start-1 justify-end flex flex-col">
            <motion.h1
              {...fadeUp}
              className="font-semibold text-4xl md:text-5xl pb-5 pt-5 md:pt-0"
            >
              Our mission
            </motion.h1>
            <motion.p {...fadeUp} className="pb-5">
              At SGK Construction, our mission is to provide top-quality
              construction, remodeling, and repair services to homeowners and
              businesses throughout Los Angeles. We are committed to
              craftsmanship, reliability, and honest communication — delivering
              every project with pride, precision, and over 35 years of
              experience.
            </motion.p>
          </div>

          <div className="col-start-1 lg:mt-20 pb-5">
            <motion.h1
              {...fadeUp}
              className="font-semibold lg:text-4xl text-2xl text-[var(--color-secondary)]"
            >
              Honesty, reliability and superior craftsmanship.
            </motion.h1>
          </div>

          <div className="col-start-2 lg:mt-20">
            <motion.h1
              {...fadeUp}
              className="font-semibold text-4xl md:text-5xl pb-5"
            >
              Our vision
            </motion.h1>
            <motion.p {...fadeUp}>
              Our vision is to become one of the most trusted construction
              companies in Los Angeles - California, recognized for consistent
              quality, customer satisfaction, and meaningful contributions to
              the communities we build in.
              <p>
                We aim to grow our team, our impact, and our legacy — one
                successful project at a time.
              </p>
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div {...fadeUp}>
        <ContactForm showImage={false} />
        <Footer />
      </motion.div>
    </div>
  );
}
