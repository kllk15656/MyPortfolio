import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg flex">

      {/* Burger Button (mobile only) */}
      {!open && (
        <button
          className="md:hidden p-4 absolute top-4 left-0 z-50"
          onClick={() => setOpen(true)}
        >
          <img src="/icons/burger.png" className="w-6 h-6" />
        </button>
      )}

      {/* Admin Sidebar */}
      <aside
        className={`admin-bg shadow-lg p-6 w-64 fixed top-0 left-0 h-full 
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:h-screen `}
      >

        {/* X Close Button (mobile only) */}
        {open && (
          <button
            className="md:hidden absolute top-4 right-4 z-50 text-white"
            onClick={() => setOpen(false)}
          >X
          </button>
        )}

        <h2 className="text-xl font-bold mb-6 mt-10 md:mt-0">Admin Panel</h2>

        <ul className="space-y-4">

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `admin-link flex items-center gap-3 ${isActive ? "active" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? "/icons/dashboardA.png" : "/icons/dashboard.png"}
                    className="w-5 h-5"
                    alt="dashboard"
                  />
                  Dashboard
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `admin-link flex items-center gap-3 ${isActive ? "active" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? "/icons/ProjectsA.png" : "/icons/Projects.png"}
                    className="w-5 h-5"
                    alt="projects"
                  />
                  Projects
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `admin-link flex items-center gap-3 ${isActive ? "active" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? "/icons/SettingsA.png" : "/icons/Settings.png"}
                    className="w-5 h-5"
                    alt="settings"
                  />
                  Settings
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `admin-link flex items-center gap-3 ${isActive ? "active" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? "/icons/LogoutA.png" : "/icons/Logout.png"}
                    className="w-5 h-5"
                    alt="logout"
                  />
                  Logout
                </>
              )}
            </NavLink>
          </li>

        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 md:ml-20 ">
        {children}
      </main>
    </div>
  );
}
