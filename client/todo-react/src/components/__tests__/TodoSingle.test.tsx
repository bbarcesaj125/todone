import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoSingle from "../TodoSingle";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import todoData from "../../todos.json";

const initialItems: Item[] = todoData;

const mockToggleItem = jest.fn();

it("TodoSingle gets checked for the task 'Reading'", () => {
  render(
    <MemoryRouter initialEntries={["/post/Reading"]}>
      <Routes>
        <Route
          path="/post/:id"
          element={
            <TodoSingle item={initialItems[0]} toggleItem={mockToggleItem} />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(mockToggleItem).toBeCalledTimes(1);
  expect(checkbox).toHaveProperty("checked", true);
});
