/*import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/packages">Packages</Link> |{" "}
      <Link to="/booking">Booking</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Header;*/

/*import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Booking", path: "/booking" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "My Bookings", path: "/mybookings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide hover:scale-105 transition duration-300"
        >
          <span className="text-green-300">🌎</span> Explore Earth
        </Link>

        {/* Desktop Menu }
        <ul className="hidden md:flex items-center gap-8">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-yellow-300 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </ul>

        {/* Mobile Button }
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu }
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-sky-900 px-6 py-4 space-y-4">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="block py-2 px-4 rounded-lg hover:bg-cyan-600"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-lg w-full"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header; */
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-200 transition";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-blue-900/90 via-blue-700/90 to-green-600/90 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-bold text-white"
        >
          🌍
          <span className="tracking-wide">
            Explore Earth
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[17px]">

          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/packages" className={navStyle}>
            Packages
          </NavLink>

          <NavLink to="/booking" className={navStyle}>
            Booking
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>

          <NavLink to="/mybookings" className={navStyle}>
            My Bookings
          </NavLink>

        </nav>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition duration-300 shadow-md hover:scale-105"
        >
          Logout
        </button>

      </div>
    </header>
  );
}

export default Header;
