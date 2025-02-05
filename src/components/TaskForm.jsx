import React, { useState } from "react";
import "./Taskform.css";
import Tag from "./Tag";

const Taskform = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((t) => t === tag);
  };

  const selecttags = (tag) => {
    if (taskData.tags.some((t) => t === tag)) {
      const filterTags = taskData.tags.filter((t) => t !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({ task: "", status: "todo", tags: [] });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          value={taskData.task}
          name="task"
          type="text"
          className="task_input"
          placeholder="Enter your task"
          onChange={handlechange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              name="HTML"
              selectTag={selecttags}
              selected={checkTag("HTML")}
            />
            <Tag name="CSS" selectTag={selecttags} selected={checkTag("CSS")} />
            <Tag
              name="JAVASCRIPT"
              selectTag={selecttags}
              selected={checkTag("JAVASCRIPT")}
            />
            <Tag
              name="REACT"
              selectTag={selecttags}
              selected={checkTag("REACT")}
            />
          </div>
          <div>
            <select
              value={taskData.status}
              className="task_status"
              onChange={handlechange}
              name="status"
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Taskform;
