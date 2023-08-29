"use client";
import React, { useEffect, useState } from "react";
import Timer from "./timer.module.scss";

export default function timer() {
  const [time, setTime] = useState("10:00");
  const [isPomodoro, setIsPomodoro] = useState(true);
  const [isShortBreak, setIsShortBreak] = useState(false);
  const [isLongBreak, setIsLongBreak] = useState(false);

  return (
    <div className={Timer.container}>
      <div className={Timer.timer}>
        <div className={Timer.button}>
          <button className={Timer.buttonActive}>Pomodoro</button>
          <button>Short Break</button>
          <button>Long Break</button>
        </div>

        <div className={Timer.time}>{time}</div>

        <div className={Timer.start}>
          <button>START</button>
        </div>
      </div>
      <div className={Timer.level}>#1</div>
      <div className={Timer.tasksLevel}>1</div>
    </div>
  );
}
