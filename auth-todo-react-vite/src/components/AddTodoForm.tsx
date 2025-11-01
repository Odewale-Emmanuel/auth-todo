import { Button } from "./Button";
import { useState } from "react";
import { toast } from "sonner";
import { useTodoContext } from "../hooks/useTodo";

export function AddTodoForm() {
  const [todoText, setTodoText] = useState<string>("");
  const { handleAddNewTodo } = useTodoContext();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function handleNewTodo(todoText: string) {
    if (!todoText.length) {
      toast.warning("You can't add an empty todo");
      return;
    } else if (todoText.length <= 3) {
      toast.warning("Todo length too short");
      return;
    } else {
      try {
        handleAddNewTodo(todoText);
        setTodoText("");
        toast.success("Todo added successfully");
      } catch (error) {
        console.error(error);
        toast.error("Error: couldn't add todo");
      }
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        placeholder="e.g. Wash the dishes"
        value={todoText}
        onChange={(e) => handleInputChange(e)}
        className="h-[45px] px-3 bg-white border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full"
      />
      <Button onClick={() => handleNewTodo(todoText)}>Add to list</Button>
    </form>
  );
}
