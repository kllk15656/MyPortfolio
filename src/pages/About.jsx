import { useNavigate } from "react-router-dom";   // lets buttons move to other pages
import { useState } from "react";                 // needed for slideshow image switching

export default function About() {

  const navigate = useNavigate();                 // create navigation function

  // slideshow images stored in public/awards
  const awardImages = [
    "/awards/image1.jpg",
    "/awards/image2.jpg",
    "/awards/image3.jpg"
  ];

  const [index, setIndex] = useState(0);          // track which image is showing

  const preImage = () => {                        // go to previous image
    setIndex((index - 1 + awardImages.length) % awardImages.length);
  };

  const nextImage = () => {                       // go to next image
    setIndex((index + 1) % awardImages.length);
  };

  return (
  <>
  <header className="mb-8 header">
        About
      </header>
    <div className="about-wrapper px-6 py-6 flex gap-6 items-start"> {/* main wrapper */}
      
      {/* LEFT SIDE */}
      <div className="about-left p-6 rounded-lg w-1/2">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          My name is Kristine, a graduate of computer science with a 2:1...
        </p>
        <button className="cv-button px-6 py-2 ">Download CV</button>
      </div>
      

      {/* RIGHT SIDE — SLIDESHOW */}
      <div className="about-right p-6 rounded-lg w-1/2 ">
        <h2 className="slideshow-title">BSc Computer Science with honours</h2>

        <div className="slideshow-image-wrapper flex items-center justify-center gap-4 mt-4">
          <button className="slideshow-arrow w-6 h-6" onClick={preImage}>
            <img src="/icons/Left.png" className="arrow-icon" />
          </button>

          <div className="slideshow-image w-70 h-70">
            <img
              src={awardImages[index]}
              alt="Award"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <button className="slideshow-arrow w-6 h-6" onClick={nextImage}>
            <img src="/icons/Right.png" className="arrow-icon" />
          </button>
        </div>

        <p className="slideshow-text mt-2">
          This reward was achieved in uni 2026
        </p>
      </div>

    </div>  {/* ← FIX: MAIN WRAPPER CLOSED HERE */}

    {/* FOOTER OUTSIDE FLEX */}
    <div className="footer-wrapper">
      <footer className="site-footer">
        Copyright © KKdeveloper 2026
      </footer>
    </div>
  </>
);
}
