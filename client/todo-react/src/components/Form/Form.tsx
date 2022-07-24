import React from "react";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  addItem: AddItem;
}

// Styles
const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2``;

const Label = styled.label``;

const Input = styled.input``;

const TextArea = styled.textarea``;

const Button = styled.button``;

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
    <FormElement onSubmit={handleSubmit}>
      <Heading>
        <Label>Please enter the task&apos;s title:</Label>
      </Heading>

      <Input
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        required
        placeholder="Title"
        aria-label="title"
      />
      <Heading>
        <Label>Please enter the task&apos;s description (optional):</Label>
      </Heading>
      <TextArea
        name="description"
        value={inputs.description}
        onChange={handleChange}
        placeholder="Description"
        aria-label="description"
      ></TextArea>

      <Button type="submit">Add</Button>
    </FormElement>
  );
};

export default Form;
