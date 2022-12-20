import React from "react";
import Logo from "../../Assest/Logo/Logo";
import google from "../../Assest/Img/Google.png";
import facebook from "../../Assest/Img/Facebook.png";
import { Checkboxes } from "../../Button/Buttons";
import "./signin.css";

// Sign Up page
function SignIn() {
  return (
    <div className="select-none w-full  lg:w-[20%] md:w-[45%] space-y-[2em] my-[5vh] md:my-[10vh] h-[90vh] md:h-[80vh]  lg:text-sm mx-auto  ">
      <div className="forenxy-logo">
        <Logo />
      </div>
      <div className="signin-heading text-center space-y-1">
        <h1 className="text-xl md:text-3xl  font-bold ">
          Log in to your account
        </h1>
        <p className="text-lg md:text-sm font-extralight text-slate ">
          Welcome Back! Please enter your details
        </p>
      </div>
      <form action="" className="space-y-[2em]">
        <div className="form flex flex-col space-y-1">
          <label htmlFor="Email" className="font-medium ">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-lg"
          />
        </div>
        <div className="form flex flex-col space-y-1 ">
          <label htmlFor="Email" className="font-medium ">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-lg"
          />
        </div>
        {/* forgot Password */}
        <div className="flex justify-between items-center ">
          <div className="flex items-center w-[50%]">
            <Checkboxes />

            <p className="text-sm ">Remember for 30 days</p>
          </div>
          <p className="font-bold text-[#006A7C] active:text-[#99CED7]">
            Forgot password
          </p>
        </div>

        {/* buttons */}
        <div className="space-y-[2em] ">
          <button
            type="submit"
            className="button1 w-full rounded-lg font-bold "
            disabled={true}
          >
            Sign in
          </button>
          <p className="text-center text-[#475467] font-medium ">
            Or log in with
          </p>
          <div className="space-y-[0.6em]">
            <div className="flex justify-center items-center space-x-2 border rounded-lg  mx-auto p-[0.4em] active:bg-[#f2f5f8]">
              <img
                src={google}
                alt=""
                className="w-[20px] h-[30px] rounded-full object-contain"
              />
              <p className="font-bold text-[#344054] ">Sign in with Google</p>
            </div>
            <div className="flex justify-center items-center space-x-2 border rounded-lg  mx-auto p-[0.4em]  active:bg-[#f2f5f8]">
              <img
                src={facebook}
                alt=""
                className="w-[20px] h-[30px] rounded-full object-contain"
              />
              <p className="font-bold text-[#344054] ">Sign in with Facebook</p>
            </div>
          </div>
        </div>
      </form>

      {/* dont have an account */}
      <p className="text-center">
        Don't have an account?{" "}
        <span className="font-bold text-[#006A7C]">Sign up</span>
      </p>
    </div>
  );
}

export default SignIn;
