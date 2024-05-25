"use client";
import AuthService from "@/app/services/models/Authantication/AuthService";
import { useState } from "react";
import cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
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
    <form onSubmit={handleSubmit}>
      <input
        name="userName"
        value={form.userName}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default page;
