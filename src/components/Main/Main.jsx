import React from "react";
import { assets } from "../../assets/assets";
import "./main.css";

const Main = () => {
  return (
    <div className="min-h-[100vh] flex-1 relative !p-5 !pb-10 flex flex-col justify-between">
      <div className="nav flex items-center justify-between">
        <p className="text-2xl font-bold">GemiX</p>
        <img className="rounded-full w-[70px]" src={assets.user_icon} alt="" />
      </div>

      <div className="main-container max-w-[900px] mx-auto">
        <div className="greed grid text-5xl text-gray-300 font-semi-bold">
          <p>
            <span className="bg-gradient-to-r from-blue-700 via-green-400 to-purple-400 inline-block text-transparent bg-clip-text">
              Hello, Abdur.
            </span>
          </p>
          <p>How can I help you?</p>
        </div>

        <div className="cards hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-20">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summerize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="main-bottom">
        <div className="bg-[#f0f4f9] border border-gray-800/10 shadow-sm max-w-[100%] lg:max-w-[70%] mx-auto p-3 pr-5 rounded-md flex  md:flex-row items-center justify-between gap-3">
          <div className="search-box w-full">
            <input
              type="text"
              placeholder="Enter your prompt here"
              className="h-full bg-transparent w-full pl-6 p-3 placeholder-gray-500 outline-none rounded-2xl"
              required
            />
          </div>
          <div className="flex gap-2 my-4 ">
            <img
              className="w-[20px] md:w-[30px] cursor-pointer"
              src={assets.gallery_icon}
              alt=""
            />
            <img
              className="w-[20px] md:w-[30px] cursor-pointer"
              src={assets.mic_icon}
              alt=""
            />
            <img
              className="w-[20px] md:w-[30px] cursor-pointer"
              src={assets.send_icon}
              alt=""
            />
          </div>
        </div>
        {/* <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
          quidem in explicabo exercitationem tempora natus consequuntur,
          corporis recusandae distinctio?
        </p> */}
      </div>
    </div>
  );
};

export default Main;
