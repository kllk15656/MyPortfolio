// Import NavLink so React Router can highlight active pages
import { NavLink } from "react-router-dom";

export default function TopNav() {
  return (
    
    <nav className="w-full bg-nav shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50">

      {/* Center content inside max width */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-semibold nav-inactive">
          KKDeveloper
        </h1>

        {/* Navigation links */}
        <ul className="flex items-center gap-6 font-medium">

          {/* HOME */}
          <li>
          <NavLink
          to="/" className={({ isActive }) =>
          `nav-link flex flex-col items-center ${isActive ? "nav-active" : "nav-inactive"}`}>
          {({ isActive }) => (
            <>
            <img
            src={isActive ? "/icons/HomeA.png" : "/icons/Home.png"}
            className="w-6 h-6 mb-1"
            alt="Home"/>Home
            </>
            )}
          </NavLink>
          </li>


          {/* ABOUT */}
           <li>
          <NavLink
          to="/About" className={({ isActive }) =>
          `nav-link flex flex-col items-center ${isActive ? "nav-active" : "nav-inactive"}`}>
          {({ isActive }) => (
            <>
            <img
            src={isActive ? "/icons/AboutA.png" : "/icons/About.png"}
            className="w-6 h-6 mb-1"
            alt="About"/>About
            </>
            )}
          </NavLink>
          </li>
          
          {/* Service */}
           <li>
          <NavLink
          to="/Service" className={({ isActive }) =>
          `nav-link flex flex-col items-center ${isActive ? "nav-active" : "nav-inactive"}`}>
          {({ isActive }) => (
            <>
            <img
            src={isActive ? "/icons/ServiceA.png" : "/icons/Services.png"}
            className="w-6 h-6 mb-1"
            alt="Service"/>Service
            </>
            )}
          </NavLink>
          </li>

          {/* PROJECTS */}
          <li>
          <NavLink
          to="/Portfolio" className={({ isActive }) =>
          `nav-link flex flex-col items-center ${isActive ? "nav-active" : "nav-inactive"}`}>
          {({ isActive }) => (
            <>
            <img
            src={isActive ? "/icons/PortfolioA.png" : "/icons/Portfolio.png"}
            className="w-6 h-6 mb-1"
            alt="Portfolio"/>Portfolio
            </>
            )}
          </NavLink>
          </li>

          {/* CONTACT */}
          <li>
          <NavLink
          to="/Contact" className={({ isActive }) =>
          `nav-link flex flex-col items-center ${isActive ? "nav-active" : "nav-inactive"}`}>
          {({ isActive }) => (
            <>
            <img
            src={isActive ? "/icons/ContactA.png" : "/icons/Contact.png"}
            className="w-6 h-6 mb-1"
            alt="Contact"/>Contact
            </>
            )}
          </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}
