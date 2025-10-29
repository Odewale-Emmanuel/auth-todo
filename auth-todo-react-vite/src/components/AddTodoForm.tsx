import { Button } from "./Button";

export function AddTodoForm() {
  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        placeholder="e.g. Wash the dishes"
        className="h-[45px] px-3 bg-white border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full"
      />
      <Button>Add to list</Button>
    </form>
  );
}
