import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteicon from "../assets/delete.png";

const TaskCard = ({ title, tags, handledelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handledelete(index)}>
          <img src={deleteicon} className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
