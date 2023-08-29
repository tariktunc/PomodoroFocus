import React from "react";
import Header from "./components/Header/header";
import Task from "./components/Task/task";
import Timer from "./components/Timer/timer";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <Timer />
        <Task />
      </div>
    </div>
  );
}
