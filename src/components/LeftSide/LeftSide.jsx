import React, { useState } from "react";
import "./leftside.css";
import { assets } from "../../assets/assets";

const LeftSide = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div className="leftSide bg-gray-100 min-h-[100vh] inline-flex flex-col justify-between">
      {/* top */}
      <div className="top">
        <img
          onClick={() => setToggle(!toggle)}
          className="block hover:cursor-pointer mb-5 min-w-[30px]"
          src={assets.menu_icon}
          alt="menu"
        />

        <div className="chat hover:cursor-pointer inline-flex items-center bg-gray-200 rounded-full gap-2">
          <img src={assets.plus_icon} alt="" />
          {toggle && <p>New Chat</p>}
        </div>
      </div>

      {/* middle */}
      {toggle && (
        <div className="middle">
          <p>Recent</p>
          <div className="recent-entry inline-flex items-center hover:bg-gray-200 w-full !p-2 rounded-full">
            <img src={assets.message_icon} alt="Message" />
            <p>What is react ...</p>
          </div>
        </div>
      )}

      {/* bottom */}

      <div className="bottom inline-flex flex-col justify-start gap-5">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="" />
          {toggle && <p>Help</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} alt="" />
          {toggle && <p>Activity</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="" />
          {toggle && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
