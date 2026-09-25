import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          My Website
        </h1>

        <div className="flex gap-6">
          <NavLink to="/" className={navStyle}>Home</NavLink>
          <NavLink to="/about" className={navStyle}>About</NavLink>
          <NavLink to="/services" className={navStyle}>Services</NavLink>
          <NavLink to="/courses" className={navStyle}>Courses</NavLink>
          <NavLink to="/gallery" className={navStyle}>Gallery</NavLink>
          <NavLink to="/contact" className={navStyle}>Contact</NavLink>
          <NavLink to="/help" className={navStyle}>Help</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;