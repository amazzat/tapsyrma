import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../lib/hooks/useToast";
import { supabase } from "../lib/supabase";

export function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { error } = await supabase.auth.signUp(data);

    setIsLoading(false);
    if (error) {
      toast(error.message, "error", 3000);
    } else {
      toast("Confirm your email address", "info", 3000);
      navigate({
        pathname: "/a/signin"
      });
    }
  };

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <form
        className="h-full flex-1 flex-col space-y-4 border-neutral-700 bg-neutral-800 p-6 shadow-inner sm:block sm:h-fit sm:max-w-sm sm:rounded-lg sm:border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-center text-xl font-bold text-zinc-50">
          Join management club 🎯
        </h1>
        <label htmlFor="email">
          <div className="input-label required">Email address</div>
          <input
            type="email"
            className="input w-full"
            placeholder="Your e-mail address..."
            {...register("email", { required: true, disabled: isLoading })}
          />
        </label>
        <label htmlFor="password">
          <div className="input-label required">Password</div>
          <input
            type="password"
            className="input w-full"
            placeholder="Your password..."
            {...register("password", { required: true, disabled: isLoading })}
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-success w-full"
        >
          Sign up
        </button>
        <div className="flex flex-col justify-center space-y-2 text-sm">
          <Link to="/a/signin" className="link text-center text-sm">
            Already have account?
          </Link>
        </div>
      </form>
    </main>
  );
}
