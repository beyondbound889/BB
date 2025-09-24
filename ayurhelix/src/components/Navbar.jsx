import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Chat from './Chat';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Header */}
      <header className="bg-[#dec493] sticky top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-[#216041] font-['Source_Serif_4']">
            Beyond Bound<sup>®</sup>
          </NavLink>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-[#216041] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#216041] font-bold" : "text-black transition opacity-80"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/innovation"
              className={({ isActive }) =>
                isActive ? "text-[#216041] font-bold" : "text-black transition opacity-80"
              }
            >
              Our Innovation
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#216041] font-bold" : "text-black transition opacity-80"
              }
            >
              About Us
            </NavLink>
          </div>
        </nav>
        <Chat />
      </header>

      {/* Mobile Menu Below Navbar */}
      {isOpen && (
        <div className="bg-[#dec493] md:hidden flex flex-col items-start px-6 py-4 space-y-4 text-xl shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#216041] font-semibold" : "text-black transition opacity-50"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/innovation"
            className={({ isActive }) =>
              isActive ? "text-[#216041] font-semibold" : "text-black transition opacity-50"
            }
            onClick={() => setIsOpen(false)}
          >
            Our Innovation
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#216041] font-semibold" : "text-black transition opacity-50"
            }
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;