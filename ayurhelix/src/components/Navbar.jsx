import { NavLink } from "react-router-dom";
import { useState } from "react";
import Chat from "./Chat";

const tabs = [
  { name: "Home", link: "/" },
  { name: "Innovation", link: "/innovation" },
  { name: "Blog", link: "/blog" },
  { name: "About", link: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Header */}
      <header className="bg-[#395c37] sticky top-0 z-50 shadow-xl">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              src="/assets/logo.png"
              alt="Ayurhelix Logo"
              className="w-16 h-16 rounded-xl shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#dec493] font-['Source_Serif_4']">
                Beyond Bound<sup>®</sup>
              </h1>
              <p className="text-sm text-[#dec493] opacity-70 mt-1">Heal with Nature</p>
            </div>
          </NavLink>

          {/* Hamburger Icon for Mobile */}
          <button
            className="lg:hidden text-[#dec493] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 bg-[#538366] py-4 px-6 mx-8 rounded-3xl">
            {tabs.map((tab, idx) => (
              <NavLink
                key={idx}
                to={tab.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#dec493] font-semibold border-b-2 border-[#dec493] pb-1 transition text-lg"
                    : "text-white opacity-80 hover:text-[#dec493] transition text-lg"
                }
              >
                <h1 className="font-bold">{tab.name}</h1>
              </NavLink>
            ))}
          </div>
        </nav>
        {/* Floating Chat Component */}
        <Chat />
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#dec493] shadow-md rounded-b-xl flex flex-col items-start px-6 py-5 space-y-4">
          {tabs.map((tab, idx) => (
            <NavLink
              key={idx}
              to={tab.link}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#216041] font-semibold border-l-4 border-[#216041] pl-2 text-xl"
                  : "text-black opacity-70 hover:text-[#216041] transition pl-2 text-xl"
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
