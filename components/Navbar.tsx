import dataHelper from "@/helper/dataHelper";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const { navItems, logo } = dataHelper();
  const { setLogout } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo.img} alt="" />
          <h5>{logo.logo_title}</h5>
        </div>
        <div className="navbar__menuItems">
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
      </div>
    </nav>
  );
};

export default Navbar;
