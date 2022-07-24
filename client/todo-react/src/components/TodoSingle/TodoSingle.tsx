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
const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
  & a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
`;
const Input = styled.input`
  position: absolute;
  top: -99999px;
  left: -99999px;

  &:checked + div {
    background-color: ${(props) => props.theme.sliderActive};
  }

  &:focus + div {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + div:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 22px;
  outline: none;
`;
const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.sliderInactive};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 3px;
    background-color: ${(props) => props.theme.body};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const TaskTitle = styled.div<Complete>`
  text-decoration: ${(item) => (item.isDone ? "line-through" : undefined)};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const TodoSingle: React.FC<Props> = ({ item, toggleItem }) => {
  return (
    <ListItem>
      <Toggle>
        <Input
          type="checkbox"
          checked={item.complete}
          onChange={() => {
            toggleItem(item);
          }}
        />
        <Slider></Slider>
      </Toggle>
      <Link to={`/task/${item.title}`}>
        <TaskTitle isDone={item.complete}>{item.title}</TaskTitle>
      </Link>
    </ListItem>
  );
};

export default TodoSingle;
