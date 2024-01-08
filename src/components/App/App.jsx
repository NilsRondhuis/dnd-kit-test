import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  rectSwappingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableItem from "../SortableItem/SortableItem";

const App = () => {
  const [languages, setLanguages] = useState([
    "JavaScript",
    "Type Script",
    "Node js",
  ]);

  const handleDragEnd = (evt) => {
    console.log("drag end called");
    const { active, over } = evt;

    console.log("active", active);
    console.log("over", over);

    if (active.id !== over.id) {
      setLanguages((prevState) => {
        const activeIndex = prevState.indexOf(active.id);
        const overIndex = prevState.indexOf(over.id);

        console.log(arrayMove(prevState, activeIndex, overIndex));

        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  return (
    <>
      <h1>Dnd kit</h1>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={languages} strategy={rectSwappingStrategy}>
          {/* {We need components that use the useSartable hook} */}
          <div style={{ display: "flex", gap: "30px" }}>
            {languages.map((lang) => (
              <SortableItem key={lang} id={lang} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
};

export default App;
