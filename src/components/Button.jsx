import { useDispatch } from "react-redux";
import { increment } from "../features/counter";

export function Button() {
  const dispatch = useDispatch();

  const onClick = () => dispatch(increment());

  return (
    <button
      type="button"
      className="rounded-lg border border-neutral-700 bg-neutral-800 p-1 aspect-square text-base font-light text-zinc-300 transition-colors duration-150 ease-linear placeholder:text-zinc-500 focus:border-zinc-500"
      onClick={onClick}
    >
      +
    </button>
  );
}
