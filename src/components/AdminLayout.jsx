import { NavLink } from "react-router-dom";

export default function AdminLayout({ children }) {
   return (

    <div className="min-h-screen bg flex ">

      {/* Admin Sidebar */}
      <aside className="w-64 admin-bg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

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
                  />Settings</>
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
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}