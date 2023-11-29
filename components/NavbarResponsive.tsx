import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helper/dataHelper";
import { useAuth } from "@/hooks/useAuth";

const NavbarResponsive = (): JSX.Element => {
  const { navItems } = dataHelper();
  const { setLogout } = useAuth();
  return (
    <div className="navbar-toogle d-lg-none">
      <ul>
        {navItems.menu_item.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}

        <a href="/">
          <li
            id="logout"
            onClick={() => {
              setLogout();
            }}
          >
            Se déconnecter{" "}
            <FontAwesomeIcon icon={faSignOutAlt} className="mx-2" />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavbarResponsive;
