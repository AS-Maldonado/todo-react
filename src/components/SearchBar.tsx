import { ListItemType } from "@/types/ListItems";
import { PlusCircle } from "lucide-react";
import { useRef } from "react";

export interface SearchBarProps {
  addTask: (task: ListItemType) => void;
}

export function SearchBar({ addTask }: SearchBarProps) {
  const taskRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const taskDescription = taskRef.current?.value || "";

    const task = {
      description: taskDescription,
      checked: false,
    };

    addTask(task);

    if (taskRef.current) {
      taskRef.current.value = "";
    }
  }

  return (
    <form
      className="relative bottom-7 flex w-full justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="task"
        ref={taskRef}
        className="w-4/5 rounded-2xl bg-[#333333] pl-4 text-[#808080] focus:border-cyan-500"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
        className="flex gap-2 rounded-lg bg-gradient-to-r from-[#4EA8DE] to-[#5E60CE] p-4 text-white"
      >
        Criar <PlusCircle />
      </button>
    </form>
  );
}
