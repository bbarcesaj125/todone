import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../App";
import TodoSingle from "../TodoSingle";

interface Props {
  items: Item[];
}
const TodoList: React.FC<Props> = ({ items }) => {
  const toggleItem = useContext(TodoContext);
  return (
    <ul>
      {items.map((item) => (
        <TodoSingle key={item.title} item={item} toggleItem={toggleItem} />
      ))}
    </ul>
  );
};

export default TodoList;
