import { FC } from 'react';
import { rootStyles } from './Title.styles';
import { TitleProps } from './Title.d';
import Logo from './logo.svg';
import Image from 'next/image';

const Title: FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <h1 css={rootStyles} {...rest}>
      {children}
    </h1>
  );
};

export default Title;
