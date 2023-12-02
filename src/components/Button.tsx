import { FunctionComponent, ReactNode } from "react";
import { cn } from "../utils";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'outline';
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-8 py-3 relative text-white font-secondary flex items-center text-center text-sm rounded-lg  transition-all ease-in-out duration-300 bg-primary z-20",
        className,
        {'border border-primary text-primary bg-transparent hover:bg-primary hover:text-white': variant === 'outline'}
      )}
      {...props}
    >
      <h1 className="-mb-1">{children}</h1>
    </button>
  );
};

export default Button;
