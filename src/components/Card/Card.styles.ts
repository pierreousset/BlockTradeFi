import { css } from "@emotion/react";

type ColorList = {
  [key: string]: {
    color: string;
    backgroundColor: string;
  };
};

const colorList: ColorList = {
  while: {
    color: "#000",
    backgroundColor: "#FFFFFF",
  },
  beige: {
    color: "#000",
    backgroundColor: "#F5F5DC",
  },
};

export const rootStyles = (color: string) => css`
  height: 200px;
  width: 270px;
  border: 1px solid #dee3e0;
  border-radius: 4px;
  padding: 0 16px;
  color: ${colorList[color]?.color};
  background-color: ${colorList[color]?.backgroundColor};
`;
