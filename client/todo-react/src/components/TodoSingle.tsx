import React from "react";
import styled from "styled-components";

interface Props {
  item: Item;
}

const Label = styled.label<Item>`
  text-decoration: ${(item) => (item.complete ? "line-through" : undefined)};
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const TodoSingle: React.FC<Props> = ({ item }) => {
  return (
    <li>
      <input type="checkbox" checked={item.complete} />
      <Label {...item}>{item.title}</Label>
    </li>
  );
};

export default TodoSingle;
