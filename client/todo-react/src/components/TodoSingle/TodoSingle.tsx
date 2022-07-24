import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  item: Item;
  toggleItem: ToggleItem;
}
interface Complete {
  isDone: boolean;
}

// Styles
const ListItem = styled.li``;
const Input = styled.input``;
const Label = styled.label<Complete>`
  text-decoration: ${(item) => (item.isDone ? "line-through" : undefined)};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const TodoSingle: React.FC<Props> = ({ item, toggleItem }) => {
  return (
    <ListItem>
      <Input
        type="checkbox"
        checked={item.complete}
        onChange={() => {
          toggleItem(item);
        }}
      />
      <Link to={`/task/${item.title}`}>
        <Label isDone={item.complete}>{item.title}</Label>
      </Link>
    </ListItem>
  );
};

export default TodoSingle;
