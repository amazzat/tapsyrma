import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../components/common";
import { TextLink } from "../components/common/TextLink";
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
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="flex h-full flex-1  flex-col justify-center  space-y-4 border-neutral-700 bg-neutral-800 p-6 shadow-inner sm:block sm:h-fit sm:max-w-sm sm:rounded-lg sm:border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-center text-xl font-bold text-white">
          Join management club 🪩
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
          Sign up
        </Button>
        <div className="flex flex-col justify-center space-y-2 text-sm">
          <Link to="/a/signin">
            <TextLink>Already have account?</TextLink>
          </Link>
        </div>
      </form>
    </div>
  );
}
