import React from "react";
import TaskCss from "./task.module.scss";

export default function AddTask() {
  return (
    <div className={TaskCss.addTask}>
      <div>
        <i className="fa-solid fa-plus"></i>
        <p>Add Task</p>
      </div>
    </div>
  );
}
