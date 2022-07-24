import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../App";
import TodoSingle from "../TodoSingle";

interface Props {
  items: Item[];
}

// Styles
const List = styled.ul``;

const TodoList: React.FC<Props> = ({ items }) => {
  const toggleItem = useContext(TodoContext);
  return (
    <List>
      {items.map((item) => (
        <TodoSingle key={item.title} item={item} toggleItem={toggleItem} />
      ))}
    </List>
  );
};

export default TodoList;
