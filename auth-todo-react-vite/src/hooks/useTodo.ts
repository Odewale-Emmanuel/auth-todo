import { useContext } from "react";
import {
  TodosContext,
  type TodoContextValue,
} from "../context/TodoContextProvider";

export function useTodoContext() {
  const context = useContext<TodoContextValue | null>(TodosContext);
  if (!context) {
    throw new Error("Forgot to add context provider to your App.");
  }
  return context;
}
