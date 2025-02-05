import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({ name, icon, tasks, status, handledelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} className="task_column_icon" />
        {name}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handledelete={handledelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
