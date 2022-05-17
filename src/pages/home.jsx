import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../components/common/Button";
import { Modal } from "../components/modal";
import { supabase } from "../lib/supabase";
import { isAuthLoadingSelector, userSelector } from "../store/auth";

export function Home() {
  const user = useSelector(userSelector);
  const isAuthLoading = useSelector(isAuthLoadingSelector);
  const [modal, setModal] = useState(false);

  const logout = () => {
    setModal(false);
    supabase.auth.signOut();
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <pre className="m-4  whitespace-pre-wrap font-mono text-xs text-zinc-300">
        {JSON.stringify({ user, isAuthLoading }, null, 4)}
        {JSON.stringify({ user, isAuthLoading }, null, 4)}
      </pre>
      <Modal
        show={modal}
        onCancel={() => setModal(false)}
        onConfirm={logout}
        title="Are you sure you want to logout?"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        quasi suscipit tempore maxime ut incidunt voluptatum! Porro dolore, nulla
        eius quam quo unde, placeat consequatur doloremque, dicta eum iusto rerum!"
      />
      <Button
        className="w-fit border-red-900 bg-red-600 hover:bg-red-700 hover:text-zinc-300 focus:border-red-500"
        type="button"
        onClick={() => setModal(true)}
      >
        Sign out
      </Button>
    </div>
  );
}
