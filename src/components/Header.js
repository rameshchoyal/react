import { lazy, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import userContext from "../utils/userContext";
import { UseSelector, useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loginUser } = useContext(userContext);

  // Subscribing to the store using a Selector
  const itemCards = useSelector((store) => store.cart.items);
  console.log(itemCards);

  return (
    <div className="flex justify-between bg-blue-100 shadow-md m-2">
      <div className="logo-container">
        <Link to="/">
          <img className="w-28" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">OnlineStatus: {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold ">
            <Link to="/cart">Cart - ({itemCards.length} items)</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{loginUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
