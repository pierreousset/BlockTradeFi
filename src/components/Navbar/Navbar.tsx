import { FC } from 'react';
import { rootStyles, blockRightStyle } from './Navbar.styles';
import { NavbarProps } from './Navbar.d';
import Logo from './logo.svg';
import Image from 'next/image';

const Navbar: FC<NavbarProps> = ({ rightContent, ...rest }) => {
  return (
    <div css={rootStyles} {...rest}>
      <Image src={Logo} width={150} height={70} alt="Picture of the author" />
      <div css={blockRightStyle}>
        <span>Dev</span>
        <span>Twitter</span>
        {rightContent && rightContent()}
      </div>
    </div>
  );
};

export default Navbar;
