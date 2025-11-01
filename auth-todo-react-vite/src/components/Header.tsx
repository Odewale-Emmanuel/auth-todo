import { Counter } from "./Counter";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="col-[1/3] row-[1/2] flex justify-between px-7 items-center bg-[#fbf5ed] border-b border-black/[0.08]">
      <Logo />
      <Counter />
    </header>
  );
}
