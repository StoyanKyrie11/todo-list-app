import { useEffect, useState } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import "./styles.css";

export default function App() {
  // Returns the current state as well as the function to update the current state
  const [todos, setTodos] = useState(() => {
    /* Whatever we return from the function is the default value */
    const localData = localStorage.getItem("ITEMS");
    return localData ? JSON.parse(localData) : [];
  });

  /*  Storing todo items in local storage */
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  /* Add a new item with id, title and completed props */
  const addToDo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  /* Toggle items inside of ToDoList */
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  /* Remove items from ToDoList */
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <ToDoForm onSubmit={addToDo} />
      <h1 className="header">Todo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
