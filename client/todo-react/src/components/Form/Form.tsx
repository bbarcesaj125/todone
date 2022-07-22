import React from "react";
import { useState } from "react";

interface Props {
  addItem: AddItem;
}

const Form: React.FC<Props> = ({ addItem }) => {
  const initialValues = {
    title: "",
    description: "",
  };
  const [inputs, setInputs] = useState(initialValues);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItem(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label>Please enter the task&apos;s title:</label>
      </h2>

      <input
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        required
        placeholder="Title"
        aria-label="title"
      />
      <h2>
        <label>Please enter the task&apos;s description (optional):</label>
      </h2>
      <textarea
        name="description"
        value={inputs.description}
        onChange={handleChange}
        placeholder="Description"
        aria-label="description"
      ></textarea>

      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
