import { Navigate } from "react-router-dom";

export default function Logout(){
  // full screen center layout

  <div className="min-h-screen flex items-center justify-center">
    <div className="login-wrap p-10 rounded shadow-lg w-96">

      <h1 className="welcome mb-5">Logout</h1>
      <p className="message-text mb-4">Thank you for visiting</p>
      
      <hr className="my-4 border-gray-300" />
      
      <p className="label-field mb-3 text-center">Log back in</p>
      <button 
        className="login-button p-2 w-full"
        onClick={() => Navigate("/Login")}
        >
          Login
        </button>
    </div>
     <p className="message-text mt-4 text-center">
        Admin use only </p>



  </div>
}