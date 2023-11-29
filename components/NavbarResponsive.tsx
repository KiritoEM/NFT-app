import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helper/dataHelper";
import { useAuth } from "@/hooks/useAuth";
import { useNav } from "@/hooks/useNav";
import React from "react";

interface Iaction {
  action: () => void;
}

const NavbarResponsive: React.FC<Iaction> = ({ action }): JSX.Element => {
  const { navItems } = dataHelper();
  const { setLogout } = useAuth();
  const { openMenu } = useNav();
  return (
    <div
      className={`navbar-toogle d-lg-none ${openMenu ? "openNav" : "closeNav"}`}
    >
      <ul>
        {navItems.menu_item.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}

        <a href="/">
          <li id="logout" onClick={action}>
            Se déconnecter{" "}
            <FontAwesomeIcon icon={faSignOutAlt} className="mx-2" />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavbarResponsive;
