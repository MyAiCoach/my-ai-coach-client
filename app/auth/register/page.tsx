"use client";
import { useState } from "react";
type Props = {};

const page = (props: Props) => {
  const [form, setForm] = useState({
    nameSurename: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nameSurename"
        value={form.nameSurename}
        onChange={handleChange}
        placeholder="Name Surname"
      />
      <input
        name="userName"
        value={form.userName}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default page;
