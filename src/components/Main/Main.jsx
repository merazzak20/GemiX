import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="min-h-[100vh] flex-1 relative">
      <div className="nav !p-5 flex items-center justify-between">
        <p>GemiX</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="grrd">
        <p>
          <span>Hello, Dev.</span>
        </p>
        <p>How can I help you?</p>
      </div>

      <div className="cards"></div>
    </div>
  );
};

export default Main;
