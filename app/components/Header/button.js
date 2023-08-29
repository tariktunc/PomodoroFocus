import React from "react";

export default function button(props) {
  return (
    <div>
      <p className="bg-[#C86D6D] hover:bg-white-100 hover:bg-blue-100 transition-all w-20 h-6 m-1 text-white">
        {props.text}
      </p>
    </div>
  );
}
