"use client";
import React, { useEffect, useState } from "react";
import TimerCss from "./timer.module.scss";
import TimerMain from "./timerMain";

export default function Timer(props) {
  return (
    <div className={TimerCss.container}>
      <TimerMain
        pomodoro="Pomodoro"
        shortBreak="Short Break"
        longBreak="Long Break"
        start="Start"
        remainingTime="10:00"
      />
      <div className={TimerCss.level}>#1</div>
      <div className={TimerCss.tasksLevel}>{props.name}</div>
    </div>
  );
}
