import { useNavigate } from "react-router-dom";


export default function Login (){
    const navigate = useNavigate();

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