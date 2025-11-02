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
      redirectUri={
        import.meta.env.MODE === "production"
          ? "https://auth-todo-vite.vercel.app"
          : "http://localhost:5173"
      }
      logoutUri={
        import.meta.env.NODE_ENV == "production"
          ? "https://auth-todo-vite.vercel.app"
          : "http://localhost:5173"
      }
    >
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </KindeProvider>
  </StrictMode>
);
