import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import SingleView from "./components/SingleView";
import Form from "./components/Form";
import todoData from "./todos.json";
import "./App.css";

interface Props {
  singleView: boolean;
}

// Getting initial data from a JSON file
const initialItems: Item[] = todoData;

const App: React.FC<Props> = (props) => {
  const [items, setItems] = useState(() => {
    // Getting stored values
    const savedItems = localStorage.getItem("items");
    let parsedItems: Item[];
    if (savedItems == null) {
      parsedItems = initialItems;
    } else {
      parsedItems = JSON.parse(savedItems);
    }
    return parsedItems;
  });

  useEffect(() => {
    // Using local storage to store all items
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

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

  const addItem: AddItem = (task) => {
    const newItem = { ...task, complete: false };
    // Checking if a task with the same title already exists in our list
    const found = items.some((item) => item.title === newItem.title);
    if (found) {
      alert("A task with the same title already exits!");
    } else {
      setItems([newItem, ...items]);
    }
  };

  if (!props.singleView) {
    return (
      <>
        <TodoList items={items} toggleItem={toggleItem} />
        <Form addItem={addItem}></Form>
      </>
    );
  } else {
    return <SingleView items={items} />;
  }
};

export default App;
