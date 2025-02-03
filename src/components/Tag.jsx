import React from "react";
import "./Tag.css";

const Tag = (props) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JAVASCRIPT: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={props.selected ? tagStyle[props.name] : tagStyle.default}
      onClick={() => {
        props.selectTag(props.name);
      }}
    >
      {props.name}
    </button>
  );
};

export default Tag;
