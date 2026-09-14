import { useState } from "react";

export default function Settings(){
    //Store uploaded profile photo
    const[photo, setPhoto]= useState(null);

    //when users uploads a photo > create a preview URl
    const handlePhotoUpload= (e) => {
        const file = e.target.files[0]; //get the first selected file
        if (file){
            setPhoto(URL.createObjectURL(file))// show preview
        }
    };

    return(

        //
        <div className="space-y-10 px-4">

            {/* page title*/}
            <h1 className="project-title">Settings</h1>

            {/* background section*/}
            <div className="dash-bg p-6 rounded-xl">
            {/* white card*/}
                <div className="bg-white p-6 rounded-xl shadow">
                    {/* card title*/}
                     <h2 className="text-2xl font-semibold text-[#2E2A3B] mb-6 text-center">
                        Settings
                     </h2>
                    {/*Profile photo section*/}
                    <div className=" mb-8 text-center">
                        {/* section title*/}
                         <p className="font-semibold text-[#2E2A3B] mb-3">Profile Photo</p>

                         {/*round photo review box*/}
                         <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border shadow">
                            {photo ? (
                                //show upload photo
                                <img src={photo} className="w-full h-full object-cover"/>
                            ):(
                                //placeholder if no photo yet
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[#2E2A3B]">
                                    No image
                                </div>
                            )}
                         </div>
                         {/*upload button*/}
                         <label className="mt-4 inline-block bg-[#6C63FF] text-white px-4 py-2 rounded-lg cursor-pointer shadow">
                           Upload Photo 
                           <input 
                           type="file" 
                           accept="image/*" 
                           className="hidden" 
                           onChange={handlePhotoUpload}/>
                         </label>
                    </div>

                    {/*Email section*/}
                    <div className="mb-6">
                        <p className="font-semibold text-[#2E2A3B] mb-2">Email</p>
                    {/*email input*/}
                        <input 
                        type="email" 
                        placeholder="Email"
                        className="p-3 rounded-lg bg-white border w-full"/>
                    </div>
                    {/*Password section*/}
                    <div className="mb-6">
                        <p className="font-semibold text-[#2E2A3B] mb-2">Password</p>
                    {/*email input*/}
                        {/*old password input*/}
                        <input 
                        type="password" 
                        placeholder="Old Password"
                        className="p-3 rounded-lg bg-white border w-full mb-3"/>
                        
                        {/*New password input*/}
                        <input 
                        type="password" 
                        placeholder="New Password"
                        className="p-3 rounded-lg bg-white border w-full mb-3"/>
                        
                        {/*Repeat password input*/}
                        <input 
                        type="password" 
                        placeholder="Repeat Password"
                        className="p-3 rounded-lg bg-white border w-full mb-3"/>
                    </div>
                    
                    {/*Social media section*/}
                    <div className="mb-6">
                        <p className="font-semibold text-[#2E2A3B] mb-2">Social media</p>
                    
                    {/*Github*/}
                        <input 
                        type="text" 
                        placeholder="Github"
                        className="p-3 rounded-lg bg-white border w-full mb-3"/>
                    {/*Linkden*/}
                        <input 
                        type="text" 
                        placeholder="LinkedIn"
                        className="p-3 rounded-lg bg-white border w-full mb-3"/>
                    
                    </div>
                     {/* SAVE BUTTON */}
                    <button className="bg-[#00A8A8] text-white px-6 py-2 rounded-lg block mx-auto shadow">
                        Save
                    </button>


                </div>

            </div>
            
        </div>
    );
}