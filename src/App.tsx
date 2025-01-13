import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <main className="w-screen h-screen flex flex-col items-center bg-[#1A1A1A]">
        <SearchBar />
      </main>
    </>
  );
}

export default App;
