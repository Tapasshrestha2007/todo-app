import React from "react";
import { useState } from "react";
import "./App.css";
import Taskform from "./components/Taskform";
import TaskColumn from "./components/TaskColumn";
import todoicon from "./assets/direct-hit.png";
import doingicon from "./assets/glowing-star.png";
import doneicon from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTask] = useState([]);

  const handledelete = (taskIndex) => {
    const filterTasks = tasks.filter((task, index) => index !== taskIndex);
    setTask(filterTasks);
  };

  console.log(tasks);

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
