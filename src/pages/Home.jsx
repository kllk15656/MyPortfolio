// import use navigate so buttons can move to other pages.
import { useNavigate } from "react-router-dom";



export default function Home() {

  const navigate =useNavigate();

  return (
    
    // Main wrapper - adds page, padding and spacing  
    <div className="px-6 py-6">
    

    {/*top Row*/ }

    {/* Flex puts left and right side in one row*/ }
    <div className=" flex items-baseline gap-2">
        {/* Left side - intro text*/ }
        <div>
        {/* Main heading*/ }
        <h1 className="text-4xl font-bold name-intro inline-block">Hi, I'm</h1>
        <h1 className="text-4xl font-bold name-gradient inline-block ml-2">Kristine</h1>

        {/* Subtitles*/ }
        <p className="text-large mt-2 name-stack">Full Stack Web Developer</p>
        <p className="text-large mt-2 name-stack">Front-end Developer | Back-end Developer | Project-based Experience</p>

        {/* buttons row*/ }
        <div className="flex gap-4 mt-6 ">
          <button className="px-6 py-4  transition">Projects</button>
          <button className="px-6 py-4  transition">Contact</button>
        </div>
        </div>
        {/* Right side / profile image*/ }
        <div className="w-64 h-64 rounded-full overflow-hidden placeholder-profile mx-auto md:mx-0 ">

          <img src="/image.jpg"  className="w-full h-full object-cover"/>

         
        </div>
    </div>

        {/* Recent Updates*/ }
        
       {/* Recent Updates Section Wrapper */}
<div className="updates-wrapper name-update mt-16 h-60 rounded-lg">

  {/* Section Title */}
  <h2 className="recent-title font-semibold">
    Recent Updates
  </h2>

  {/* Content Row: arrows + update card */}
  <div className="updates-content flex items-center justify-between mt-4">

    {/* Left Arrow Button */}
    <button className="updates-arrow w-6 h-6">
      <img src="/icons/Left.png" alt="Previous" className="arrow-icon" />
    </button>

  {/* Update Card */}
<div className="update-card w-full max-w-2xl p-6 rounded-lg name-topic">
  <h3 className="recent-title font-semibold">Booking System</h3>
  <p className="recent-text mt-1">Full stack booking system</p>
  <button className="button mt-3">More Info</button>
</div>


    {/* Right Arrow Button */}
    <button className="updates-arrow w-6 h-6" >
      <img src="/icons/Right.png" alt="Next" className="arrow-icon"  />
    </button>

  </div>
</div>

      {/* Footer*/ }
    <div className="footer-wrapper">
      <footer className="site-footer">
        Copyright © KKdeveloper 2026
      </footer>
    </div>
      
    </div>
        
  );
}
