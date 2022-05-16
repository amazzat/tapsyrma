import { useSelector } from "react-redux";
import { counterSelector } from "../features/counter";

export function Counter() {
  const count = useSelector(counterSelector);

  return (
    <div className="font-mono font-bold rounded-lg border border-neutral-700 bg-neutral-800 aspect-square p-1 text-center text-zinc-300 shadow-inner">
      {count}
    </div>
  );
}
