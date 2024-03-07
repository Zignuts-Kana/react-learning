import clsx from "clsx";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  size?: "s" | "l" | "m";
  link?: string;
}

const Button = ({
  text,
  className,
  size = "m",
  link,
  ...props
}: ButtonProps) => {
  // Define base button classes
  const baseButtonClasses =
    "px-8 py-2 max-xl:m-2 shadow-lg relative text-gradient group transition duration-300 ease-in-out";

  // Define size-specific styles
  const sizeStyles = {
    s: "p-[2px] text-xs",
    m: "p-[3px] text-sm",
    l: "p-[5px] text-base",
  };

  // Merge additional custom classes, base button classes, and size-specific styles
  const buttonClasses = clsx(
    baseButtonClasses,
    "bg-white",
    "gradient-border",
    sizeStyles[size],
    className
  );

  return link ? (
    <Link to={link}>
      <button className={buttonClasses} {...props}>
        {text}
      </button>
    </Link>
  ) : (
    <button className={buttonClasses} {...props}>
      {text}
    </button>
  );
};

export default Button;
