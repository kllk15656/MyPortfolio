import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate(); 
  const [active, setActive] = useState("hourly");
  
  return (
    <div className="space-y-10">

    {/* Page Title */}

    <div className=" dash-bg flex justify-between items-center">
      <h1 className="dash-title">Portfolio Analytics Dashboard</h1>
        
        <div className="flex items-center gap-3">
          <div className="relative flex items-center select-bg">
          <select className="date-select appearance-none pr-8">
            <option>Today</option>
            <option>Yesterday</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>

            <img 
                src="/icons/Dropdown.png"
                alt="dropdown"
                className="dropdown-icon w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
            />
           </div>
          <span className="live-select flex items-center gap-2">
            <img src="/icons/dot.png" alt="live" className="w-3 h-3"/>
              Live
          </span>

</div>
</div>

    {/* Top Stats*/}
    {/* Grid layout means
        - cols-1 → 1 column on small screens (mobile)
        - md:grid-cols-4 → switches to 4 columns on medium screens and above
        - gap-6 → spacing between each grid item
    This makes the dashboard stats responsive and evenly spaced.*/}
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

      <div className="p-6 top-dash text-center gap-3">
        <img src="/icons/users.png" className="w-7 h-7 mx-auto mb-3" alt="vistors"/>
        
        <h2 className="vistor"> Total Vistors </h2>
        <p className="vistor-p mt-2">500</p>
      </div>
      <div className="p-6 top-dash text-center gap-3">
      <img src="/icons/Lusers.png" className="w-7 h-7 mx-auto mb-3" alt="vistor"/>
        <h2 className="sub-online"> Users Online </h2>
        <p className="online-p mt-2">2</p>
      </div>
       <div className="p-6 top-dash text-center gap-3">
         <img src="/icons/folder.png" className="w-7 h-7 mx-auto mb-3" alt="folder"/>

        <h2 className="sub-project"> Top Project </h2>
        <p className=" project-p mt-2">Booking System</p>
      </div>
      <div className="p-6 top-dash text-center gap-3">
          <img src="/icons/Web.png" className="w-7 h-7 mx-auto mb-3" alt="vistors"/>
        <h2 className="sub-tech"> Top Tech </h2>
        <p className=" tech-p mt-2"> React</p>
      </div>
    </div>

    {/* Traffic Graph Placeholder */}

    <div className="p-6 middle-dash">
      <div className="flex justify-between items-center mb-4">
                <img src="/icons/bar-chart.png" className="w-6 h-6" alt="traffic icon"/>  
        <h2 className="traffic-title"> Traffic Over Time</h2>
        
        <div className="flex gap-2 traffic-sub">
        <button
          className={`px-3 py-1 traffic-button ${active === "hourly" ? "active" : ""}`}   // ⭐ NEW
          onClick={() => setActive("hourly")}                                            // ⭐ NEW
        >Hourly</button>
        <button
          className={`px-3 py-1 traffic-button ${active === "days" ? "active" : ""}`}     // ⭐ NEW
          onClick={() => setActive("days")}                                              // ⭐ NEW
        >Days</button>

        <button
          className={`px-3 py-1 traffic-button ${active === "monthly" ? "active" : ""}`}  // ⭐ NEW
          onClick={() => setActive("monthly")}                                           // ⭐ NEW
        >Monthly</button>

        </div>

      </div>
    {/* Graph placeholder */}
    <div className="h-48 graph-dash flex items-center justify-center">
      Graph Placeholder
    </div>
    </div>

    {/* Bottom Grid */}
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* LEFT — Live Feed */}
    <div className="p-6 bottom-dash rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
      <img src="/icons/dot.png" className="w-6 h-6" alt="traffic icon"/>
      <h2 className="bottom-title">Live Feed</h2>
    </div>

    <div className="p-3 feed-image flex justify-between items-center rounded-lg">
      <p className="min-feed">3 mins ago</p>
      <p className="p-feed">Visit home page</p>
    </div>
  </div>

  {/* RIGHT — Most Viewed Project */}
  <div className="p-6 view-dash rounded-xl shadow-sm">
    <h2 className="view-title">Most Viewed Project</h2>
    <p className="view-p">Booking System</p>
    <p className="view-p">148 Views</p>
  </div>

    </div>



{/* ⭐ ROW 2 — Device Breakdown + Top Referrers */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

  {/* LEFT — Device Breakdown */}
  <div className="p-6 break-dash rounded-xl shadow-sm">
    <h2 className="break-title">Device Breakdown</h2>
    <div className="h-48 flex items-center justify-center">
      Donut Chart Holder
    </div>

    <ul className="mt-4 donut-list">
      <li>Desktop - 73%</li>
      <li>Mobile - 20%</li>
      <li>Tablet - 2%</li>
    </ul>
  </div>
  {/* ⭐ ROW 3 — Visit Map */}
<div className="p-6 map-dash rounded-xl shadow-sm">

  <div className="flex items-center  gap-2 mb-4">
    <img src="/icons/map.png" className="w-6 h-6" alt="map icon"/>
    <h2 className="map-title">Visit Map</h2>
  </div>

  {/* ⭐ Map Placeholder */}
  <div className="h-48 flex items-center justify-center map-holder">
    Map Placeholder
  </div>

  {/* ⭐ Regions List */}
  <ul className="mt-4 space-y-2 map-list">
    <li className="flex justify-between">
      <span>Scotland</span>
      <span>●</span>
    </li>
    <li className="flex justify-between">
      <span>England</span>
      <span>●</span>
    </li>
    <li className="flex justify-between">
      <span>Wales</span>
      <span>●</span>
    </li>
    <li className="flex justify-between">
      <span>Ireland</span>
      <span>●</span>
    </li>
    <li className="flex justify-between">
      <span>Outside UK</span>
      <span>●</span>
    </li>
  </ul>

</div>


  {/* RIGHT — Top Referrers */}
  <div className="flex justify-center mt-6">
  <div className="p-4 dash-ref rounded-xl shadow-sm w-full md:w-4/5 lg:w-3/4">
   <h2 className="ref-title">Top Referrers</h2>

    <ul className="space-y-3 ref-sub">
      <li className="flex justify-between">
        <span>Direct (no referrals)</span>
        <span>48%</span>
      </li>
      <li className="flex justify-between">
        <span>GitHub</span>
        <span>22%</span>
      </li>
      <li className="flex justify-between">
        <span>LinkedIn</span>
        <span>12%</span>
      </li>
      <li className="flex justify-between">
        <span>Google Search</span>
        <span>8%</span>
      </li>
    </ul>
  </div>
  </div>

</div>
</div>

  
  );
}
