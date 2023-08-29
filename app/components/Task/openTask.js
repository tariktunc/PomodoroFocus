import React from "react";
import Task from "./task.module.scss";

export default function openTask() {
  return (
    <div className={Task.openTask}>
      <div className={Task.text}>
        <input placeholder="What are you working on?" />
        <p>This Pomodoros</p>
      </div>

      <div className={Task.addValue}>
        <input type="number" value={"1"} />
        <button>
          <i class="fa-solid fa-up-long"></i>
        </button>
        <button>
          <i class="fa-solid fa-down-long"></i>
        </button>
      </div>

      <div className={Task.saveOrcancel}>
        <button className={Task.cancel}>Cancel</button>
        <button className={Task.save}>Save</button>
      </div>
    </div>
  );
}
