import React from "react";
import { LogoWithname } from "../Components/Assest/Logo/Logo";
import Timeline from "../Components/Timeline/Timeline";

function PDetails() {
  return (
    <div className="flex justify-between">
      {/* details tracker */}
      <div className="hidden md:flex flex-col  md:w-[35%] lg:w-[20%] bg-[#F9FAFB] ">
        <div className="w-[80%] mx-auto h-[40vh] mt-[5vh] space-y-[2em]">
          <LogoWithname />
          <Timeline />
          {/* ////////// */}
        </div>
      </div>

      {/* details form here */}
      <div className="w-full md:w-[65%] lg:w-[80%] space-y-[2em]  ">
        <form
          action=""
          className="space-y-[1em] md:w-[70%] lg:w-[30%] h-[80vh] my-[10vh] md:h-[80vh] md:my-[10vh] mx-auto"
        >
          <div className="text-center mb-[2em] ">
            <p className="font-bold text-2xl text-slate-800 lg:text-3xl">
              Tell us about yourself
            </p>
            <p className="text-sm text-slate-800">
              Fill in your full legal names as it appears on your ID and your
              current address
            </p>
          </div>
          <div className="form flex flex-col space-y-1">
            <label htmlFor="Email" className="font-medium ">
              First and middle names
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="rounded-lg"
            />
          </div>
          <div className="form flex flex-col space-y-1">
            <label htmlFor="Email" className="font-medium ">
              Last name&#40;s&#41;
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="rounded-lg"
            />
          </div>
          <div className="form flex flex-col space-y-1">
            <label htmlFor="Email" className="font-medium ">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="rounded-lg"
            />
          </div>
          <div className="form flex flex-col space-y-1">
            <label htmlFor="Email" className="font-medium ">
              Country
            </label>
            <input
              type="country"
              placeholder="United States"
              className="rounded-lg"
            />
          </div>
          <div className="form flex flex-col space-y-1">
            <label htmlFor="address" className="font-medium ">
              Home address
            </label>
            <input
              type="address"
              placeholder="Street name"
              className="rounded-lg"
            />
          </div>
          <div className="form flex flex-col space-y-1">
            <label htmlFor="address" className="font-medium ">
              City
            </label>
            <input type="city" placeholder="City" className="rounded-lg" />
          </div>
          {/* postal code and state */}
          <div className="flex justify-between">
            <div className="form w-[45%] flex flex-col space-y-1">
              <label htmlFor="address" className="font-medium ">
                Home address
              </label>
              <input type="state" placeholder="state" className="rounded-lg" />
            </div>
            <div className="form w-[45%] flex flex-col space-y-1">
              <label htmlFor="address" className="font-medium ">
                Home address
              </label>
              <input type="state" placeholder="state" className="rounded-lg" />
            </div>
          </div>
          <button
            type="submit"
            className="button1 w-full rounded-lg font-bold "
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default PDetails;
