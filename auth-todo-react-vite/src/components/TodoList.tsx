import { DeleteButton } from "./DeleteButton";
import { useState } from "react";

type Todo = {
  id: string;
  value: string;
  isCompleted: boolean;
};

const Todos: Todo[] = [
  {
    id: crypto.randomUUID(),
    value: "get a house",
    isCompleted: true,
  },
  {
    id: crypto.randomUUID(),
    value: "own a PJ",
    isCompleted: true,
  },
  {
    id: crypto.randomUUID(),
    value: "own a Yatch",
    isCompleted: false,
  },
];

export function TodoList() {
  const [todos, setTodos] = useState(Todos);

  function handleDelete(id: string): void {
    setTodos((prevTodo) => [...prevTodo].filter((todo) => todo.id !== id));
  }

  function handleTodoCompletionState(id: string): void {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between gap-1.5 text-[14px] px-8 py-3 hover:cursor-pointer border-b border-black/[0.08]"
          onClick={() => handleTodoCompletionState(todo.id)}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.value}
          </span>
          <DeleteButton onClick={() => handleDelete(todo.id)} />{" "}
        </li>
      ))}
    </ul>
  );
}
