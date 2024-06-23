import React from "react";
import {IoLocationOutline } from "react-icons/io5";



const Hero=()=>{
    return(
        <>
        <div className="w-full flex justify-center"> 
        <div className="w-full max-w-screen-xl">
          <div id="location" className=" w-full flex flex-row justify-between items-end p-4 h-16">
            <p className="font-serif text-green-600 bg-green-100 p-1 px-2 rounded-lg">Open Now</p>
            <div className="flex flex-row justify-center items-end">
            <p className="mr-1 font-serif text-gray-700">Near hostel 1 IIT, Students' Residential Zone, IIT Area, Bhilai, Raipur</p>
            <IoLocationOutline size={28} color="#374151"/>
            </div>
          </div>
        </div>
        </div>

        <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl px-3">
            <div className="max-w-screen-xl flex flex-row justify-between">
              <a className="mx-1 w-2/5"> 
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" className="w-full  h-56 object-fill rounded-xl" />
              </a>
              <a className="mx-1 w-2/5">
              <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" className="w-full h-56 rounded-xl" />
              </a>
              <a className="mx-1 w-2/5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKzAtcRykMamHfPFJP5L-6fk0-Qz2G7-eqA&s" className="w-full h-56 rounded-xl" />
              </a>
            </div>
         </div>
         </div> 
         </>
    );
}

export default Hero;