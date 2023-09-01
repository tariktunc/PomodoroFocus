import React from "react";
import Script from "next/script";

export default function header() {
  return (
    <div className="flex justify-between text-center items-center px-20 w-full h-20">
      <div className="flex items-center">
        <i class="fa-solid fa-heart pr-2 text-white"></i>
        <p className="text-2xl text-white">Pomodoro Focus</p>
      </div>

      <div className="flex items-center ">
        <p className="bg-[#C86D6D] hover:bg-white-100 hover:bg-blue-100 transition-all w-20 h-6 m-1 text-white">
          Report
        </p>
        <p className="bg-[#C86D6D] hover:bg-white-100 hover:bg-blue-100 transition-all w-20 h-6 m-1 text-white">
          Settings
        </p>
      </div>

      <Script
        src="https://kit.fontawesome.com/219ba811c1.js"
        crossorigin="anonymous"></Script>
    </div>
  );
}
