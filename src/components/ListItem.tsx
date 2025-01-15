import { CircleCheck, Trash2 } from "lucide-react";
import { useState } from "react";

interface ListItemProps {
  id: number;
  description: string;
  checked: boolean;
  deleteItem: (id: number) => void;
}

export function ListItem({
  id,
  description,
  checked,
  deleteItem,
}: ListItemProps) {
  const [itemCheck, setItemCheck] = useState(checked);

  return (
    <div className="mb-3 flex h-20 w-full items-center justify-around gap-4 rounded-lg bg-[#262626] px-6 py-4">
      {!itemCheck ? (
        <button
          className="mt-1 h-6 w-6 rounded-full border-2 border-[#4EA8DE]"
          onClick={() => setItemCheck(true)}
        ></button>
      ) : (
        <CircleCheck
          color="#4EA8DE"
          className="mt-1 h-6 w-6 cursor-pointer"
          onClick={() => setItemCheck(false)}
        />
      )}

      <p
        className={`text-[#F2F2F2] ${itemCheck && "!text-[#808080] line-through"}`}
      >
        {description}
      </p>
      <button className="mt-1" onClick={() => deleteItem(id)}>
        <Trash2 color="#808080" size={24} />
      </button>
    </div>
  );
}
