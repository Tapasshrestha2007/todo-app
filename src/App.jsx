import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Taskform from "./components/Taskform";
import TaskColumn from "./components/TaskColumn";
import todoicon from "./assets/direct-hit.png";
import doingicon from "./assets/glowing-star.png";
import doneicon from "./assets/check-mark-button.png";

const App = () => {
  const oldTasks = localStorage.getItem("tasks");
  const [tasks, setTask] = useState(JSON.parse(oldTasks) || []);

  const handledelete = (taskIndex) => {
    const filterTasks = tasks.filter((task, index) => index !== taskIndex);
    setTask(filterTasks);
  };

  console.log(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <Taskform setTasks={setTask}></Taskform>
      <main className="app_main">
        <TaskColumn
          name="To Do"
          handledelete={handledelete}
          icon={todoicon}
          tasks={tasks}
          status="todo"
        />
        <TaskColumn
          name="Doing"
          icon={doingicon}
          tasks={tasks}
          status="doing"
          handledelete={handledelete}
        />
        <TaskColumn
          name="Done"
          icon={doneicon}
          handledelete={handledelete}
          tasks={tasks}
          status="done"
        />
      </main>
    </div>
  );
};

export default App;
