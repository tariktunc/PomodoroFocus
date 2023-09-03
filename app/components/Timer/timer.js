"use client";
import React, { useState, useEffect } from "react";
import TimerCss from "./timer.module.scss";

export default function TimerMain(props) {
  const [activeButton, setActiveButton] = useState("pomodoro");
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [pause, setPause] = useState("Start");
  const [intervalId, setIntervalId] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (activeButton === "pomodoro") {
      document.body.style.backgroundColor = "#ba4949";
    } else if (activeButton === "shortBreak") {
      document.body.style.backgroundColor = "#38858A";
    } else if (activeButton === "longBreak") {
      document.body.style.backgroundColor = "#7D53A2";
    } else {
      document.body.style.backgroundColor = "";
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [activeButton]);

  const handleClickButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleStart = () => {
    const totalSeconds = minutes * 60;
    let remainingSeconds = totalSeconds;

    switch (pause) {
      case "Start":
        setPause("Pause");
        startTimer(remainingSeconds);
        break;
      case "Pause":
        setPause("Resume");
        clearInterval(intervalId);
        break;
      case "Resume":
        setPause("Pause");
        startTimer(minutes * 60 + seconds - 1);
        break;
      default:
        break;
    }
  };

  const startTimer = (remainingSeconds) => {
    const interval = setInterval(() => {
      if (remainingSeconds <= 0) {
        clearInterval(interval);
      } else {
        setIsPaused(remainingSeconds);
        const newMinutes = Math.floor(remainingSeconds / 60);
        const newSeconds = remainingSeconds % 60;
        setMinutes(newMinutes);
        setSeconds(newSeconds);
        remainingSeconds -= 1;
        console.log(remainingSeconds);
      }
    }, 1000);
    setIntervalId(interval);
  };

  return (
    <div className={TimerCss.container}>
      <div className={TimerCss.timer}>
        <div className={TimerCss.button}>
          <button
            className={activeButton === "pomodoro" ? "buttonActive" : ""}
            onClick={() => handleClickButton("pomodoro")}>
            {props.pomodoro}
          </button>
          <button
            className={activeButton === "shortBreak" ? "buttonActive" : ""}
            onClick={() => handleClickButton("shortBreak")}>
            {props.shortBreak}
          </button>
          <button
            className={activeButton === "longBreak" ? "buttonActive" : ""}
            onClick={() => handleClickButton("longBreak")}>
            {props.longBreak}
          </button>
        </div>

        <div className={TimerCss.time}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>

        <div className={TimerCss.start}>
          <div>
            <button onClick={handleStart}>{pause}</button>
          </div>
        </div>
      </div>

      <div className={TimerCss.level}>{props.level}</div>
      <div className={TimerCss.tasksLevel}>{props.taskLevel}</div>
    </div>
  );
}
