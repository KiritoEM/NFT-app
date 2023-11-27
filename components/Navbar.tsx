import dataHelper from "@/helper/dataHelper";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (): JSX.Element => {
  const { navItems } = dataHelper();
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={navItems.logo} alt="" />
          <h5>NFT-app</h5>
        </div>
        <div className="navbar__menuItems">
          <ul>
            {navItems.menu_item.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}

            <li id="logout">Se déconnecter <FontAwesomeIcon icon={faSignOutAlt} className="mx-2"/></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
