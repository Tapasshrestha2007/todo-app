import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = (props) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={props.icon} className="task_column_icon" />
        {props.name}
      </h2>

      <TaskCard></TaskCard>
    </section>
  );
};

export default TaskColumn;
