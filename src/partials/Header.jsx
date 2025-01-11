import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/sekere2.png';

function Header() {
  const [top, setTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  // Detect clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} alt="logo" className="h-10 w-10" />
            </Link>
          </div>

          {/* Mobile menu toggle button */}
          <button
            className="text-gray-900 md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Backdrop */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMenuOpen(false)}
            />
          )}

          {/* Site navigation */}
          <nav
            ref={menuRef}
            className={`transform md:transform-none transition-transform duration-300 ease-in-out ${
              menuOpen
                ? 'translate-x-0'
                : '-translate-x-full'
            } md:flex flex-grow items-center md:static absolute top-16 left-0 w-full bg-white md:bg-transparent md:shadow-none shadow-lg md:p-0 p-4 z-50`}
          >
            <ul className="flex flex-col md:flex-row md:flex-grow justify-start md:justify-between items-center">
              <li>
                <Link
                  to="/"
                  className="font-medium text-gray-600 hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="font-medium text-gray-600 hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out"
                  onClick={() => setMenuOpen(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className="font-medium text-gray-600 hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out"
                  onClick={() => setMenuOpen(false)}
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Sign up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
