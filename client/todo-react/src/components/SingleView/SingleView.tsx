import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  items: Item[];
}
// Styles
const Article = styled.article``;
const Heading = styled.h1``;
const P = styled.p``;
const Button = styled.button``;

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
