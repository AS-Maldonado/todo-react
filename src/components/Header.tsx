import { Rocket } from "lucide-react";

export function Header() {
  return (
    <div className="flex h-48 items-center justify-center bg-[#0D0D0D]">
      <div className="flex items-end gap-2">
        <svg width="30" height="30" viewBox="0 0 24 24">
          <defs>
            <linearGradient
              id="rocket-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5E60CE" />
              <stop offset="100%" stopColor="#4EA8DE" />
            </linearGradient>
          </defs>
          <Rocket stroke="url(#rocket-gradient)" strokeWidth="2" />
        </svg>
        <h1 className="bg-gradient-to-r from-[#4EA8DE] to-[#5E60CE] bg-clip-text font-sans text-4xl font-black text-transparent">
          todo
        </h1>
      </div>
    </div>
  );
}
