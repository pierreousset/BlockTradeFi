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
  blue: {
    color: "#FFFFFF",
    backgroundColor: "#007bff",
  },
  red: {
    color: "#FFFFFF",
    backgroundColor: "#dc3545",
  },
  green: {
    color: "#FFFFFF",
    backgroundColor: "#28a745",
  },
};

export const rootStyles = (color: string) => css`
  height: 40px;
  border: 1px solid #dee3e0;
  border-radius: 4px;
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 16px;
  color: ${colorList[color]?.color};
  background-color: ${colorList[color]?.backgroundColor};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
