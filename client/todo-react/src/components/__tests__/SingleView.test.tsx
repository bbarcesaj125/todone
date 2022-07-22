import React from "react";
import { render, screen } from "@testing-library/react";
import SingleView from "../SingleView";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import todoData from "../../todos.json";

const initialItems: Item[] = todoData;

/* const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "Github",
  }),
  useNavigate: () => mockedUseNavigate,
}));

it("renders correctly", () => {
  const tree = renderer
    .create(<SingleView items={initialItems}></SingleView>)
    .toJSON();
  expect(tree).toMatchSnapshot();
}); */

it("SingleView displays information about a single task", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/task/Reading"]}>
      <Routes>
        <Route
          path="/task/:id"
          element={<SingleView items={initialItems}></SingleView>}
        />
      </Routes>
    </MemoryRouter>
  );

  const taskTitle = screen.getByText("Reading");
  expect(taskTitle).toBeInTheDocument;
  expect(asFragment()).toMatchSnapshot();
});
