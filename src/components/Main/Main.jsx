import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="min-h-[100vh] flex-1 relative">
      <div className="nav !p-5 flex items-center justify-between">
        <p>GemiX</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container max-w-[900px] mx-auto">
        <div className="greed">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you?</p>
        </div>

        <div className="cards">
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
    </div>
  );
};

export default Main;
