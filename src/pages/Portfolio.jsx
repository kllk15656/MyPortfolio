import { useNavigate } from "react-router-dom";

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-10 items-stretch">

      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold project-name">Portfolio Projects</h1>
      </header>

      {/* MAIN LAYOUT */}
      <div className="flex gap-10 items-start">

        {/* LEFT SIDEBAR FILTER */}
        <aside className="w-64 p-5 h-fit port-left">
          <h2 className="port-title mb-4">Sort Filter</h2>

          {/* Sort */}
          <div className="mb-4">
            <label className="type">Sort</label>
            <select className="w-full mt-2 p-2 select-bg">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          {/* Project Type */}
          <div className="mb-4">
            <label className="type">Project Type</label>
            <select className="w-full mt-1 p-2 select-bg">
              <option>Project based</option>
              <option>Paid</option>
            </select>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <label className="type">Tech Stack</label>
            <div className="flex flex-col gap-1 mt-1 check">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> React
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Node.js
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> PHP
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> JavaScript
              </label>
            </div>
          </div>

          {/* Year */}
          <div className="mb-4">
            <label className="type">Year</label>
            <select className="w-full mt-1 p-2 select-bg">
              <option>2025</option>
              <option>2026</option>
            </select>
          </div>

          {/* Keyword Search */}
          <div className="mb-4">
            <label className="type">Keyword</label>
            <input type="text" className="w-full mt-1 p-2 search" placeholder="Search" />
          </div>

          {/* Button */}
          <button className="filter-button w-full">Search</button>
        </aside>

        {/* RIGHT SIDE PROJECT CARD */}
        <main className="flex-1">
          <div className="project-box p-6 rounded-lg">
            <h2 className="project-title mb-4">Booking System Portfolio</h2>

            <div className="w-full h-40 image"></div>

            <p className="mb-4 descript">
              This is a booking system ... more info will be added later
            </p>

            <button className="project-button mb-4">More Info</button>

            <div className="summary">
              <p><strong>Created on:</strong> 27/11/2025</p>
              <p><strong>Latest update:</strong> 20/03/2026</p>
              <p><strong>Project:</strong> Project Based</p>
              <p><strong>Tags:</strong> PHP, JavaScript, XAMMP(MySQL)</p>
            </div>
          </div>
        <div className="footer-wrapper">
            <footer className="site-footer">
                Copyright © KKdeveloper 2026
            </footer>
        </div>
         
        </main>
        

      </div>
    </div>
  );
}
