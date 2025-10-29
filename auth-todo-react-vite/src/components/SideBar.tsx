import { AddTodoForm } from "./AddTodoForm";
import { Button } from "./Button";

export function SideBar() {
  return (
    <section className="flex flex-col justify-between col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] py-[18px]">
      <AddTodoForm />

      <div className="flex flex-col gap-2">
        <Button variant="secondary">Login</Button>
        <Button variant="secondary">Register</Button>
      </div>
    </section>
  );
}
