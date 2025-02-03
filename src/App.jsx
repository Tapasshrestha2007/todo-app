import React from "react";
import "./App.css";
import Taskform from "./components/Taskform";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  return (
    <div className="app">
      <Taskform></Taskform>
      <main className="app_main">
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
      </main>
    </div>
  );
};

export default App;
