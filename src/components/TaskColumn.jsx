import React from "react";
import todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
const TaskColumn = () => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={todo} className="task_column_icon" />
        To do
      </h2>
    </section>
  );
};

export default TaskColumn;
