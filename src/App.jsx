import React from "react";
import { useState } from "react";
import "./App.css";
import Taskform from "./components/Taskform";
import TaskColumn from "./components/TaskColumn";
import todoicon from "./assets/direct-hit.png";
import doingicon from "./assets/glowing-star.png";
import doneicon from "./assets/check-mark-button.png";

const App = () => {
  const [task, setTask] = useState([]);
  console.log(task);
  return (
    <div className="app">
      <Taskform setTasks={setTask}></Taskform>
      <main className="app_main">
        <TaskColumn name="To Do" icon={todoicon} task={task} status="todo" />
        <TaskColumn name="Doing" icon={doingicon} task={task} status="doing" />
        <TaskColumn name="Done" icon={doneicon} task={task} status="done" />
      </main>
    </div>
  );
};

export default App;
