import { useNavigate } from "react-router-dom";

export default function Services() {
  return (
    <div className="px-6 py-10 flex flex-col items-center services-page">

      {/* Page Title */}
      <h1 className="mb-6 text-center service-title">Services</h1>

      {/* Intro */}
      <p className="text-center max-w-2xl mb-10 Service-sub">
        I build modern, fast, and user‑friendly websites for small businesses.
        Choose a simple front‑end website, a full custom website with a database,
        or add extra features like booking systems and online shops.
        All websites include <strong>30 days of free support</strong>.
      </p>

      {/* Simple Front-End Website */}
      <div className="service-card w-full max-w-2xl p-6">
        <h2 className="text-xl mb-3">🌐 Simple Front-end Website</h2>

        <p className="mb-2 Service-sub">
          A clean, modern website that can be uploaded into WordPress or used with Elementor.
        </p>

        <h3 className="mb-2 title_sub">What's Included</h3>
        <ul className="list-disc ml-6 mb-4 title-text">
          <li>Home page</li>
          <li>About page</li>
          <li>Service page</li>
          <li>Contact form</li>
          <li>Mobile-friendly design</li>
          <li>SEO-friendly structure</li>
        </ul>

        <h3 className="mb-2 title_sub">Best For</h3>
        <p className="mb-4 Service-sub">
          Hair & Beauty businesses, pet services, tutors, cafés, local shops, and small businesses.
        </p>

        <h3 className="mb-2 title_sub">Price</h3>
        <p className="title-text">£150–£300</p>
      </div>

      {/* Full Website */}
      <div className="service-card w-full max-w-2xl p-6 mb-8 pb-10">
        <h2 className="mb-3 text-xl ">🌐 Full Website (Front-end + Back-end)</h2>
        <p className="mb-4 Service-sub">
          A complete custom website with database, admin dashboard and business logic.
        </p>

        <h3 className="mb-4 title_sub">What's Included</h3>
        <ul className="list-disc ml-6 mb-4 title-text">
          <li>Custom UI (User Interface)</li>
          <li>Secure back-end</li>
          <li>Database setup</li>
          <li>Optional dashboard</li>
          <li>User accounts (optional)</li>
          <li>Hosting setup guidance</li>
        </ul>

        <h3 className="mb-2 title_sub ">Best For</h3>
        <p className="mb-4 Service-sub ">
          Booking systems, service management, customer accounts, dashboards.
        </p>

        <h3 className="mb-2 title_sub">Price</h3>
        <p className="title-text">£300–£700</p>
      </div>

      {/* Add-on Features */}
      <div className="service-card w-full max-w-2xl p-6 mb-8">
        <h2 className="mb-3 text-xl  ">🧩 Add-On Features</h2>

        <ul className="list-disc ml-6 title-text">
          <li>Booking System – £80–150</li>
          <li>Online Shop – £120–250</li>
          <li>Admin Dashboard – £100–200</li>
          <li>Contact Form + Email Alerts – £20–50</li>
          <li>Basic SEO Setup – £30–60</li>
        </ul>
      </div>

      {/* Support & Maintenance */}
      <div className="service-card w-full max-w-2xl p-6 mb-8">
        <h2 className="mb-2 text-xl ">Support & Maintenance</h2>

        <h3 className="mb-2 title_sub">⭐ Free 30-Day Support</h3>
        <p className="mb-4 Service-sub">
          Included with every project. Covers bug fixes, minor adjustments, and compatibility fixes.
        </p>

        <h3 className="mb-2 title_s">Hourly Support (after 30 days)</h3>
        <p className="mb-4 Service-sub">£10–15 per hour</p>

        <h3 className="mb-2 title_sub">🔥 Maintenance Plans</h3>
        <ul className="list-disc ml-6 mb-4 title-text">
          <li>Prior fixes</li>
          <li>Weekly or monthly check-ups</li>
          <li>Hours roll over</li>
          <li>No small additional fees</li>
          <li>Reduced rate for major updates</li>
          <li>Free client log books</li>
        </ul>
      </div>

      {/* Maintenance Options */}
      <div className="service-card w-full max-w-2xl p-6 mb-8">
        <h2 className="mb-3 text-xl ">📦 Maintenance Options</h2>

        <h3 className="mb-2 title_s">Weekly Plan</h3>
        <p className="mb-4 title-text">• 1–2 hours per week • Priority support • Hours roll over • Free log book</p>
        <strong className="title-text">£40–55 per week</strong>

        <h3 className="mb-2 mt-4 title_s">Monthly Plan</h3>
        <p className="mb-4 title-text"> • 4–6 hours per month • Priority support • Hours roll over • Free log book</p>
        <strong className="title-text" >£60–100 per month</strong>
      </div>

      {/* Hosting */}
      <div className="service-card w-full max-w-2xl p-6 mb-6">
        <h2 className="mb-3 text-xl ">🌐 Hosting & Deployment</h2>

        <h3 className="mb-2 title_sub">Client Hosting Ownership</h3>
        <p className="mb-4 title-text">
          Clients purchase their own hosting and domain name. This keeps ownership clear and avoids renewal issues.
        </p>

        <ul className="list-disc ml-5 mb-4 title-text">
          <li>Clients provide temporary hosting access</li>
          <li>I update the code on my laptop</li>
          <li>I upload the updated files</li>
          <li>Access is removed again</li>
        </ul>

        <h3 className="mb-2 title_sub">Recommended Hosting Providers</h3>
        <ul className="list-disc ml-6 title-text">
          <li>
            <strong>SiteGround – Best overall</strong><br />
            • Supports PHP, JavaScript, React, TypeScript, Tailwind/CSS, and WordPress<br />
            • Best for booking systems, online shops, small business websites.
          </li>

          <li>
            <strong>Hostinger – Best budget</strong><br />
            • Supports PHP, JavaScript, React, TypeScript, Tailwind/CSS, WordPress, and Elementor<br />
            • Best for simple websites, contact forms, and basic booking systems.
          </li>

          <li>
            <strong>Krystal – Best UK hosting</strong><br />
            • Supports PHP, JavaScript, React, TypeScript, Tailwind/CSS, WordPress, and WooCommerce<br />
            • Best for UK-based small businesses, local shops, and small e-commerce sites.
          </li>

          <li>
            <strong>Cloudways – Best for flexible hosting</strong><br />
            • Supports PHP, JavaScript, React, TypeScript, Tailwind/CSS, and MySQL databases<br />
            • Best for small businesses wanting faster hosting or room to grow.
          </li>

          <li>
            <strong>Kinsta – Best for WordPress hosting</strong><br />
            • Supports PHP, JavaScript, React, TypeScript, Tailwind/CSS, WordPress, and WooCommerce<br />
            • Best for small businesses wanting speed and reliability.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="footer-wrapper">
        <footer className="site-footer">
          Copyright © KKdeveloper 2026
        </footer>
      </div>

    </div>
  );
}
