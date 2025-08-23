import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

import { motion } from "framer-motion";
import { fadeUp } from "../types/animations";
import { fadeUpImmediate } from "../types/animations";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import CustomImg from "../components/CustomImg";
import CustomAccordion from "../components/CustomAccordion";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function Home() {
  return (
    <>
      <Header isHome />

      {/* SECTION HERO */}
      <div className="md:px-4 mx-auto max-w-[1600px]">
        {/* HERO SECTION */}
        <div className="flex flex-col gap-4 py-10 px-5 md:px-10 md:py-20 md:flex-row">
          <div className="md:w-2/3">
            <motion.h1
              {...fadeUpImmediate}
              className="mb-4 text-[1.8rem] font-semibold lg:text-6xl md:text-4xl"
            >
              Modern and Quality build
            </motion.h1>
            <motion.p {...fadeUpImmediate}>
              At SGK Construction, we turn visions into reality. With decades of
              experience in residential and commercial projects, we combine
              modern architecture with superior craftsmanship to deliver spaces
              that inspire and endure.
            </motion.p>
          </div>

          <motion.div
            {...fadeUpImmediate}
            className="flex items-center justify-center md:w-1/3 "
          >
            <CustomButton to="/services" showArrow>
              See our Service
            </CustomButton>
          </motion.div>
        </div>

        <motion.div
          {...fadeUpImmediate}
          className="px-5 lg:h-[350px] h-[120px] md:h-[270px]"
        >
          <CustomImg src="/heroImg.webp" alt="hero Img" />
        </motion.div>
      </div>

      {/* DIV SPACER*/}
      <div className="bg-[var(--color-primary)] h-[150px] md:h-[250px] lg:h-[350px]"></div>

      {/* CONTAINER BLUE */}
      <div className="bg-[var(--color-primary)] text-white">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4 w-full max-w-[1600px] mx-auto">
          <div className="px-5 md:px-10">
            <motion.h1
              {...fadeUp}
              className="font-bold lg:text-5xl md:text-2xl text-xl"
            >
              Your first class product & service that doesn’t cost the earth.
            </motion.h1>
            <motion.p {...fadeUp} className="py-6">
              We create spaces that combine modern design, exceptional quality,
              and sustainable practices. Every project is carefully crafted to
              deliver comfort, functionality, and long-lasting value, ensuring
              your vision becomes a reality while respecting the environment.
            </motion.p>

            <motion.div {...fadeUp}>
              <CustomButton to="/services" showArrow>
                See our Service
              </CustomButton>
            </motion.div>
          </div>

          {/* CUSTOM ACCORDION*/}
          <motion.div {...fadeUp} className="px-5 md:px-10 py-10 md:pt-0">
            <CustomAccordion
              items={[
                {
                  title: <h2 className="">New construction</h2>,
                  content: (
                    <p>
                      At SGK Construction, we specialize in building homes from
                      the ground up with quality, precision, and care.
                    </p>
                  ),
                  buttonLabel: (
                    <span className="text-white cursor-pointer transform transition duration-300 hover:scale-105 hover:text-[var(--color-secondary)]">
                      Explore more
                    </span>
                  ),
                  buttonHref: "/services",
                },
                {
                  title: <h2 className="">Remodeling Services</h2>,
                  content: (
                    <p>
                      Transform your home with SGK Construction’s expert
                      remodeling solutions. Whether it’s a kitchen upgrade,
                      bathroom renovation, room addition, or a complete home.
                    </p>
                  ),
                  buttonLabel: (
                    <span className="text-white cursor-pointer transform transition duration-300 hover:scale-105 hover:text-[var(--color-secondary)]">
                      Explore more
                    </span>
                  ),
                  buttonHref: "/services",
                },
                {
                  title: <h2 className="">Residential</h2>,
                  content: (
                    <p>
                      SGK Construction builds safe, durable, and stylish homes
                      tailored to your lifestyle. From strong foundations to
                      detailed finishes, we ensure every step is done with care
                      so your family can enjoy a comfortable home that lasts for
                      generations.
                    </p>
                  ),
                  buttonLabel: (
                    <span className="text-white cursor-pointer transform transition duration-300 hover:scale-105 hover:text-[var(--color-secondary)]">
                      Explore more
                    </span>
                  ),
                  buttonHref: "/services",
                },
                {
                  title: <h2 className="">Addition</h2>,
                  content: (
                    <p>
                      At SGK Construction, we help you create the extra space
                      your family needs without leaving the home you love.
                    </p>
                  ),
                  buttonLabel: (
                    <span className="text-white cursor-pointer transform transition duration-300 hover:scale-105 hover:text-[var(--color-secondary)]">
                      Explore more
                    </span>
                  ),
                  buttonHref: "/services",
                },
                {
                  title: <h2 className="">Commercial Construction</h2>,
                  content: (
                    <p>
                      SGK Construction brings expertise and reliability to every
                      commercial project. From office spaces and retail stores
                      to restaurants and multi-use buildings, we deliver
                      functional, high-quality spaces designed to support your
                      business goals.
                    </p>
                  ),
                  buttonLabel: (
                    <span className="text-white cursor-pointer transform transition duration-300 hover:scale-105 hover:text-[var(--color-secondary)]">
                      Explore more
                    </span>
                  ),
                  buttonHref: "/services",
                },
              ]}
            />
          </motion.div>
        </div>
      </div>

      {/* SECTION COMPANY */}
      <div className="py-15 md:py-20 lg:py-34 w-full max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-14">
          <motion.div {...fadeUp}>
            <CustomImg
              className="md:h-full object-cover rounded-br-[100px] lg:rounded-br-[200px]"
              src="/buildingLegacyImg.webp"
              alt="buildingLegacy Img"
            />
          </motion.div>
          <motion.div {...fadeUp}>
            <h1 className="font-semibold lg:text-5xl text-2xl md:text-3xl pb-5 pt-5 md:pt-0">
              We are your partner in building legacy
            </h1>
            <p className="pb-5">
              SGK Construction is a company proudly serving the Los Angeles area
              since 1988. With over 35 years of experience, we specialize in new
              construction, remodeling, plumbing, electrical, concrete, and
              general repairs. Our team is licensed, insured, and dedicated to
              delivering top-quality work with honesty, reliability, and
              precision.
            </p>
            <p className="pb-5">
              We believe in building more than just homes — we build trust.
              Whether you're renovating a single room or developing an entire
              property, SGK Construction brings the knowledge, craftsmanship,
              and care needed to make your project a success from start to
              finish.
            </p>
            <CustomButton to="/company-profile">Learn more</CustomButton>
          </motion.div>
        </div>
        <motion.div {...fadeUp} className="pt-10 lg:pt-20">
          <p className="text-xl md:text-3xl lg:text-5xl text-center md:leading-normal lg:leading-loose font-medium">
            Our industry is critical to how cities evolve, so as a business we
            have a responsibility to consider the impact of everything we build.
          </p>
        </motion.div>
      </div>

      {/* SECTION WHY CHOOSE US */}
      <div className="py-5 md:py-10 w-full max-w-[1520px] mx-auto px-5 md:px-10 bg-[#F7F8F9]">
        <motion.h1
          {...fadeUp}
          className="text-2xl md:text-4xl lg:text-6xl text-center font-medium"
        >
          Why Choose Us?
        </motion.h1>
        <div className="md:grid md:grid-cols-3 py-10 text-center gap-5">
          <div className="border-b md:border-b-0 md:border-r-1 border-gray-300">
            <div className="flex flex-col items-center md:flex-row gap-4">
              <motion.span
                {...fadeUp}
                className="rounded-[50%] md:rounded-[50%] bg-[var(--color-secondary)] h-16 w-16 flex items-center justify-center"
              >
                <WorkspacePremiumOutlinedIcon
                  sx={{ fontSize: "2.25rem", color: "white" }}
                />
              </motion.span>
              <motion.h2
                {...fadeUp}
                className="font-semibold text-lg md:text-2xl"
              >
                High quality
              </motion.h2>
            </div>
            <motion.p {...fadeUp} className=" lg:text-justify py-5 md:mr-5">
              We deliver exceptional craftsmanship and attention to detail in
              every project, ensuring that each build meets the highest
              standards of quality and design excellence.
            </motion.p>
          </div>

          <div className="border-b md:border-0 border-gray-300 mt-5 md:mt-0">
            <div className="flex flex-col items-center md:flex-row gap-4">
              <motion.span
                {...fadeUp}
                className="rounded-[50%] md:rounded-[50%] bg-[var(--color-secondary)] h-16 w-16 flex items-center justify-center"
              >
                <CurrencyExchangeOutlinedIcon
                  sx={{ fontSize: "2.25rem", color: "white" }}
                />
              </motion.span>
              <motion.h2
                {...fadeUp}
                className="font-semibold text-lg md:text-2xl"
              >
                On budget
              </motion.h2>
            </div>
            <motion.p {...fadeUp} className=" lg:text-justify py-5">
              Our team carefully plans and manages every project to stay within
              budget, providing transparent estimates and avoiding unexpected
              costs without compromising quality.
            </motion.p>
          </div>

          <div className="border-b md:border-0 md:border-l-1 border-gray-300 mt-5 md:mt-0">
            <div className="flex flex-col items-center md:flex-row gap-4 md:ml-5">
              <motion.span
                {...fadeUp}
                className="rounded-[50%] md:rounded-[50%] bg-[var(--color-secondary)] h-16 w-16 flex items-center justify-center"
              >
                <CalendarMonthOutlinedIcon
                  sx={{ fontSize: "2.25rem", color: "white" }}
                />
              </motion.span>
              <motion.h2
                {...fadeUp}
                className="font-semibold text-lg md:text-2xl"
              >
                On schedule
              </motion.h2>
            </div>
            <motion.p {...fadeUp} className=" lg:text-justify py-5 md:ml-5">
              We respect timelines and deliver projects on schedule,
              coordinating all phases efficiently to ensure your goals are met
              promptly and professionally.
            </motion.p>
          </div>
        </div>
      </div>

      {/* SECTION PROJECTS PREVIEW */}
      <div className="py-15 md:py-20 lg:py-34 w-full max-w-[1600px] mx-auto px-5 md:px-10">
        <section>
          <motion.h2
            {...fadeUp}
            className="text-3xl font-semibold text-center mb-10"
          >
            Our successful projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-20">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-10 text-center">
            <CustomButton to="/projects">View All</CustomButton>
          </motion.div>
        </section>
      </div>

      {/* SECTION TESTIMONIALS*/}
      <TestimonialCarousel />

      {/* SECTION QUESTIONS*/}
      <div className="max-w-[1600px] mx-auto py-10 px-5 md:px-10">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
          <div>
            <motion.h1
              {...fadeUp}
              className="text-2xl md:text-4xl lg:text-6xl font-semibold pb-5"
            >
              Frequently asked questions
            </motion.h1>
          </div>
          <div className="lg:text-xl">
            <CustomAccordion
              items={[
                {
                  title: (
                    <motion.h2 {...fadeUp} className="font-medium lg:pb-5">
                      What types of projects do you handle?
                    </motion.h2>
                  ),
                  content: (
                    <motion.p {...fadeUp} className="text-[16px]">
                      We manage a wide range of construction projects, including
                      residential homes, commercial buildings, office
                      renovations, and specialized custom constructions tailored
                      to each client’s needs.
                    </motion.p>
                  ),
                  color: "black",
                  showDivider: false,
                },
                {
                  title: (
                    <motion.h2 {...fadeUp} className="font-medium lg:pb-5">
                      How do you ensure projects stay on schedule?
                    </motion.h2>
                  ),
                  content: (
                    <motion.p {...fadeUp} className="text-[16px]">
                      Our team carefully plans every phase of construction,
                      monitors progress regularly, and communicates
                      transparently with clients to ensure deadlines are met
                      efficiently.
                    </motion.p>
                  ),
                  color: "black",
                  showDivider: false,
                },
                {
                  title: (
                    <motion.h2 {...fadeUp} className="font-medium lg:pb-5">
                      Do you provide cost estimates before starting?
                    </motion.h2>
                  ),
                  content: (
                    <motion.p {...fadeUp} className="text-[16px]">
                      Yes, we offer detailed and transparent cost estimates
                      before any project begins, helping clients understand the
                      budget and avoid unexpected expenses while maintaining
                      high quality.
                    </motion.p>
                  ),
                  color: "black",
                  showDivider: false,
                },
                {
                  title: (
                    <motion.h2 {...fadeUp} className="font-medium lg:pb-5">
                      Can you handle eco-friendly and sustainable construction?
                    </motion.h2>
                  ),
                  content: (
                    <motion.p {...fadeUp} className="text-[16px]">
                      Absolutely. We incorporate sustainable practices and
                      materials in all our projects, ensuring energy efficiency,
                      minimal environmental impact, and lasting results for our
                      clients.
                    </motion.p>
                  ),
                  color: "black",
                  showDivider: false,
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* SECTION CONTACT*/}

      <ContactForm />
      <Footer />
    </>
  );
}
