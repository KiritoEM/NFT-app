import { ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

const NavLayout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return <nav>{children}</nav>;
};

export default NavLayout;
