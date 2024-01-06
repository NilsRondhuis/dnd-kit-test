import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = (props) => {
  // props.id
  // JS
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        width: "100px",
        height: "50px",
        border: "1px solid black",
        touchAction: "none",
        ...style,
      }}
      {...attributes}
      {...listeners}
    >
      {props.id}{" "}
    </div>
  );
};

export default SortableItem;
