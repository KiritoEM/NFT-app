import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Iaction {
  action: () => void;
}

const MenuButtons: React.FC<Iaction> = ({action}): JSX.Element => {
  return (
    <div className="menu-icons d-lg-none" onClick={action}>
      <FontAwesomeIcon icon={faBars} id="icon" />
    </div>
  );
};

export default MenuButtons;
