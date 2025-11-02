import { AddTodoForm } from "./AddTodoForm";
import { Button } from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export function SideBar() {
  const { login, logout, register, isAuthenticated, user } = useKindeAuth();
  const userInitials = `${user?.givenName && user?.givenName[0]} ${
    user?.familyName && user?.familyName[0]
  }`;

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
        {isAuthenticated && (
          <div className="grid gap-2 grid-cols-[40px_1fr]">
            <div className="relative overflow-hidden rounded-full bg-[#322618]">
              <span className="absolute text-center top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white w-full">
                {userInitials}
              </span>
              <img
                src={user?.picture}
                alt={user?.givenName}
                className="relative w-full aspect-square rounded-full"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm">{`${user?.givenName} ${user?.familyName}`}</p>
              <small className="text-gray-500 -mt-0.5 hidden sm:block">
                {user?.email}
              </small>
            </div>
          </div>
        )}

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
