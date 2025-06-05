import { Github } from "@/icons/Github";
import { Google } from "@/icons/GoogleColor";
import React from "react";

const OauthProvider = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
  };

  const handleGithubLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/github`;
  };

  return (
    <div className=" flex     text-white  w-[18cm] h-[3cm] justify-center items-center p-5">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-3 px-6 py-3 border-r-[2px] "
      >
        {/* Google Icon */}
        <div className="">
          <Google />
        </div>

        {/* Text */}
        <span className="text-base font-medium text-[#8C8C8C]">
          Continue with&nbsp;
          <span className=" text-2xl text-[#EA4335]">G</span>
          <span className=" text-2xl text-[#FBBC05]">o</span>
          <span className=" text-2xl text-[#34A853]">o</span>
          <span className=" text-2xl text-[#4285F4]">g</span>
          <span className=" text-2xl text-[#EA4335]">l</span>
          <span className=" text-2xl text-[#FBBC05]">e</span>
        </span>
      </button>

      <button
        onClick={handleGithubLogin}
        className="flex items-center gap-3 px-6 py-3 border-l-[2px]   "
      >
        {/* Google Icon */}
        <div className="">
          <Github />
        </div>

        {/* Text */}
        <span className="text-base font-medium text-[#8C8C8C] ">
          Continue with&nbsp;
          <span className=" text-2xl  text-[#fafbfc]">G</span>
          <span className=" text-2xl  text-[#fafbfc]">i</span>
          <span className=" text-2xl  text-[#fafbfc]">t</span>
          <span className=" text-2xl  text-[#fafbfc]">h</span>
          <span className=" text-2xl  text-[#fafbfc]">u</span>
          <span className=" text-2xl  text-[#fafbfc]">b</span>
        </span>
      </button>
    </div>
  );
};

export default OauthProvider;
