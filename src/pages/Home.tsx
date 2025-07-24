import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import CustomImg from "../components/CustomImg";
import CustomAccordion from "../components/CustomAccordion";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function Home() {
  return (
    <>
      <Header />

      {/* CONTAINER DIV */}
      <div className="md:px-4 mx-auto max-w-[1600px]">
        {/* HERO SECTION */}
        <div className="flex flex-col gap-4 py-10 px-5 md:px-10 md:py-20 md:flex-row">
          <div className="md:w-2/3">
            <h1 className="mb-4 text-[1.8rem] font-semibold lg:text-6xl md:text-4xl">
              Modern architecture and quality design
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eros nulla sit
              pellentesque molestie odio amet consectetur maecenas amet
              pellentesque molestie odio amet amet.
            </p>
          </div>

          <div className="flex items-center justify-center md:w-1/3 ">
            <CustomButton to="/services" showArrow>
              See our Service
            </CustomButton>
          </div>
        </div>

        <div className="px-5 lg:h-[350px] h-[120px] md:h-[270px]">
          <CustomImg src="/tower.webp" alt="Tower Img" />
        </div>
      </div>

      {/* DIV SPACER*/}
      <div className="bg-[var(--color-primary)] h-[150px] md:h-[250px] lg:h-[350px]"></div>

      {/* CONTAINER BLUE */}
      <div className="bg-[var(--color-primary)] text-white">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4 w-full max-w-[1600px] mx-auto">
          <div className="px-5 md:px-10">
            <h1 className="font-bold lg:text-5xl md:text-2xl text-xl">
              Your first class product & service that doesn’t cost the earth.
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur. Eros nulla sit
              pellentesque molestie odio amet consectetur maecenas. Et cursus
              sapien at nisl mattis est phasellus.
            </p>
            <CustomButton to="/services" showArrow>
              See our Service
            </CustomButton>
          </div>

          {/* CUSTOM ACCORDION*/}
          <div className="px-5 md:px-10 py-10 md:pt-0">
            <CustomAccordion
              items={[
                {
                  title: <h2 className="">Residential</h2>,
                  content: (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                  title: <h2 className="">Business</h2>,
                  content: (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                  title: <h2 className="">Hospitality</h2>,
                  content: (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                  title: <h2 className="">Industrial</h2>,
                  content: (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                  title: <h2 className="">Educational</h2>,
                  content: (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
          </div>
        </div>
      </div>

      {/* SECTION COMPANY */}
      <div className="py-15 md:py-20 lg:py-34 w-full max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-14">
          <CustomImg
            className="md:h-full object-cover rounded-br-[100px] lg:rounded-br-[200px]"
            src="/building.webp"
            alt="Building Img"
          />
          <div>
            <h1 className="font-semibold lg:text-5xl text-2xl md:text-3xl pb-5 pt-5 md:pt-0">
              We are your partner in building legacy
            </h1>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur. Eros nulla sit
              pellentesque mostie odio amet consectetur maecenas. Et cursus
              sapien at nisl mattis est phasellus. Sit sagittis donec nullam
              nunc volutpat suscipit pulvinar. Morbi ultrices gravida elementum
              eget.
            </p>
            <p className="pb-5">
              Et cursus sapien at nisl mattis est phasellus. Sit sagittis donec
              nullam nunc volutpat suscipit pulvinar. Morbi ultrices gravida
              elementum eget.
            </p>
            <p className="pb-5">
              The scale & certainty of a tier one construction company, with the
              culture & agility to stay ahead of change.
            </p>
            <CustomButton to="/company-profile">Learn more</CustomButton>
          </div>
        </div>
        <div className="pt-10 lg:pt-20">
          <p className="text-xl md:text-3xl lg:text-5xl text-center md:leading-normal lg:leading-loose font-medium">
            Our industry is critical to how cities evolve, so as a business we
            have a responsibility to consider the impact of everything we build.
          </p>
        </div>
      </div>

      {/* SECTION WHY CHOOSE US */}
      <div className="py-5 md:py-10 w-full max-w-[1520px] mx-auto px-5 md:px-10 bg-[#F7F8F9]">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-medium">
          Why Choose Us?
        </h1>
        <div className="md:grid md:grid-cols-3 md:grid-rows-1 py-10 text-center gap-10">
          <div className="border-b md:border-0 border-gray-300">
            <div className="flex flex-col items-center md:flex-row gap-4">
              <span className="rounded-[50%] md:rounded-[50%] bg-[var(--color-secondary)] h-16 w-16 flex items-center justify-center">
                <WorkspacePremiumOutlinedIcon
                  sx={{ fontSize: "2.25rem", color: "white" }}
                />
              </span>
              <h2 className="font-semibold text-lg md:text-2xl">
                High quality
              </h2>
            </div>
            <p className=" lg:text-justify py-5">
              Lorem ipsum dolor sit amet consectetur. Eros nulla sit pellentesq
              molestie odio amet consectetur maecenas. Et cursus sapien at nisl
              matt phasellus. Sit sagittis donec nullam nunc volutpat suscipit
              pulvinar. Morbi ultrices gravida elementum eget.
            </p>
          </div>
          <div className="border-b md:border-0 border-gray-300 mt-5 md:mt-0">
            <div className="flex flex-col items-center md:flex-row gap-4">
              <span className="rounded-[50%] md:rounded-[50%] bg-[var(--color-secondary)] h-16 w-16 flex items-center justify-center">
                <CurrencyExchangeOutlinedIcon
                  sx={{ fontSize: "2.25rem", color: "white" }}
                />
              </span>
              <h2 className="font-semibold text-lg md:text-2xl">On budget</h2>
            </div>
            <p className=" lg:text-justify py-5">
              Lorem ipsum dolor sit amet consectetur. Eros nulla sit pellentesq
              molestie odio amet consectetur maecenas. Et cursus sapien at nisl
              matt phasellus. Sit sagittis donec nullam nunc volutpat suscipit
              pulvinar. Morbi ultrices gravida elementum eget.
            </p>
          </div>
          <div className="border-b md:border-0 border-gray-300 mt-5 md:mt-0">
            <div className="flex flex-col items-center md:flex-row gap-4">
              <span className="rounded-[50%] md:rounded-[50%] bg-[var(--color-secondary)] h-16 w-16 flex items-center justify-center">
                <CalendarMonthOutlinedIcon
                  sx={{ fontSize: "2.25rem", color: "white" }}
                />
              </span>
              <h2 className="font-semibold text-lg md:text-2xl">On schedule</h2>
            </div>
            <p className=" lg:text-justify py-5">
              Lorem ipsum dolor sit amet consectetur. Eros nulla sit pellentesq
              molestie odio amet consectetur maecenas. Et cursus sapien at nisl
              matt phasellus. Sit sagittis donec nullam nunc volutpat suscipit
              pulvinar. Morbi ultrices gravida elementum eget.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION PROJECTS PREVIEW */}
      <div className="py-15 md:py-20 lg:py-34 w-full max-w-[1600px] mx-auto px-5 md:px-10">
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our successful projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CustomButton to="/projects">View All</CustomButton>
          </div>
        </section>
      </div>
    </>
  );
}
