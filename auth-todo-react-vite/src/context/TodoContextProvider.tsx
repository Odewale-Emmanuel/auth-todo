import { useState, createContext } from "react";
import type { TodoType } from "../types/Todo";
import { toast } from "sonner";

export type TodoContextValue = {
  todos: TodoType[];
  totalTodo: number;
  completedTodo: number;
  handleDeleteTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
  handleAddNewTodo: (value: string) => void;
};

const TodosContext = createContext<TodoContextValue | null>(null);

export { TodosContext };
export function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const totalTodo: number = todos.length;
  const completedTodo: number = todos.filter((todo) => todo.isCompleted).length;

  function handleDeleteTodo(id: string): void {
    setTodos((prevTodo) => [...prevTodo].filter((todo) => todo.id !== id));
    toast.success("Todo deleted");
  }

  function handleAddNewTodo(value: string) {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        value,
        isCompleted: false,
      },
    ]);
  }

  function handleToggleTodo(id: string): void {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalTodo,
        completedTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleAddNewTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
