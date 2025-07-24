import { useNavigate } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type RoutePaths = "/company-profile" | "/services" | "/projects" | "/contact";

interface CustomButtonProps {
  to: RoutePaths;
  children: string;
  className?: string;
  showArrow?: boolean;
}

export default function CustomButton({
  to,
  children,
  className,
  showArrow = false,
}: CustomButtonProps) {
  const navigate = useNavigate();

  const DefaultButtonClass =
    "shadow-[4px_4px_3px_2px_rgba(0,_0,_0,_0.1)] p-2 cursor-pointer transform transition duration-300 hover:scale-105 hover:text-[var(--color-secondary)]";

  return (
    <button
      className={className ?? DefaultButtonClass}
      onClick={() => navigate(to)}
    >
      {showArrow && <ArrowForwardIcon className="mr-2" />}
      {children}
    </button>
  );
}
