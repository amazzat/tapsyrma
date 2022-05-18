import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../lib/hooks/useToast";
import { supabase } from "../lib/supabase";

export function SignIn() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { error } = await supabase.auth.signIn(data);

    setIsLoading(false);
    if (error) {
      toast(error.message, "error", 3000);
    } else {
      navigate(
        location.state?.from ?? {
          pathname: "/"
        }
      );
    }
  };

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <form
        className="h-full flex-1 flex-col space-y-4 border-neutral-700 bg-neutral-800 p-6 shadow-inner sm:block sm:h-fit sm:max-w-sm sm:rounded-lg sm:border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-center text-xl font-bold text-zinc-50">
          Welcome back 👋
        </h1>
        <label htmlFor="email">
          <div className="input-label">Email address</div>
          <input
            type="email"
            className="input w-full"
            placeholder="Your e-mail address..."
            {...register("email", { required: true, disabled: isLoading })}
          />
        </label>
        <label htmlFor="password">
          <div className="input-label">Password</div>
          <input
            type="password"
            className="input w-full"
            placeholder="Your password..."
            {...register("password", { required: true, disabled: isLoading })}
          />
        </label>
        <button type="submit" disabled={isLoading} className="btn w-full">
          Sign in
        </button>
        <div className="space-y-2">
          <Link to="/a/signup" className="link text-center text-sm">
            Don&apos;t have account yet?
          </Link>
          {/* Recovery does not work yet */}
          {/* <Link to="/a/recover" className="link text-center text-sm">
            Forgot password
          </Link> */}
        </div>
      </form>
    </main>
  );
}
