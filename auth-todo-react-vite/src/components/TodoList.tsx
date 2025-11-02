import { DeleteButton } from "./DeleteButton";
import type { TodoType } from "../types/Todo";
import { useTodoContext } from "../hooks/useTodo";

export function TodoList() {
  const { todos, totalTodo, handleToggleTodo, handleDeleteTodo } =
    useTodoContext();

  return (
    <ul className="overflow-y-auto">
      {totalTodo <= 0 && (
        <li className="h-full flex items-center justify-center font-semibold text-gray-400">
          start by adding a todo
        </li>
      )}

      {todos.map((todo: TodoType, index: number) => (
        <li
          key={todo.id}
          className="group flex items-center gap-2.5 text-[14px] px-8 py-3 hover:cursor-pointer border-b border-black/[0.08]"
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span
            className={`font-semibold  ${
              todo.isCompleted ? "text-[#ccc]" : "text-black"
            }`}
          >
            {index + 1}
          </span>
          <span
            className={`mr-auto ${
              todo.isCompleted ? "line-through text-[#ccc]" : ""
            }`}
          >
            {todo.value}
          </span>
          <DeleteButton onClick={() => handleDeleteTodo(todo.id)} />{" "}
        </li>
      ))}
    </ul>
  );
}
