import React from "react";
import Task from "./task.module.scss";

export default function addTask() {
  return (
    <div className={Task.addTask}>
      <div>
        <i className="fa-solid fa-plus"></i>
        <p>Add Task</p>
      </div>
    </div>
  );
}
