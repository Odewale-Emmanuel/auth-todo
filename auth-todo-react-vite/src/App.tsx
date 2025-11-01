import { BackgroundHeading } from "./components/BackgroundHeading";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { SideBar } from "./components/SideBar";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="font-nunito-sans flex flex-col items-center justify-center min-h-svh bg-[#f1d4b3] relative">
      <BackgroundHeading />

      <main className="relative mx-auto w-11/12 max-w-[972px] h-[90vh] max-h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-2 md:grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <SideBar />
      </main>

      <Footer />
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}

export default App;
