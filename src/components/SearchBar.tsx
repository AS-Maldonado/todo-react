import { PlusCircle } from "lucide-react";

export function SearchBar() {
  return (
    <form className="relative bottom-7 flex w-full justify-center gap-4">
      <input
        type="text"
        className="w-4/5 rounded-2xl bg-[#333333] pl-4 text-[#808080] focus:border-cyan-500"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="button"
        className="flex gap-2 rounded-lg bg-gradient-to-r from-[#4EA8DE] to-[#5E60CE] p-4 text-white"
      >
        Criar <PlusCircle />
      </button>
    </form>
  );
}
