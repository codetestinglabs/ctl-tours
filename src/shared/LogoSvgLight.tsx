import Image from "next/image";
import React from "react";

const LogoSvgLight = () => {
  return (
    <Image className="w-full hidden dark:block" src="/logo.png" width={65} height={32} alt="" />
  );
};

export default LogoSvgLight;
