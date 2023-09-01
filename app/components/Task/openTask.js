import React from "react";
import Task from "./task.module.scss";

export default function OpenTask(props) {
  return (
    <div className={Task.openTask}>
      {/* This pomodoro INPUT */}

      <div className={Task.text}>
        <input placeholder="What are you working on?" />
        <p>This Pomodoros</p>
      </div>

      {/* NUMBERS UP AND DOWN */}
      <div className={Task.addValue}>
        <input type="number" value={props.openTaskValue} />
        {/* UP ARROW */}
        <button>
          <i class="fa-solid fa-up-long"></i>
        </button>
        {/* DOWN ARROW */}
        <button>
          <i class="fa-solid fa-down-long"></i>
        </button>
      </div>

      {/* DELETE OR SAVE AND CANCEL */}
      <div className={Task.saveOrcancel}>
        <button className={Task.delete}>{props.delete}</button>
        <div>
          <button className={Task.cancel}>{props.cancel}</button>
          <button className={Task.save}>{props.save}</button>
        </div>
      </div>
    </div>
  );
}
