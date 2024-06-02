import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      MY<span className="font-black">AI</span>COACH*
    </Link>
  );
};

export default Logo;
