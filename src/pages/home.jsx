import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAuthLoadingSelector, userSelector } from "../store/auth";
import { supabase } from "../lib/supabase";

export function Home() {
  const user = useSelector(userSelector);
  const isAuthLoading = useSelector(isAuthLoadingSelector);

  return (
    <>
      <pre className="m-4 whitespace-pre-wrap font-mono text-xs text-zinc-300">
        {JSON.stringify({ user, isAuthLoading }, null, 2)}
      </pre>
      <Link
        to="/state"
        className="text-zinc-300 underline underline-offset-2 transition-colors duration-150 ease-in  hover:text-zinc-500 "
      >
        Go to state
      </Link>
      <button type="button" onClick={() => supabase.auth.signOut()}>
        Sign out
      </button>
    </>
  );
}
