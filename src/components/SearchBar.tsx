import { ListItemType } from "@/types/list-item";
import { PlusCircle } from "lucide-react";
import { useRef, useState } from "react";

export interface SearchBarProps {
  addItem: (item: ListItemType) => void;
}

export function SearchBar({ addItem }: SearchBarProps) {
  const itemRef = useRef<HTMLInputElement>(null);
  const [itemsIds, setItemsIds] = useState<number[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const itemDescription = itemRef.current?.value || "";

    const nextId =
      itemsIds.length === 0 ? 1 : itemsIds[itemsIds.length - 1] + 1;
    setItemsIds([...itemsIds, nextId]);

    const item = {
      id: nextId,
      description: itemDescription,
      checked: false,
    };

    addItem(item);

    if (itemRef.current) {
      itemRef.current.value = "";
    }
  }

  return (
    <form
      className="relative bottom-7 flex w-full flex-wrap justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="description"
        ref={itemRef}
        className="w-full rounded-2xl bg-[#333333] py-4 pl-4 text-[#808080] focus:border-cyan-500 lg:w-4/5"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
        className="flex w-full justify-center gap-2 rounded-lg bg-gradient-to-r from-[#4EA8DE] to-[#5E60CE] p-4 text-white lg:w-[90px]"
      >
        Criar <PlusCircle />
      </button>
    </form>
  );
}
