// Navigation
import { useNavigate } from "react-router-dom";   // lets buttons move to other pages

import { useState } from "react";

export default function ContactForm(){
    
    //Stores the results message success or error
    const [result, setResult] = useState ("");

    //run when form is submitted
    const onSubmit = async (event) => {
    event.preventDefault();
    

    const formData = new FormData(event.target);
    formData.append("access_key", "821feb3f-a7a0-422d-8534-036030f21689");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    };

    return(
        // Main wrapper – centers everything on the page
        <div className="flex flex-col items-center contact-form">
        {/* Page title */}
        <header className="mb-8 header">
        Contact Form
      </header>
        

        {/* Form box – keeps the form centered */}
        
        <div className="w-full max-w-md p-6 rounded-lg message-bg ">

        <h1 className="mb-7 contact-name text-center"> Contact Me</h1>

        <p className="text-center mb-4 intro-message">
        Feel free to send me a message — I’ll get back to you soon!
      </p>
            
        {/* Contact form - runs onSubmit when user clicks submit*/}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {/* User name input */}
            <input type="text" name="name" placeholder="Your Name" required className="p-3  border rounded-lg field-name"/>
        {/* User email */}
           <input type="email" name="email" placeholder="your Email" required className="p-3 border rounded-lg field-name" />
        {/* Message input */} 
         <textarea type="message" name="message" placeholder="Your Message" required className="p-3 border rounded-lg message"/>
        {/* Submit button*/} 
        <button type="submit" className="p-3  message-button ">Submit</button>
        {/* Message was success or error after sending*/} 
        <p className="text-center font-semibold  ">{result}</p>   
        </form>
      </div>
       <div className="footer-wrapper">
      <footer className="site-footer">
        Copyright © KKdeveloper 2026
      </footer>
    </div>
    </div>
        
    );
}


