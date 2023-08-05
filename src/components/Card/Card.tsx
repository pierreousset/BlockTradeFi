import { FC } from "react";
import { rootStyles } from "./Card.styles";
import { CardProps } from "./Card.d";

const Card: FC<CardProps> = ({
  onClick,
  children,
  color = "white",
  ...rest
}) => {
  console.log("Button rendered", color);
  return (
    <div css={rootStyles(color)} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

export default Card;
