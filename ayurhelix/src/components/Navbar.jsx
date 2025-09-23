import { NavLink } from 'react-router-dom';// Ensure you have a logo image in the specified 
import Chat from './Chat';
const Navbar = () => {
  return (
    <header className="bg-[#dec493] sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-[#216041] font-['Source_Serif_4']">
          Beyond Bound<sup>®</sup>
        </NavLink>
        <div className="hidden md:flex items-center space-x-8 text-xl">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#216041] font-semibold" : "text-black transition opacity-50")}>Home</NavLink>
          <NavLink to="/innovation" className={({ isActive }) => (isActive ? "text-[#216041] font-semibold" : "text-black transition opacity-50")}>Our Innovation</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-[#216041] font-semibold" : "text-black transition opacity-50")}>About Us</NavLink>
        </div>
      </nav>
      <Chat/>
    </header>
  );
};

export default Navbar;