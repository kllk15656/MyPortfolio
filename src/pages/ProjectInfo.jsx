export default function ProjectInfo() {
  return (
    <div className="min-h-screen px-6 py-10">

      {/* HEADER */}
      <header className="mb-8 header">
        Portfolio Projects
      </header>

      {/* WHITE BOX */}
      <main className="info-box p-6 rounded-lg">

        {/* TWO COLUMN LAYOUT */}
        <div className="flex gap-10">

          {/* LEFT SECTION — IMAGE + TITLE + SUMMARY */}
          <div className="w-1/2">

            {/* IMAGE */}
            <div className="info-image w-full h-48 mb-4"></div>

            {/* TITLE */}
            <h2 className="info-title mb-4">Booking System Project</h2>

            {/* SUMMARY */}
            <div className="info-summary mb-4">
              <p><strong>Project:</strong> Project Based</p>
              <p><strong>Created on:</strong> 27/01/2024</p>
              <p><strong>Latest update:</strong> 28/01/2024</p>
            </div>

          </div>

          {/* RIGHT SECTION — DESCRIPTION + LINKS + FUTURE UPDATES */}
          <div className="w-1/2">

            <h3 className="info-sub-title">Description:</h3>
            <p className="info-descript mb-4">
              This project was created as part of my portfolio projects. It is a booking system
              where users can book appointments and view available slots. The system includes
              a user-friendly interface and stores data securely. It was developed using HTML,
              CSS, and JavaScript.
            </p>

            <h3 className="info-sub-title mb-2">Documentation:</h3>
            <a href="#" className="info-link">View Documentation</a>

            <h3 className="info-sub-title mt-4 mb-2">Demo Video:</h3>
            <a href="#" className="info-link">Watch Demo</a>

            <h3 className="info-sub-title mt-6 mb-2">Future updates:</h3>

            <div className="info-updates-box p-4 rounded-lg">
                <ul className="list-disc ml-6">
                    <li>29/07/2024</li>
                    <li>Extra features</li>
                </ul>
            </div>


          </div>
        </div>
      </main>

      <footer className="mt-10 text-center text-sm">
        Copyright © Webdeveloper 2024
      </footer>
    </div>
  );
}
