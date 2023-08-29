import React from "react";
import Task from "./task.module.scss";

export default function task() {
  return (
    <div className="text-center h-full">
      <div className={Task.header}>
        <h1>Tasks</h1>
        <div>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className={Task.tasks}>
        <div className={Task.headerOrTask}>
          <div className={Task.tasksHeader}>
            <i class="fa-solid fa-check"></i>
            <p>1</p>
          </div>
          <div className={Task.task}>
            <p>1/1</p>
            <div>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
