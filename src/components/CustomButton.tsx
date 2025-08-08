import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CustomButtonProps {
  to?: string;
  onClick?: () => void;
  children: string;
  className?: string;
  showArrow?: boolean;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

export default function CustomButton({
  to,
  onClick,
  children,
  className,
  showArrow = false,
  type = "button",
  disabled = false,
}: CustomButtonProps) {
  const navigate = useNavigate();

  const DefaultButtonClass =
    "shadow-[4px_4px_3px_2px_rgba(0,_0,_0,_0.1)] p-2 cursor-pointer transform transition duration-300 hover:scale-105 hover:text-[var(--color-secondary)]";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={className ?? DefaultButtonClass}
      onClick={handleClick}
    >
      {showArrow && <ArrowForwardIcon className="mr-2" />}
      {children}
    </button>
  );
}
