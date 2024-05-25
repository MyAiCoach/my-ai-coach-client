import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>Welcome to your new project!</p>
      <Link href={"/auth/login"}>Login</Link>
      <Link href={"/auth/register"}>Register</Link>
    </main>
  );
}
