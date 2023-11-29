import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import dataHelper from "@/helper/dataHelper";
import React from "react";

interface Iaction {
  action : () => void;
}

const NavItems: React.FC<Iaction> = ({ action }): JSX.Element => {
  const router = useRouter();
  const { navItems } = dataHelper();
  return (
    <div className="navbar__menuItems d-none d-lg-flex">
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

export default NavItems;
