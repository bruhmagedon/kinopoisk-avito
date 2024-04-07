import type { ButtonProps } from "@material-tailwind/react";

declare module "@material-tailwind/react/Button" {
  const Button: React.FC<ButtonProps>;
  export default Button;
}
