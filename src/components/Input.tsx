import clsx from "clsx";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

const Input = ({ placeholder, className, ...props }: inputProps) => {
  // Define base input classes
  const baseInputClasses = "p-[3px] px-2 border-transparent border-[2px]";

  // Merge additional custom classes with base input classes
  const inputClasses = clsx(baseInputClasses, className);

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={inputClasses}
      {...props}
    />
  );
};

export default Input;
