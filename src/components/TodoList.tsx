import { BookmarkX } from "lucide-react";
import { useState } from "react";
import { ListItem } from "./ListItem";

export type ListItem = {
  description: string;
};

export function TodoList() {
  const [listItems, setListItems] = useState<ListItem[]>();

  return (
    <div className="flex h-3/4 w-full flex-col items-center justify-center">
      <div className="flex w-full justify-between px-8 pb-6">
        <p className="text-[#4EA8DE]">
          Tarefas criadas{" "}
          <span className="rounded-full bg-[#333333] px-3 py-1 text-white">
            0
          </span>
        </p>
        <p className="text-[#5E60CE]">
          Concluídas{" "}
          <span className="rounded-full bg-[#333333] px-3 py-1 text-white">
            0
          </span>
        </p>
      </div>
      <div
        className={`flex h-60 w-full flex-col items-center rounded-lg border-t-[1px] border-[#333333] ${!listItems && "justify-center"}`}
      >
        {listItems && listItems?.length > 0 ? (
          listItems.map((item, i) => (
            <ListItem key={i} description={item.description} />
          ))
        ) : (
          <>
            <BookmarkX color="#808080" size={56} className="mb-4" />
            <p className="font-sans font-bold text-[#808080]">
              Você ainda não tem tarefas cadastradas
            </p>
            <p className="font-sans text-[#808080]">
              Crie tarefas e organize seus itens a fazer
            </p>
          </>
        )}
      </div>
    </div>
  );
}
