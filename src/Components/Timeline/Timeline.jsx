import React from "react";
import dot from "../Assest/Img/Dot.png";
import tick from "../Assest/Img/Tick.png";

function Timeline() {
  const timeline = [
    {
      id: 1,
      image: dot,
      action: " Create an account",
      description: " Please provide your email and password",
    },
    {
      id: 2,
      image: dot,
      action: "Your details",
      description: " Tell us about yourself",
    },
    {
      id: 3,
      image: dot,
      action: "Verify you phone number",
      description: " Let’s keep your account secure",
    },
  ];
  return (
    <div>
      <ol className="relative border-l  border-gray-200 active:border-[#006A7C]">
        {timeline.map((item) => {
          return (
            <li className="mb-10 ml-6 " key={Math.random()}>
              <span className="flex absolute -left-3 justify-center items-center bg-[#E6F3F5] rounded-full ring-4 active:ring-8 ring-[#E6F3F5] active:text-[#006A7C]">
                <div className="w-6 h-6 p-1 flex items-center justify-center border-2 border-[#00859B] rounded-full">
                  <img src={item.image} alt="dot" />
                </div>
              </span>
              <h3 className="mb-1 text-md  lg:text-lg font-semibold text-slate-800  active:text-[#006A7C]">
                {item.action}
              </h3>
              <p className="text-xs font-normal text-gray-500  active:text-[#00859B]">
                {item.description}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Timeline;
