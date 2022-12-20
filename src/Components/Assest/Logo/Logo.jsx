import React from "react";
import logo from "../Img/Logomark.png";
import logowithname from "../Img/Logo.png";

function Logo() {
  return (
    <img
      src={logo}
      alt=""
      className="w-[70px] h-[70px] sm:w-[30px] sm:h-[30px] md:w-[100px]  md:h-[70px] object-contain mx-auto"
    />
  );
}

export default Logo;

export const LogoWithname = () => {
  return (
    <img
      src={logowithname}
      alt=""
      className="w-[100px] h-[50px] sm:w-[30px] sm:h-[30px] md:w-[150px]  md:h-[70px] object-contain"
    />
  );
};
