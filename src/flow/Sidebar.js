import React from "react";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the left.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode"
        id="2"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "")}
        draggable
      >
        Output Node
      </div>

      <div
        className="dndnode textUpdater"
        onDragStart={(event) => onDragStart(event, "textUpdater")}
        draggable
      >
        text
      </div>
    </aside>
  );
};

export default Sidebar;
