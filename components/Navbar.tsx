import dataHelper from "@/helper/dataHelper";
import { useAuth } from "@/hooks/useAuth";
import NavItems from "./landing/navbar/NavItems";
import MenuButtons from "./landing/navbar/MenuButtons";
import { Fragment } from "react";
import NavbarResponsive from "./NavbarResponsive";
import { useNav } from "@/hooks/useNav";
import Overlay from "./landing/navbar/Overlay";

const Navbar = (): JSX.Element => {
  const { navItems, logo } = dataHelper();
  const { setLogout } = useAuth();
  const { menuToogle, openOverlay } = useNav();
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <img src={logo.img} alt="" />
            <h5>{logo.logo_title}</h5>
          </div>
          <NavItems action={setLogout} />
          <MenuButtons action={menuToogle} />
        </div>
      </nav>
      <Overlay action={openOverlay} />
      <NavbarResponsive action={setLogout} />
    </Fragment>
  );
};

export default Navbar;
