import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TodoContextProvider } from "./context/TodoContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="20b3e7f34c9249708c4baa48d5b55651"
      domain="https://authtodo.kinde.com"
      redirectUri={"https://auth-todo-vite.vercel.app"}
      logoutUri={"https://auth-todo-vite.vercel.app"}
    >
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </KindeProvider>
  </StrictMode>
);
