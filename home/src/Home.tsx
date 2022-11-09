import React from "react";
import ReactDOM from "react-dom";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin ,FaInstagramSquare} from "react-icons/fa";

import "./index.scss";

export default function Home(){
  return (
  <div className="fw-full h-screen bg-black">
    <div className="pt-10 max-w-screen-xl w-full m-0 m-auto">
    <h1 className="  text-gray-300">THIS THE HOME PAGE</h1>
    <div className="flex flex-row gap-4 mt-10">
    <div className="rounded-xl bg-gray-900 flex flex-col py-7 items-center gap-2">
       <img src="https://github.com/manuelfreitasc.png" className="w-36 h-36 rounded-full"/>
       <span className="text-gray-300">Manuel Freitasc</span>
       <p className="w-1/2 text-gray-300">I'm a web develop et ITGest company, the are a beegst company.</p>
       <div className="flex mt-7 flex-col gap-2">
        <span className="text-gray-300">My Socials</span>
        <div className="flex gap-2">
        <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-black text-gray-200 hover:mt-12 ">
          <VscGithub size={20} color="#FFF" className=" animate-pulse"/>
          gitHub
       </a>
       <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-blue-700 text-gray-200">
          <FaLinkedin size={20} color="#FFF"/>
          LinkedIn
       </a>
       <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-pink-600 text-gray-300">
          <FaInstagramSquare size={20} color="" className="text-white"/>
          Instagram
       </a>
        </div>
      
       </div>
    
    </div>
    <div className="rounded-xl bg-gray-900 flex flex-col py-7 items-center gap-2">
       <img src="https://github.com/manuelfreitasc.png" className="w-36 h-36 rounded-full"/>
       <span className="text-gray-300">Manuel Freitasc</span>
       <p className="w-1/2 text-gray-300">I'm a web develop et ITGest company, the are a beegst company.</p>
       <div className="flex mt-7 flex-col gap-2">
        <span className="text-gray-300">My Socials</span>
        <div className="flex gap-2">
        <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-black text-gray-200 hover:mt-12 ">
          <VscGithub size={20} color="#FFF" className=" animate-pulse"/>
          gitHub
       </a>
       <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-blue-700 text-gray-200">
          <FaLinkedin size={20} color="#FFF"/>
          LinkedIn
       </a>
       <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-pink-600 text-gray-300">
          <FaInstagramSquare size={20} color="" className="text-white"/>
          Instagram
       </a>
        </div>
      
       </div>
    
    </div>
    <div className="rounded-xl bg-gray-900 flex flex-col py-7 items-center gap-2">
       <img src="https://github.com/manuelfreitasc.png" className="w-36 h-36 rounded-full"/>
       <span className="text-gray-300">Manuel Freitasc</span>
       <p className="w-1/2 text-gray-300">I'm a web develop et ITGest company, the are a beegst company.</p>
       <div className="flex mt-7 flex-col gap-2">
        <span className="text-gray-300">My Socials</span>
        <div className="flex gap-2">
        <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-black text-gray-200 hover:mt-12 ">
          <VscGithub size={20} color="#FFF" className=" animate-pulse"/>
          gitHub
       </a>
       <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-blue-700 text-gray-200">
          <FaLinkedin size={20} color="#FFF"/>
          LinkedIn
       </a>
       <a href="" className="p-1 rounded-lg flex items-center gap-2 bg-pink-600 text-gray-300">
          <FaInstagramSquare size={20} color="" className="text-white"/>
          Instagram
       </a>
        </div>
      
       </div>
    
    </div>
    </div>
    </div>
  </div>
);}
