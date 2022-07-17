import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  item: Item;
  toggleItem: ToggleItem;
}

const Label = styled.label<Item>`
  text-decoration: ${(item) => (item.complete ? "line-through" : undefined)};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const TodoSingle: React.FC<Props> = ({ item, toggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.complete}
        onClick={() => {
          toggleItem(item);
        }}
      />
      <Link to={`/post/${item.title}`}>
        <Label {...item}>{item.title}</Label>
      </Link>
    </li>
  );
};

export default TodoSingle;
