import React, { useEffect, useState } from "react";
import NewTask from "./newTask";
import Task from "./task";
import EndTask from "./Endtask";
import AddTask from "./addTask";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "@/Redux/Slices/taskSlice";
import TaskCss from "./task.module.scss";

export default function TodoList() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dataAnalysis);
  const [isView, setIsView] = useState(false);

  const openNewTask = () => {
    setIsView(!isView);
  };

  const removeData = (itemKey) => {
    dispatch(deleteData(itemKey));
  };

  return (
    <div className={TaskCss.todoList}>
      {data.length > 0 ? (
        data.map((todo) =>
          todo.currentSession < todo.totalSessions ? (
            <Task
              taskId={todo.key}
              key={todo.key}
              text={todo.text}
              sessionCount={todo.totalSessions}
              activeSession={todo.currentSession}
              //** deleteItem fonksiyonu redux uzerinden bagli oldugu key bakilarak silme islemi calisiyor. */
              deleteItem={() => removeData(todo.key)}
            />
          ) : (
            <EndTask
              key={todo.key}
              text={todo.text}
              sessionCount={todo.totalSessions}
              activeSession={todo.currentSession}
              //** deleteItem fonksiyonu redux uzerinden bagli oldugu key bakilarak silme islemi calisiyor. */
              deleteItem={() => removeData(todo.key)}
            />
          )
        )
      ) : (
        <></>
      )}

      {/* Open The New Task Components */}
      <AddTask onAdd={openNewTask} />

      {isView ? (
        <NewTask savesTask={openNewTask} cancelTask={openNewTask} />
      ) : null}
    </div>
  );
}
