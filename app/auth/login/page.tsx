"use client";
import AuthService from "@/app/services/models/Authantication/AuthService";
import { useState } from "react";
import cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import Logo from "@/components/Logo";
import { AuthLabel } from "@/components/ui/auth.label";
import { AuthInput } from "@/components/ui/auth-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

const page = (props: Props) => {
  const [form, setForm] = useState({ userName: "", password: "" });
  const authService = new AuthService();
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authService.login(form);
      cookies.set("token", response.token, { path: "/" });
      const next = searchParams.get("next");
      router.push(next || "/panel");
    } catch (error) {
      // todo : notify user
      router.push("/auth/login");
    }
  };

  return (
    <section>
      <div className="flex mx-auto justify-center items-center w-screen h-screen">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="text-xl text-primary">
            Login to <Logo />
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Loging to get started your ai based workout & diet journey.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="my-4">
              <AuthLabel htmlFor="firstname">User Name</AuthLabel>
              <AuthInput
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Username"
              />
            </LabelInputContainer>
            <LabelInputContainer className="my-4">
              <AuthLabel htmlFor="password">Password</AuthLabel>
              <AuthInput
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Login &rarr;
              <BottomGradient />
            </button>
          </form>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col items-center justify-center">
            <span className="text-center text-neutral-600 text-sm dark:text-neutral-300">
              Don't have an account?{" "}
              <Link href={"/auth/register"} className="-ml-3">
                <Button variant={"link"}>Register</Button>
              </Link>
            </span>
            <Link href={"/"} className="text-sm my-2">
              <Button variant={"link"}>Go to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default page;
