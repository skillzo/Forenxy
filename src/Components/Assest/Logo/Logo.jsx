import React from "react";
import logo from "../Img/Logomark.png";
import logowithname from "../Img/Logo.png";

function Logo() {
  return (
    <img
      src={logo}
      alt=""
      className="w-[50px] h-[50px] sm:w-[30px] sm:h-[30px] md:w-[70px]  md:h-[70px] object-contain mx-auto"
    />
  );
}

export default Logo;

export const LogoWithTheme = () => {
  return (
    <img
      src={logowithname}
      alt=""
      className="w-[50px] h-[50px] sm:w-[30px] sm:h-[30px] md:w-[70px]  md:h-[70px] object-contain mx-auto"
    />
  );
};
