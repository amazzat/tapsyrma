import { Link } from "react-router-dom";
import { useGetAllNamesQuery } from "../api";

export function Home() {
  const { data } = useGetAllNamesQuery();
  return (
    <>
      <pre className="text-zinc-300 font-mono text-xs whitespace-pre-wrap m-4">
        {JSON.stringify(data, null, 2)}
      </pre>
      <Link
        to="/state"
        className="text-zinc-300 hover:text-zinc-500 transition-colors duration-150 ease-in underline  underline-offset-2 "
      >
        Go to state
      </Link>
    </>
  );
}
