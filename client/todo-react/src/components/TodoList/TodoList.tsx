import React from "react";
import TodoSingle from "../TodoSingle";

interface Props {
  items: Item[];
  toggleItem: ToggleItem;
}
const TodoList: React.FC<Props> = ({ items, toggleItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoSingle key={item.title} item={item} toggleItem={toggleItem} />
      ))}
    </ul>
  );
};

export default TodoList;
