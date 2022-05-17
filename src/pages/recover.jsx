import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Input } from "../components/common";
import { TextLink } from "../components/common/TextLink";
import { useToast } from "../lib/hooks/useToast";
import { supabase } from "../lib/supabase";

export function Recover() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [emailIsSent, setEmailIsSent] = useState(false);

  const token = searchParams.get("access_token");
  const [isPassword, setIsPassword] = useState(false);

  useLayoutEffect(() => {
    if (token) {
      setIsPassword(true);
    }
  }, [token]);

  const goBack = () => navigate(-1);

  const onSubmitReset = async (data) => {
    setIsLoading(true);
    const { error } = await supabase.auth.api.resetPasswordForEmail(data.email);

    setIsLoading(false);
    if (error) {
      toast(error.message, "error", 3000);
    } else {
      setEmailIsSent(true);
    }
  };

  const onSubmitUpdate = async (data) => {
    setIsLoading(true);
    const { error } = await supabase.auth.api.updateUser(token, {
      password: data.password
    });
    setIsLoading(false);

    if (error) {
      toast(error.message, "error", 3000);
    } else {
      toast("Your password has changed", "success", 3000);
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="flex h-full flex-1  flex-col justify-center  space-y-4 border-neutral-700 bg-neutral-800 p-6 shadow-inner sm:block sm:h-fit sm:max-w-sm sm:rounded-lg sm:border"
        onSubmit={handleSubmit(isPassword ? onSubmitUpdate : onSubmitReset)}
      >
        {isPassword && (
          <>
            <h1 className="mb-4 text-center text-xl font-bold text-white">
              Change your password
            </h1>
            <div>
              <Input
                type="password"
                placeholder="New password address..."
                {...register("password", {
                  required: true,
                  disabled: isLoading
                })}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              Change password
            </Button>
          </>
        )}
        {!isPassword &&
          (emailIsSent ? (
            <h1 className="mb-4 w-full rounded-lg border border-emerald-900 bg-emerald-600 py-2 px-4 text-center text-base  font-medium  text-zinc-200 shadow-inner">
              Recovery link is sent to your email 🙌
            </h1>
          ) : (
            <>
              <h1 className="mb-4 text-center text-xl font-bold text-white">
                Recover your account 🤝
              </h1>
              <div>
                <Input
                  type="email"
                  placeholder="Your e-mail address..."
                  {...register("email", {
                    required: true,
                    disabled: isLoading
                  })}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                Send recovery email
              </Button>
            </>
          ))}
        <div className="flex flex-col justify-center space-y-2 text-sm">
          <button type="button" onClick={goBack}>
            <TextLink>Go back</TextLink>
          </button>
        </div>
      </form>
    </div>
  );
}
