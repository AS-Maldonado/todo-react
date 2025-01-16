import { BookmarkX } from "lucide-react";
import { ListItem } from "./ListItem";
import { ListItemType } from "@/types/list-item";

export interface TodoListProps {
  items: ListItemType[];
  deleteItem: (id: number) => void;
}

export function TodoList({ items, deleteItem }: TodoListProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-6 flex w-full justify-between px-0 md:px-8">
        <p className="text-[#4EA8DE]">
          Tarefas criadas{" "}
          <span className="rounded-full bg-[#333333] px-3 py-1 text-white">
            0
          </span>
        </p>
        <p className="text-right text-[#5E60CE] md:text-left">
          Concluídas{" "}
          <span className="rounded-full bg-[#333333] px-3 py-1 text-white">
            0
          </span>
        </p>
      </div>
      <div className={`w-full rounded-lg border-t-[1px] border-[#333333]`}>
        {items && items?.length > 0 ? (
          items.map((item, i) => (
            <ListItem
              key={i}
              id={item.id}
              description={item.description}
              checked={item.checked}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <div className="flex min-h-60 w-full flex-col items-center justify-center text-center">
            <BookmarkX color="#808080" size={56} className="mb-4" />
            <p className="font-sans font-bold text-[#808080]">
              Você ainda não tem tarefas cadastradas
            </p>
            <p className="font-sans text-[#808080]">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
