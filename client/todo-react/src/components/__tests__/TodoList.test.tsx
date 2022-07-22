import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import todoData from "../../todos.json";

const initialItems: Item[] = todoData;

it("TodoList displays a list of tasks", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<TodoList items={initialItems} />} />
      </Routes>
    </MemoryRouter>
  );

  initialItems.forEach((item) => {
    const taskTitle = screen.getByText(item.title);
    expect(taskTitle).toBeInTheDocument;
  });
  expect(asFragment()).toMatchSnapshot();
});
