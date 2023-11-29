import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuButtons = () : JSX.Element=> {
    return (
        <div className="menu-icons d-lg-none">
            <FontAwesomeIcon icon={faBars} id="icon"/>
        </div>
    );
};

export default MenuButtons;