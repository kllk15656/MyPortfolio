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

        <div className="mt-16  h-60 name-update rounded-lg ">
          <h2 className="text-2xl font-semibold recent ">Recent Updates</h2>
          <div className="mt-4 p-4 rounded-lg w-30 h-35 name-topic">
            <h3 className=" font-semibold recent-title"> Booking System</h3>
            <p className="mt-1 recent-text"> Full stack booking system</p>
          </div>
        </div>

      {/* Footer*/ }

      <footer className="mt-auto py-6 text-center text-sm">
         Copyright © KKdeveloper 2026
      </footer>
    </div>    
  );
}
