import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../services/authAPI";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const LogoutHandler = () => {
    dispatch(logout(navigate));
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <h1 className="text-white text-3xl font-semibold">Shop</h1>
        </NavLink>
        <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
          <NavLink to="/">
            <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
              Home
            </p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl " />
              <div>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </NavLink>
          <NavLink to="/login">
            {isLoggedIn ? (
              <h1
                className="text-white font-semibold cursor-pointer"
                onClick={LogoutHandler}
              >
                LogOut
              </h1>
            ) : (
              <h1 className="text-white font-semibold">Login</h1>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
