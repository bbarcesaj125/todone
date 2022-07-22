import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Form";

const mockedAddItem = jest.fn();

describe("Form", () => {
  const { asFragment } = render(<Form addItem={mockedAddItem}></Form>);
  it("Form responds correctly to events", () => {
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox", { name: /title/i });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "Title test" } });
    expect(mockedAddItem).toBeCalledTimes(1);

    const titleInput = screen.getByDisplayValue("Title test");
    expect(titleInput).toBeInTheDocument;
  });

  it("Form renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
