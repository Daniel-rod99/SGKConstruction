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
      <CustomImg
        src={project.image}
        alt={project.title}
        className="object-cover w-full max-h-[600px] rounded-br-[100px] lg:rounded-br-[200px] lg:h-[500px] h-[250px]"
      />
      <div className="py-4">
        <h2 className="text-xl lg:text-3xl font-semibold">{project.title}</h2>
      </div>
      <div className="flex pb-4 gap-4 m-auto">
        <h3 className="gap-2 flex">
          <span className=" text-[var(--color-secondary)]">
            <FmdGoodOutlinedIcon />
          </span>
          {project.position}
        </h3>
        <h3 className="gap-2 flex">
          <span className=" text-[var(--color-secondary)]">
            <CalendarMonthOutlinedIcon />
          </span>
          {project.time}
        </h3>
      </div>
      <div className="pb-4">
        <CustomButton
          to="#"
          onClick={() => navigate(`/projects/${project.id}`)}
          showArrow
        >
          View Project
        </CustomButton>
      </div>
    </div>
  );
}
