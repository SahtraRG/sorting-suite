import React from "react";
import { useDrop } from "react-dnd";

const DropTarget = ({ id, onDrop, children }) => {
  const [, drop] = useDrop({
    accept: "CARD",
    drop: (item) => onDrop(item.id, id),
  });

  return <div ref={drop}>{children}</div>;
};

export default DropTarget;
