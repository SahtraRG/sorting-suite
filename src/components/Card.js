import { useDrag } from "react-dnd";

const Card = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag({
    item: () => ({ id }),
    type: "CARD",
  });

  return (
    <div
      className="card"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        padding: "10px",
        margin: "10px",
      }}
    >
      {text}
    </div>
  );
};
export default Card;
