import { Button } from "./Button";

export function DeleteButton({ onClick }: { onClick: () => void }) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    onClick();
  }

  return (
    <Button
      className="p-0.5 hover:cursor-pointer opacity-10 group-hover:opacity-100"
      onClick={(e) => handleClick(e)}
    >
      ❌
    </Button>
  );
}
