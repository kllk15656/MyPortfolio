import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate(); 
  
  return (
    <div className="space-y-10">

    {/* Page Title */}
    <h1 className="dash-title">Portfolio Analytics Dashboard</h1>
    {/* Top Stats*/}
    {/* Grid layout means
        - cols-1 → 1 column on small screens (mobile)
        - md:grid-cols-4 → switches to 4 columns on medium screens and above
        - gap-6 → spacing between each grid item
    This makes the dashboard stats responsive and evenly spaced.*/}
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="p-6 top-dash">
        <h2 className="vistor"> Total Vistors </h2>
        <p className=" vistor-p mt-2">500</p>
      </div>
      <div className="p-6 top-dash">
        <h2 className="sub-online"> Users Online </h2>
        <p className="online-p mt-2">2</p>
      </div>
       <div className="p-6 top-dash">
        <h2 className="sub-project"> Top Project </h2>
        <p className=" project-p mt-2">Booking System</p>
      </div>
      <div className="p-6 top-dash">
        <h2 className="sub-tech"> Top Tech </h2>
        <p className=" tech-p mt-2"> React</p>
      </div>
    </div>

    {/* Traffic Graph Placeholder */}

    <div className="p-6 middle-dash">
      <div className="flex justify-between items-center mb-4">
        <h2 className="traffic-title"> Traffic Over Time</h2>
        <div className="flex gap-3 traffic-sub">
          <button className="px-3 py-1 traffic-button">Hourly </button>
          <button className="px-3 py-1 traffic-button">Days </button>
          <button className="px-3 py-1 traffic-button">Monthly </button>
        </div>
      </div>
    {/* Graph placeholder */}
    <div className="h-48 graph-dash flex items-center justify-center">
      Graph Placeholder
    </div>
    </div>

    {/* Bottom Grid */}
    <div className="p-6 bottom-dash">
    <h2 className="bottom-title mb-4">Live Feed</h2>
    <div className="space-y-3">
      <div className="p-3 feed-image">
        <p className="min-feed">3 mins ago</p>
        <p className="p-feed">Visit home page</p>
      </div>
    </div>
  </div>

  {/* Most Viewed Project */}

  <div className="view-dash">
    <h2 className="view-title"> Most Viewed Project</h2>
    <p className="view-p"> Booking System</p>
    <p className="view-p">148 Views</p>
  
  {/* Device Breakdown */}
  <div className="p-6 break-dash ">
  <h2 className="break-title">Device Breakdown</h2>
  <div className=" h-48 flex items-center justify-center">
    Donut Chart Holder
  </div>

  <ul className="mt-4 donut-list">
    <li>Desktop - 73% </li>
    <li>Mobile - 20% </li>
    <li>Tablet - 2%</li>
  </ul>
  </div>
  </div>
  {/* Referrers */}
   <div className="p-4 dash-ref">
    <h2 className=" ref-tile">Top Referrers</h2>

      {/* space-y-3 means
           - Adds vertical spacing of 0.75rem between each child element
           - Only affects spacing *between* items, not around the container
           - Useful for stacked lists, feed items, notifications, etc.
      */}

    <ul className="space-y-3 ref-sub">
      <li className="flex justify-between">
        <span> Direct(no refferals) </span>
        <span>48%</span>
      </li>
      <li className="flex justify-between">
        <span> GitHub </span>
        <span>22%</span>
      </li>
      <li className="flex justify-between">
        <span> LinkdeIn </span>
        <span>12%</span>
      </li>
      <li className="flex justify-between">
        <span> Google Search</span>
        <span>8%</span>
      </li>
    </ul>

   </div>
  </div>
  );
}
