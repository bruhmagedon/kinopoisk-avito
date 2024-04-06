import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className = "" }) => {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};
