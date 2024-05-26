import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Navigate = (props: Props) => {
  return (
    <div className="lg:flex lg:items-center hidden">
      <Button variant={"link"} className="text-gray-400 hover:text-primary">
        Home
      </Button>
      <Button variant={"link"} className="text-gray-400 hover:text-primary">
        About
      </Button>
      <Button variant={"link"} className="text-gray-400 hover:text-primary">
        Contact
      </Button>
    </div>
  );
};

export default Navigate;
