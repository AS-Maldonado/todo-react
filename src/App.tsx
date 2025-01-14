import { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { TodoList } from "./components/TodoList";

function App() {
  const [taskList, setTaskList] = useState([""]);

  function handleAddTask(task: string) {
    setTaskList([...taskList, task]);
  }

  return (
    <>
      <Header />
      <main className="flex h-4/5 w-full flex-col items-center bg-[#1A1A1A]">
        <div className="h-4/5 w-3/5">
          <SearchBar addTask={handleAddTask} />
          <TodoList listItems={taskList} />
        </div>
      </main>
    </>
  );
}

export default App;
