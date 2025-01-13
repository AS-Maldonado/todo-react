import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <main className="flex h-4/5 w-full flex-col items-center bg-[#1A1A1A]">
        <div className="h-4/5 w-3/5">
          <SearchBar />
          <TodoList />
        </div>
      </main>
    </>
  );
}

export default App;
