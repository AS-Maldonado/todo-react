import { PlusCircle } from "lucide-react";

export function SearchBar() {
  return (
    <form className="relative bottom-7 flex justify-center gap-4 w-4/5">
      <input
        type="text"
        className="pl-4 rounded-2xl w-3/5 bg-[#333333] text-[#808080] focus:border-cyan-500"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="button"
        className="flex gap-2 text-white p-4 rounded-lg bg-gradient-to-r from-[#4EA8DE] to-[#5E60CE]"
      >
        Criar <PlusCircle />
      </button>
    </form>
  );
}
