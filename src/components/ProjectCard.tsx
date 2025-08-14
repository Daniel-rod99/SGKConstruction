import { motion } from "framer-motion";
import { fadeUp } from "../types/animations";

import { useNavigate } from "react-router-dom";
import type { Project } from "../types/Project";
import CustomImg from "./CustomImg";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CustomButton from "./CustomButton";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <motion.div {...fadeUp}>
        <CustomImg
          src={project.image}
          alt={project.title}
          className="object-cover w-full max-h-[600px] rounded-br-[100px] lg:rounded-br-[200px] lg:h-[500px] h-[250px]"
        />
      </motion.div>
      <div className="py-4">
        <motion.h2 {...fadeUp} className="text-xl lg:text-3xl font-semibold">
          {project.title}
        </motion.h2>
      </div>
      <div className="flex pb-4 gap-4 m-auto">
        <motion.h3 {...fadeUp} className="gap-2 flex">
          <motion.span {...fadeUp} className=" text-[var(--color-secondary)]">
            <FmdGoodOutlinedIcon />
          </motion.span>
          {project.position}
        </motion.h3>
        <motion.h3 {...fadeUp} className="gap-2 flex">
          <motion.span {...fadeUp} className=" text-[var(--color-secondary)]">
            <CalendarMonthOutlinedIcon />
          </motion.span>
          {project.time}
        </motion.h3>
      </div>
      <motion.div {...fadeUp} className="pb-4">
        <CustomButton
          to="#"
          onClick={() => navigate(`/projects/${project.id}`)}
          showArrow
        >
          View Project
        </CustomButton>
      </motion.div>
    </div>
  );
}
