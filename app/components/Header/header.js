import React from "react";
import Button from "./button";
import Script from "next/script";

export default function header() {
  return (
    <div className="flex justify-between text-center items-center px-20 w-full h-20">
      <div className="flex items-center">
        <i class="fa-solid fa-heart pr-2 text-white"></i>
        <p className="text-2xl text-white">Pomodoro Focus</p>
      </div>
      <div className="flex items-center ">
        <Button text="Report" />
        <Button text="Setting" />
      </div>

      <Script
        src="https://kit.fontawesome.com/219ba811c1.js"
        crossorigin="anonymous"></Script>
    </div>
  );
}
