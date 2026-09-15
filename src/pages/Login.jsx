import { useNavigate } from "react-router-dom";

//Firestore functions used to check if the user exists in the database.
import {collection, query, where, getDocs} from "firebase/firestore";
import{db} from "../firebase"; //filebase config file
import { useState } from "react";

export default function Login (){
    const navigate = useNavigate();

    //Stores what the user types
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    // checks database in the backend for login details
    async function handleLogin() {
        //check firestore for a matching email and password
        const q = query(
            collection(db, "users"),
            where ("email", "==", email),
            where ("password", "==", password)
        ); 
        
        // runs the query and gets the result
        const snapshot = await getDocs(q);

        // if firestore found a mathing user > login success
        if (snapshot.docs.length > 0 ){
            navigate("/Dashboard");
        } else {
            // if no match > login fails
            alert("Incorrect email or password");
        }
    }

    return(
        <div className="min-h-screen flex items-center justify-center ">
            <div className="login-wrap p-10 rounded shadow-lg w-96">
                <h1 className="welcome mb-5"> Welcome Back</h1>

                <label className="label-field mb-2">Username</label>
                <input className="input-field mb-4 w-full p-2"/>

                <label className="label-field mb-2">Password</label>
                <input  type="type" className="input-field mb-4 w-full p-2"/>

                <div className="flex justify-between items-center mb-4">
                    <a className="text-sm text-blue-500">Forgot Password? </a>

                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox"/> Remember Me 
                    </label>
                </div>
                <button className="login-button p-2" onClick={()=> navigate("/Dashboard")}>
                    Login
                </button> 
                <p className="message-text mt-4">Admin user only</p>
            </div>
        </div>
    );
}