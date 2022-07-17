import React from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Props {
  items: Item[];
}
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
    <article>
      <h1>{items[index].title}</h1>
      <p>{items[index].description}</p>
      <br />
      <button onClick={handleClick}>Go back</button>
    </article>
  );
};

export default SingleView;
