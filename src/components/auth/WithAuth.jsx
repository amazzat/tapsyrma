import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../../lib/supabase";
import { setLoading, setUser } from "../../store/auth";

export function WithAuth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const session = supabase.auth.session();

    if (session) {
      dispatch(setUser(session.user ?? null));
      dispatch(setLoading(false));
    }

    dispatch(setLoading(false));

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, _session) => {
        dispatch(setUser(_session?.user ?? null));
      }
    );

    return () => {
      listener?.unsubscribe();
      dispatch(setLoading(false));
    };
  }, [dispatch]);

  return children;
}
