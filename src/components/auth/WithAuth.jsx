import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../../lib/supabase";
import { setUser } from "../../store/auth";

export function WithAuth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const session = supabase.auth.session();

    console.log("Session - ", !!session);
    dispatch(setUser(session?.user ?? null));

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, _session) => {
        setUser(_session?.user ?? null);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  return children;
}
