import { AddTodoForm } from "./AddTodoForm";
import { Button } from "./Button";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export function SideBar() {
  const { login, logout, register, isAuthenticated } = useKindeAuth();

  function handleLogin() {
    login();
  }

  function handleLogout() {
    logout();
  }

  return (
    <section className="flex flex-col justify-between col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] py-[18px]">
      <AddTodoForm />

      <div className="flex flex-col gap-2">
        <Button
          variant="secondary"
          onClick={isAuthenticated ? handleLogout : handleLogin}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
        {!isAuthenticated && (
          <Button variant="secondary" onClick={() => register()}>
            Register
          </Button>
        )}
      </div>
    </section>
  );
}
