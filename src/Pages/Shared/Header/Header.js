import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const { logOut, user } = useAuth();
  const [bgClass, setBgClass] = useState("bg-transparent");

  let location = useLocation();

  const toggleNav = () => {
    const resNav = document.getElementById("res_nav");
    if (resNav.classList.contains("hidden")) {
      resNav.classList.replace("hidden", "flex");
    } else {
      resNav.classList.replace("flex", "hidden");
    }
  };

  useEffect(() => {
    const resNav = document.getElementById("res_nav");
    if (resNav.classList.contains("hidden")) {
      resNav.classList.replace("hidden", "hidden");
    } else {
      resNav.classList.replace("flex", "hidden");
    }
  }, [location.pathname]);

  window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    if (scroll <= 50) {
      setBgClass("bg-transparent");
    } else {
      setBgClass("bg-white shadow-lg");
    }
  });

  return (
    <div className={`Header z-40 text-black body-font h-auto fixed w-full p-5 ${bgClass}`} >
      <div className="mx-auto block md:flex flex-wrap flex-row items-center">
        <div className='flex justify-between items-center'>
          <div className="flex items-center font-semibold text-xl mb-4 md:mb-0">
            <NavLink to='/' className='cursor-pointer flex justify-center items-center'>
              <img
              className="h-12 mr-3"
              src="https://i.ibb.co/MP6W3Nv/leaf.png"
              alt=""
            />{" "}
            Greenish World
            </NavLink>
            
          </div>

          <div>
            <button onClick={toggleNav}>
              <BiMenu className="block md:hidden text-3xl" />
            </button>
          </div>
        </div>
        
        
        <nav id="res_nav" className="bg-bgPrimary py-5 flex md:hidden flex-col shadow-md ">
          <NavLink
            to="/home"
            activeClassName="font-semibold text-white"
            className="text-black hover:bg-gray-100 py-2 rounded-full overflow-hidden"
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            activeClassName="font-semibold text-white"
            className="text-black hover:bg-gray-100 py-2 rounded-full overflow-hidden"
          >
            Plants
          </NavLink>
          
          <NavLink
            to="/contact"
            activeClassName="font-semibold text-white"
            className="text-black hover:bg-gray-100 py-2 rounded-full overflow-hidden"
          >
            Contact Us
          </NavLink>

          {user.email ? (
            <span className="flex-col flex">
              
              <NavLink
                to="/dashboard"
                activeClassName="font-semibold text-white"
                className="text-black hover:bg-gray-100 py-2 rounded-full overflow-hidden"
              >
                Dashboard
              </NavLink>
              
              <button
                onClick={logOut}
                className="text-black hover:bg-gray-100 py-2 rounded-full overflow-hidden"
              >
                Log Out
              </button>
            </span>
          ) : (
            <NavLink
              to="/login"
              activeClassName="font-semibold text-white"
              className="text-black hover:bg-gray-100 py-2 rounded-full overflow-hidden"
            >
              Log In
            </NavLink>
          )}

          {user.email && (
            <NavLink
              to="/"
              className="hover:bg-gray-200 mt-2 bg-gray-100 mx-auto rounded-full px-1 py-1 flex justify-between items-center"
            >
              <span className="text-textPrimary ml-2 block">
                {user.displayName || user.email}
              </span>
              <img
                className="h-10 w-10 rounded-full ml-3 block"
                src={
                  user.photoURL ||
                  "https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
                }
                alt=""
              />
            </NavLink>
          )}
        </nav>

        <nav className="h-full md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/home"
            activeClassName="font-semibold text-textPrimary"
            className={`mr-5 text-black hover:text-gray-300`}
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            activeClassName="font-semibold text-textPrimary"
            className={`mr-5 text-black hover:text-gray-300`}
          >
            Plants
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="font-semibold text-textPrimary"
            className={`mr-5 text-black hover:text-gray-300`}
          >
            Contact Us
          </NavLink>

          {user.email ? (
            <span>
              <NavLink
                to="/dashboard"
                activeClassName="font-semibold text-textPrimary"
                className={`mr-5 text-black hover:text-gray-300`}
              >
                Dashboard
              </NavLink>
              
              <button
                onClick={logOut}
                className={`mr-5 text-black hover:text-gray-300`}
              >
                Log Out
              </button>
            </span>
          ) : (
            <NavLink
              to="/login"
              activeClassName="font-semibold text-textPrimary"
              className={`mr-5 text-black hover:text-gray-300`}
            >
              Log In
            </NavLink>
          )}
          {user.email && (
          <div
            to="/"
            className="bg-white hover:bg-bgPrimary hover:text-white text-textPrimary rounded-full px-1 py-1 flex justify-between items-center"
          >
            <span className="ml-2 hidden lg:block">
              {user.displayName || user.email}
            </span>
            <img
              className="h-10 w-10 rounded-full ml-3 hidden md:block"
              src={
                user.photoURL || "https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
              }
              alt=""
            />
          </div>
        )}
        </nav>

        
      </div>
    </div>
  );
};

export default Header;
