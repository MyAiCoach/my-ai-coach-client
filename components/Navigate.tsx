import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  user?: any;
};

const Navigate = (props: Props) => {
  return (
    <div className="lg:flex lg:items-center hidden">
      {props.user ? (
        <>
          <Link href={"/panel"}>
            <Button
              variant={"link"}
              className="text-gray-400 hover:text-primary"
            >
              Panel
            </Button>
          </Link>
          <Link href={"/createWorkout"}>
            <Button
              variant={"link"}
              className="text-gray-400 hover:text-primary"
            >
              Workout
            </Button>
          </Link>
          <Link href={"/createDiet"}>
            <Button
              variant={"link"}
              className="text-gray-400 hover:text-primary"
            >
              Nutrution
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link href={"/"}>
            <Button
              variant={"link"}
              className="text-gray-400 hover:text-primary"
            >
              Home
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button
              variant={"link"}
              className="text-gray-400 hover:text-primary"
            >
              About
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              variant={"link"}
              className="text-gray-400 hover:text-primary"
            >
              Contact
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navigate;
