import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/auth.context";
import "./Navbar.css";

function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTakingOff, setIsTakingOff] = useState(false);
  const [menuHeight, setMenuHeight] = useState("0px");
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsTakingOff(!isTakingOff);
  };

  useEffect(() => {
    setMenuHeight(menuOpen ? "100px" : "0px");
  }, [menuOpen]);

  return (
    <div className={"navbar"}>
      <i
        className={`material-icons${isTakingOff ? " taking-off" : ""}`}
        onClick={toggleMenu}
      >
        {isTakingOff ? "flight_takeoff" : "flight_land"}
      </i>
      <ul className={`menu`} style={{ maxHeight: menuHeight }}>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/contacts">
          <li>Contacts</li>
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/user-profile">
              <li>My Profile</li>
            </Link>
            <Link to="/theglobe">
              <li>The Globe</li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link to="/community">
              <li>Community</li>
            </Link>
            <li onClick={logOutUser} className="logout-button">
              Logout
            </li>
          </>
        ) : (
          <>
            <Link to="/auth/signup">
              <li>Signup</li>
            </Link>
            <Link to="/auth/login">
              <li>Login</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavBar;