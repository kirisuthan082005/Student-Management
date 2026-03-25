import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserGraduate,
  FaPlusCircle,
  FaEnvelope,
  FaTachometerAlt,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItem =
    "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:text-yellow-400 hover:scale-105";

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md text-white shadow-lg border-b border-gray-700">
      
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Student Management
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">

          <li className={menuItem}>
            <FaHome />
            <Link to="/">Home</Link>
          </li>

          <li className={menuItem}>
            <FaTachometerAlt />
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li className={menuItem}>
            <FaUserGraduate />
            <Link to="/students">Students</Link>
          </li>

          <li className={menuItem}>
            <FaPlusCircle />
            <Link to="/add-student">Add Student</Link>
          </li>

          <li className={menuItem}>
            <FaEnvelope />
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-3xl cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col bg-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-4">

          <li className={menuItem}>
            <FaTachometerAlt />
            <Link to="/dashboard" onClick={() => setOpen(false)}>
              Dashboard
            </Link>
          </li>

          <li className={menuItem}>
            <FaHome />
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>

          <li className={menuItem}>
            <FaUserGraduate />
            <Link to="/students" onClick={() => setOpen(false)}>
              Students
            </Link>
          </li>

          <li className={menuItem}>
            <FaPlusCircle />
            <Link to="/add-student" onClick={() => setOpen(false)}>
              Add Student
            </Link>
          </li>

          <li className={menuItem}>
            <FaEnvelope />
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;