import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Button } from "./ui/button";
import { MoveDown, MoveRight } from "lucide-react";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <AuroraBackground>
      <h1 className="text-9xl text-primary">WELCOME!</h1>
      <p className="text-primary text-xl py-3">
        to new beginnings for your{" "}
        <span className="hover:border-b-2 hover:border-white">
          workout journey
        </span>
        .
      </p>
      <MoveDown className="h-10 w-10 text-primary" />
    </AuroraBackground>
  );
};

export default HeroSection;
