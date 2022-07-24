import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  items: Item[];
}
// Styles
const Article = styled.article``;
const Heading = styled.h2``;
const P = styled.p``;
const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.switchBackground};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  cursor: pointer;
`;

const SingleView: React.FC<Props> = ({ items }) => {
  const { id } = useParams();

  const index = items.findIndex((object) => {
    return object.title === id;
  });

  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <Article>
      <Heading>{items[index].title}</Heading>
      <P>{items[index].description}</P>
      <br />
      <Button onClick={handleClick}>Go back</Button>
    </Article>
  );
};

export default SingleView;
