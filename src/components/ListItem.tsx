import { CircleCheck, Trash2 } from "lucide-react";
import { useState } from "react";

interface ListItemProps {
  description: string;
}

export function ListItem({ description }: ListItemProps) {
  const [taskCheck, setTaskCheck] = useState(false);

  return (
    <div className="mb-3 flex h-20 w-full items-start justify-around gap-4 rounded-lg bg-[#262626] px-6 py-4">
      {!taskCheck ? (
        <button
          className="mt-1 h-6 w-6 rounded-full border-2 border-[#4EA8DE]"
          onClick={() => setTaskCheck(true)}
        ></button>
      ) : (
        <CircleCheck
          color="#4EA8DE"
          className="mt-1 h-6 w-6"
          onClick={() => setTaskCheck(false)}
        />
      )}

      <p className="text-[#F2F2F2]">{description}</p>
      <button className="mt-1">
        <Trash2 color="#808080" size={24} />
      </button>
    </div>
  );
}
