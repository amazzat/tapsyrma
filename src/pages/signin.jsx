import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Input } from "../components/common";
import { TextLink } from "../components/common/TextLink";
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
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="flex h-full flex-1  flex-col justify-center  space-y-4 border-neutral-700 bg-neutral-800 p-6 shadow-inner sm:block sm:h-fit sm:max-w-sm sm:rounded-lg sm:border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-center text-xl font-bold text-white">
          Welcome back 👋
        </h1>
        <div>
          <Input
            type="email"
            placeholder="Your e-mail address..."
            {...register("email", { required: true, disabled: isLoading })}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Your password..."
            {...register("password", { required: true, disabled: isLoading })}
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          Sign in
        </Button>
        <div className="flex flex-col justify-center space-y-2 text-sm">
          <Link to="/auth/signup">
            <TextLink>Sign up</TextLink>
          </Link>
          <Link to="/auth/signup">
            <TextLink>Forgot password</TextLink>
          </Link>
        </div>
      </form>
    </div>
  );
}
