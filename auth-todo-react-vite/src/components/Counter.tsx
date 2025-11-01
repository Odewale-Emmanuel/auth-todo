import { useTodoContext } from "../hooks/useTodo";

export function Counter() {
  const { totalTodo, completedTodo } = useTodoContext();
  return (
    <p>
      <b>{completedTodo}</b> / {totalTodo} {totalTodo > 1 ? "todos" : "todo"}{" "}
      completed
    </p>
  );
}
