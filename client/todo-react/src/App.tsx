import React from "react";
import { useState, useEffect, createContext } from "react";
import useEffectsFirstRender from "./Hooks/useEffectsFirstRender";
import TodoList from "./components/TodoList";
import SingleView from "./components/SingleView";
import Form from "./components/Form";
import todoData from "./todos.json";
import "./App.css";

// Global Env. variables
const SERVER: boolean = process.env.REACT_APP_SERVER == "true";

interface Props {
  singleView: boolean;
}

// Getting initial data from a JSON file
const initialItems: Item[] = todoData;
// Creating a context to avoid props drilling
export const TodoContext = createContext<ToggleItem>({} as ToggleItem);

const App: React.FC<Props> = (props) => {
  // Initial data (Offline mode)
  const savedItems = localStorage.getItem("items");
  let parsedItems: Item[];
  if (savedItems == null) {
    parsedItems = initialItems;
  } else {
    parsedItems = JSON.parse(savedItems);
  }

  const [items, setItems] = useState<Item[]>(parsedItems);
  const [error, setError] = useState(null);
  const [save, setSave] = useState(false);

  // If the application is in server mode then we fetch data directly from the server
  if (SERVER == true) {
    useEffect(() => {
      fetch(`http://localhost:7000/api/tasks`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setItems(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        });
    }, []);
  }

  // Using either local storage or POSTGRESQL to store all items
  useEffectsFirstRender(() => {
    if (SERVER === true) {
      fetch("http://localhost:7000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(items),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [save]);

  // Toggling function
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
    setSave(true);
  };

  const addItem: AddItem = (task) => {
    const newItem = { ...task, complete: false };
    // Checking if a task with the same title already exists in our list
    const found = items.some((item) => item.title === newItem.title);
    if (found) {
      alert("A task with the same title already exists!");
    } else {
      setItems([newItem, ...items]);
      setSave(true);
    }
  };

  return (
    <>
      {props.singleView && <SingleView items={items} />}
      {!props.singleView && (
        <div>
          <Form addItem={addItem}></Form>
          <TodoContext.Provider value={toggleItem}>
            <TodoList items={items} />
          </TodoContext.Provider>
          {error && <div>{`Server communication error - ${error}`}</div>}
        </div>
      )}
    </>
  );
};

export default App;
