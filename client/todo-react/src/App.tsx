import React from "react";
import TodoSingle from "./components/TodoSingle";
import todoData from "./todos.json";
import "./App.css";

// Getting initial data from a JSON file
const todos: Item[] = todoData;

function App() {
  return (
    <ul>
      <TodoSingle item={todos[0]} />
      <TodoSingle item={todos[2]} />
    </ul>
  );
}

export default App;
