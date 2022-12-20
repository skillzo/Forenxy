import React from "react";
import google from "../../Assest/Img/Google.png";
import facebook from "../../Assest/Img/Facebook.png";
import { LogoWithname } from "../../Assest/Logo/Logo";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import "./signup.css";
import SignUpCarousel from "../../Carousel/Carousel";

function SignUp() {
  const carouselText = [
    {
      id: 1,
      text: "unlimited Cards",
      description:
        " Give your team the autonomy they need with access to as many cards as they need Authorise purchases with a click. Simple.",
    },
    {
      id: 2,
      text: "unlimited Cards",
      description:
        " Give your team the autonomy they need with access to as many cards as they need Authorise purchases with a click. Simple.",
    },
    {
      id: 3,
      text: "unlimited Cards",
      description:
        " Give your team the autonomy they need with access to as many cards as they need Authorise purchases with a click. Simple.",
    },
    {
      id: 4,
      text: "unlimited Cards",
      description:
        " Give your team the autonomy they need with access to as many cards as they need Authorise purchases with a click. Simple.",
    },
  ];

  return (
    <div className="flex justify-between w-full h-screen ">
      {/* sign up page */}

      <div className="w-full md:w-[50%]">
        <div className=" w-full md:w-[80%] lg:w-[40%] mx-auto space-y-[3em] my-[5vh] md:my-[10vh] h-[90vh] md:h-[80vh] md:text-sm  ">
          <div className="forenxy-logo ">
            <LogoWithname />
          </div>
          <div className="signin-heading space-y-1">
            <h1 className="text-4xl md:text-3xl  font-bold ">
              Create an account
            </h1>
          </div>
          <form action="" className="space-y-[2em]">
            <div className="form flex flex-col space-y-1">
              <label htmlFor="Email" className="font-medium ">
                Email*
              </label>
              <input
                type="email"
                v
                placeholder="Enter your email"
                className="rounded-lg"
              />
            </div>
            <div className="form flex flex-col space-y-1 ">
              <label htmlFor="Email" className="font-medium ">
                Password*
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="rounded-lg"
              />
              <p className="text-sm">Must be at least 8 characters</p>
            </div>
            <div className="space-y-[1em] ">
              <button
                type="submit"
                className="button1 w-full rounded-lg font-bold "
              >
                Get Started
              </button>

              <div className="space-y-[0.6em]">
                <div className="flex justify-center items-center space-x-2 border rounded-lg  mx-auto p-[0.4em] active:bg-[#f2f5f8]">
                  <img
                    src={google}
                    alt=""
                    className="w-[20px] h-[30px] rounded-full object-contain"
                  />
                  <p className="font-bold text-[#344054] ">
                    Sign up with Google
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-2 border rounded-lg  mx-auto p-[0.4em]  active:bg-[#f2f5f8]">
                  <img
                    src={facebook}
                    alt=""
                    className="w-[20px] h-[30px] rounded-full object-contain"
                  />
                  <p className="font-bold text-[#344054] ">
                    Sign up with Facebook
                  </p>
                </div>
              </div>
            </div>
          </form>

          <p className="text-center">
            Already have an account?
            <span className="font-bold text-[#006A7C]">Sign up</span>
          </p>
        </div>
      </div>

      {/* carousel here(only visible on desktop) */}
      <div className="carousel w-[50%] hidden md:flex justify-center items-center">
        <SignUpCarousel />
      </div>
    </div>
  );
}

export default SignUp;
