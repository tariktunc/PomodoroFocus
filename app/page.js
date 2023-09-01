import React from "react";
import Header from "./components/Header/header";
import TimerMain from "./components/Timer/timerMain";

import AddTask from "./components/Task/addTask";
import OpenTask from "./components/Task/openTask";
import BeforeTask from "./components/Task/beforeTask";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <TimerMain
          pomodoro="Pomodoro"
          shortBreak="Short Break"
          longBreak="Long Break"
          start="Start"
          remainingTime="10:00"
          level="#1"
          taskLevel="1"
        />

        {/* ADD TASK */}
        <div className="text-center h-full w-[600px] ">
          <BeforeTask pomoNumber={"1/4"} name={1} />
          <AddTask />
          <OpenTask
            openTaskValue={1}
            delete="Delete"
            save="Save"
            cancel="Cancel"
          />
        </div>
      </div>
    </div>
  );
}
