import { css } from '@emotion/react';

type ColorList = {
  [key: string]: string;
};

const colorList: ColorList = {
  white: '#FFFFFF',
  beige: '#F5F5DC',
};

export const rootStyles = (color: string) => css`
  height: 200px;
  width: 270px;
  border: 1px solid #dee3e0;
  border-radius: 4px;
  padding: 0 16px;
  background-color: ${colorList[color]};
`;
