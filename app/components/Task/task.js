import React from "react";
import Task from "./task.module.scss";

import AddTask from "./addTask";
import OpenTask from "./openTask";

export default function task(props) {
  return (
    <div className="text-center h-full w-[600px] ">
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
            <p>{props.name}</p>
          </div>
          <div className={Task.task}>
            <p>1/1</p>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      {/* ADD TASK */}
      <div className="">
        <AddTask className={Task.addTasks} />
      </div>
      {/* ADD OPEN TASK */}
      <div className="">
        <OpenTask />
      </div>
    </div>
  );
}
