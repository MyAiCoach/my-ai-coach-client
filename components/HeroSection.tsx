import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { MoveDown, MoveRight } from "lucide-react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <AuroraBackground>
      <h1 className="text-7xl lg:text-9xl text-primary">WELCOME!</h1>
      <p className="text-primary text-md lg:text-xl py-3">
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
