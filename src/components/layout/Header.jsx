import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleOpenModal } from "redux/slice/modalSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="relative flex items-center justify-center mb-10 text-lg font-bold text-white header gap-x-5">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "text-primary hover:opacity-80" : "hover:opacity-80"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) =>
          isActive ? "text-primary hover:opacity-80" : "hover:opacity-80"
        }
      >
        Movies
      </NavLink>
      <div className="absolute top-0 flex justify-between w-48 right-24">
        <button
          className="px-4 py-2 text-white bg-secondary rounded-xl whitespace-nowrap hover:opacity-80"
          onClick={() => {
            dispatch(handleOpenModal("SignupForm"));
          }}
        >
          <span>Sign Up</span>
        </button>
        <button
          className="px-4 py-2 text-white bg-primary rounded-xl hover:opacity-80"
          onClick={() => {
            dispatch(handleOpenModal("LoginForm"));
          }}
        >
          <span>Login</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
