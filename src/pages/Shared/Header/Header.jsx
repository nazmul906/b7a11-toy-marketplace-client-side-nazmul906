/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <Link to="/alltoys">All Toys</Link>

                <Link to="/alltoys">Add A Toy</Link>

                <Link to="/addtoy">My Toys</Link>

                <Link to="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doll's World</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/alltoys">All Toys</Link>
              <Link to="/addtoy">Add A Toy</Link>
              <Link to="/mytoy">My Toys</Link>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Get started</a> */}
          {user?.email}
        </div>
        {/* <img src={user?.photoURL} height="40" width="40" /> */}
        <img
          src={user?.photoURL}
          alt="userphoto"
          height="40"
          width="40"
          className="rounded-xl"
        />
        <div>
          {user ? (
            <button onClick={handleLogout} className="btn btn-warning">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
