import { FC } from 'react';
import { rootStyles } from './Button.styles';
import { ButtonProps } from './Button.d';

const Button: FC<ButtonProps> = ({ onClick, children, color = 'white' }) => {
  return (
    <button css={rootStyles(color)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
