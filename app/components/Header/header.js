"use client";
import React, { useState } from "react";
import Script from "next/script";

export default function Header(props) {
  const [pomoTime, setPomoTime] = useState({
    pm: 25,
    sb: 5,
    lb: 10,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPomoTime((prevPomoTime) => ({
      ...prevPomoTime,
      [id]: Number(value),
    }));
  };

  return (
    <div className="flex justify-between text-center items-center px-20 w-full h-20">
      <div className="flex items-center">
        <i className="fa-solid fa-heart pr-2 text-white"></i>
        <p className="text-2xl text-white">Study Timeer</p>
      </div>

      <div className="flex items-center ">
        <p className="bg-[#C86D6D] hover:bg-white-100 hover:bg-blue-100 transition-all w-20 h-6 m-1 text-white">
          Report
        </p>
        <p className="bg-[#C86D6D] hover:bg-white-100 hover:bg-blue-100 transition-all w-20 h-6 m-1 text-white">
          Settings
        </p>
        <input
          onChange={(e) => handleChange(e)}
          type="number"
          id="pm"
          defaultValue={pomoTime.pm}
          min="0"
          max="99"
        />

        <input
          onChange={handleChange}
          type="number"
          id="sb"
          defaultValue={pomoTime.sb}
          min="0"
          max="99"
        />
        <input
          onChange={handleChange}
          type="number"
          id="lb"
          defaultValue={pomoTime.lb}
          min="0"
          max="99"
        />
      </div>

      <Script
        src="https://kit.fontawesome.com/219ba811c1.js"
        crossorigin="anonymous"
        defer></Script>
    </div>
  );
}
