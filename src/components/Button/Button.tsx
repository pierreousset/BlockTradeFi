import { FC } from "react";
import { rootStyles } from "./Button.styles";
import { ButtonProps } from "./Button.d";

const Button: FC<ButtonProps> = ({ onClick, children, color = "white" }) => {
  console.log("Button rendered", color);
  return (
    <button css={rootStyles(color)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; // Add this line to export the component
