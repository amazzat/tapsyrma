import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../lib/hooks";

export function SignIn() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      toast(data.email, 1000);
      // await supabase.auth.signIn(data);
      navigate(location.state.from);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="flex w-1/4 flex-col space-y-4 rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-inner"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-center text-xl font-bold text-white">
          Welcome back 👋
        </h1>
        <div>
          <input
            type="email"
            placeholder="Your e-mail address..."
            className="w-full rounded-lg border border-zinc-900 bg-zinc-900 py-2 px-4 text-base font-light text-zinc-300 transition-colors duration-150 ease-linear placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-0"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Your password..."
            className="w-full rounded-lg border border-zinc-900 bg-zinc-900 py-2 px-4 text-base font-light text-zinc-300 transition-colors duration-150 ease-linear placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-0"
            {...register("password", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg border border-sky-900 bg-sky-600 py-2 px-4 text-base font-medium text-white shadow-inner transition-colors  duration-150 ease-linear focus:border-zinc-500 focus:outline-none focus:ring-0 "
        >
          Sign in
        </button>
        <div className="flex flex-col justify-center space-y-2 text-sm">
          <Link
            to="/auth/signup"
            className="text-center font-medium text-zinc-300 transition-colors duration-100 ease-in-out hover:text-zinc-500"
          >
            Sign up
          </Link>
          <Link
            to="/auth/signup"
            className="text-center font-medium text-zinc-300 transition-colors duration-100 ease-in-out hover:text-zinc-500"
          >
            Forgot password
          </Link>
        </div>
      </form>
    </div>
  );
}
