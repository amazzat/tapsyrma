import { useSelector } from "react-redux";
import { supabase } from "../lib/supabase";
import { userSelector } from "../store/auth";

export function Home() {
  const user = useSelector(userSelector);

  const Logout = () => {
    supabase.auth.signOut();
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <pre className="m-4  overflow-auto font-mono text-xs text-zinc-300">
        {JSON.stringify({ user }, null, 4)}
      </pre>
      <button className="btn btn-error" type="button" onClick={Logout}>
        Sign out
      </button>
    </div>
  );
}
