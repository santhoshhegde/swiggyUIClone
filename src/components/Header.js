import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import Logo from "../Assets/logo.png";
import CartLogo from "../Assets/svg/shopping-cart.svg";

const Header = () => {
  // const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItemLength = useSelector((store) => store.cart.item.length);
  return (
    <header className="flex justify-between shadow-lg bg-white z-10 p-3 fixed top-0 left-0 right-0">
      <a href="/">
        <img src={Logo} className="h-14" />
      </a>
      <nav>
        <ul className="flex items-center">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <NavLink to="about">About</NavLink>
          </li>
          <li className="p-3">
            <Link to="contact">Contact</Link>
          </li>
          <li className="p-3">
            <Link to="instamart">Instamart</Link>
          </li>
          <li className="p-3">
            <Link to="cart">
              <span className="flex relative items-center justify-center">
                <p>Cart</p>
                <img src={CartLogo} alt="Cart Logo" className="h-9" />
                <span className="text-white font-bold text-[2vmin] absolute top-2 right-3">
                  {cartItemLength}
                </span>
              </span>
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
            )}
          </li>
        </ul>
      </nav>
      {/* <div>{user.fName}</div> */}
    </header>
  );
};

export default Header;
