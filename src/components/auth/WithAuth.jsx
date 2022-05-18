import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../../lib/supabase";
import { setUser } from "../../store/auth";

export function WithAuth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const session = supabase.auth.session();

    if (session) {
      dispatch(setUser(session.user ?? null));
    }

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, _session) => {
        dispatch(setUser(_session?.user ?? null));
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, [dispatch]);

  return children;
}
