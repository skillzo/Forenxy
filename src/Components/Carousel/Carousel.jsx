import React from "react";
import carouselImg from "../Assest/Img/carousel-img.png";

function SignUpCarousel({ text, description }) {
  return (
    <div className="w-[90%] lg:w-[60%]">
      <img
        className="w-full object-cover"
        src={carouselImg}
        alt="carousel img"
      />

      <div className=" text-center space-y-[1em]  text-slate-200">
        <p className="font-bold text-xl text-slate-50">{text}</p>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
}

export default SignUpCarousel;
