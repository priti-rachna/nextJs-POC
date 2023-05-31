import React from "react";
import logo from '../../../assets/logo.jpg';
import Image from "next/image";

const Logo = () => {
  return (
    <>
     <div className="hidden lg:block">
      <Image
        src={logo}
        alt="logo"
        width={60}
        height={50}
        className="lg:hidden text-center"
      />
      <Image
        src={logo}
        alt="logo"
        width={120}
        height={95}
        className="hidden lg:block py-4"
      />
      </div>
    </>
  );
};

export default Logo;
