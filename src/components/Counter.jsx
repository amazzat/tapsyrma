import { useSelector } from "react-redux";
import { counterSelector } from "../store/counter";

export function Counter() {
  const count = useSelector(counterSelector);

  return (
    <div className="aspect-square rounded-lg border border-neutral-700 bg-neutral-800 p-1 text-center font-mono font-bold text-zinc-300 shadow-inner">
      {count}
    </div>
  );
}
