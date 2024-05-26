import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Button } from "./ui/button";
import Navigate from "./Navigate";
import Logo from "./Logo";
import { NavigationMobile } from "./NavigationMobile";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed z-10 w-screen flex justify-between items-center backdrop-blur-sm  border-secondary lg:py-4 lg:px-72 px-9 py-6">
      <div className="flex space-x-5 items-center">
        <Logo />
        <Navigate />
      </div>

      <div className="hidden lg:space-x-1 lg:flex">
        <Link href={"/auth/login"}>
          <Button variant={"link"}>Login</Button>
        </Link>
        <Link href={"/auth/register"}>
          <Button variant={"outline"}>Register</Button>
        </Link>
        <ModeToggle />
      </div>
      <div className="flex space-x-2 items-center lg:hidden">
        <ModeToggle />
        <NavigationMobile />
      </div>
    </nav>
  );
};

export default Navbar;
