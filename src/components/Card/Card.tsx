import { FC } from 'react';
import { rootStyles } from './Card.styles';
import { CardProps } from './Card.d';

const Card: FC<CardProps> = ({
  onClick,
  children,
  color = 'white',
  ...rest
}) => {
  return (
    <article css={rootStyles(color)} onClick={onClick} {...rest}>
      {children}
    </article>
  );
};

export default Card;
