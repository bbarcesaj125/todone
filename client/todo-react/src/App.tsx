import React from "react";
import { useState } from "react";
import TodoList from "./components/TodoList";
import todoData from "./todos.json";
import "./App.css";

// Getting initial data from a JSON file
const initialItems: Item[] = todoData;

function App() {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (currentItem: Item) => {
    // Getting the index of the current object
    const index = items.findIndex((object) => {
      return object === currentItem;
    });

    let updatedItems = items.map((item) => {
      if (item === currentItem) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });

    // If the current task is marked as "done" the we move it to the last position of the list
    if (updatedItems[index].complete === true) {
      const itemToReplace = updatedItems.splice(index, 1);
      updatedItems = updatedItems.concat(itemToReplace);
    }
    setItems(updatedItems);
  };

  return <TodoList items={items} toggleItem={toggleItem} />;
}

export default App;
