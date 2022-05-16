import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Link
        to="/state"
        className="text-zinc-300 hover:text-zinc-500 transition-colors duration-150 ease-in underline  underline-offset-2 "
      >
        Go to state
      </Link>
    </div>
  );
}
