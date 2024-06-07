import Image from "next/image";
import React from "react";

const LogoSvg = () => {
  return (
    <Image className="w-full block dark:hidden" src="/logo.png" width={65} height={32} alt="" />
  );
};

export default LogoSvg;
