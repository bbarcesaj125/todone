import React from "react";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  addItem: AddItem;
}

interface LabelProps {
  for: string;
}

// Styles
const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2``;

const Label = styled.label<LabelProps>``;

const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.switchBackground};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.switchBackground};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin: 10px;
  background-color: ${(props) => props.theme.switchBackground};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  cursor: pointer;
`;

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
    // Form reset
    setInputs(initialValues);
  };
  return (
    <FormElement onSubmit={handleSubmit}>
      <Heading>
        <Label for="title">Please enter the task&apos;s title:</Label>
      </Heading>

      <Input
        id="title"
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        required
        placeholder="Title"
        aria-label="title"
      />
      <Heading>
        <Label for="description">
          Please enter the task&apos;s description (optional):
        </Label>
      </Heading>
      <TextArea
        id="description"
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
