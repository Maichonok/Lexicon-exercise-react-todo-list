import { useState } from "react";
import icon from "../../icon.svg";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "Learn Typescript and React", completed: false },
    { id: 2, text: "Build Todo List App", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="container">
      <h1>TODO App</h1>
      <form className="todo-form">
        <div className="form-wrapper">
          <input
            type="text"
            name="name"
            placeholder="Add todo item"
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <svg aria-hidden="true">
            <use xlinkHref={`${icon}#input`}></use>
          </svg>
        </div>
        <div className="form-wrapper">
          <button onClick={handleClick}>Add new task</button>
          <svg>
            <use xlinkHref={`${icon}#button`}></use>
          </svg>
        </div>
      </form>
      <ol className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ol>
    </div>
  );
};
