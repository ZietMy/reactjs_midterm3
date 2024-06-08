// /src/components/layout/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`navbar ${theme === 'light' ? 'bg-success' : 'bg-dark'}`}>
      <h1>
        <i className='fab fa-github' /> GitHub Finder
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <button className="btn" onClick={toggleTheme}>
        {theme === 'light' ? <MdDarkMode /> : <CiLight />}
      </button>
    </nav>
  );
};
export default Navbar;
