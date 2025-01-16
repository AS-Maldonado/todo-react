import { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { TodoList } from "./components/TodoList";
import { ListItemType } from "./types/list-item";

function App() {
  const [itemsList, setItemsSList] = useState<ListItemType[]>([]);

  function handleAddItem(item: ListItemType) {
    setItemsSList([...itemsList, item]);
  }

  function handleDeleteTask(itemId: number) {
    setItemsSList((prev) => prev.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <Header />
      <main className="flex h-auto min-h-screen w-full flex-col items-center bg-[#1A1A1A]">
        <div className="w-4/5 md:w-3/5">
          <SearchBar addItem={handleAddItem} />
          <TodoList items={itemsList} deleteItem={handleDeleteTask} />
        </div>
      </main>
    </>
  );
}

export default App;
