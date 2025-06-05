import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";

import { ArrowUp } from "@/icons/ArrowUp";
import OauthProvider from "./ui/OauthProviderBtn";
import Link from "next/link";

export const HeroSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    console.log(loading);
  }, [loading]);
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/auth/user/session`,
          {
            withCredentials: true,
          }
        );
        setIsLoggedIn(response.data.message.isAuthenticated);
      } catch (error) {
        console.error("Session check failed:", error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    // Start the 4 second timer
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    checkSession();

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className="w-full bg-[#192227] p-2 rounded-4xl text-[#192227]  ">
        <div className="h-[13cm] w-full rounded-4xl bg-white flex">
          <div className="w-[75%] h-full flex-col justify-between items-center p-1 gap-5 pl-13">
            <div className="h-[25%] flex justify-start items-center">
              <div className="flex bg-gray-300 rounded-3xl">
                <div className="bg-gray-300 rounded-xl p-2 flex justify-start items-center text-2xl font-semibold">
                  <span>
                    100<span className="text-[#F9A600] font-bold">% </span>
                    Secure Task Management
                  </span>
                </div>
                <Link href='/about' className="bg-[#F9A600] px-5 py-2 rounded-xl font-bold text-2xl">
                  Read Story
                </Link>
              </div>
            </div>
            <div className="flex-col justify-baseline">
              <div className="text-8xl font-semibold text-[#192227] ">
                Never <span className="text-[#2B82B5]">Lose</span> A{" "}
                <span className="text-[#B08CE1]">Thought</span> Again
              </div>
              <div className="pt-10 text-3xl  mt-2 font-medium text-[#444343]">
                Your Digital Second Brain For Capturing, Organizing, And
                Rediscovering Everything That Matters.
              </div>
            </div>
          </div>
          <div className="w-[25%] h-full flex justify-center items-center ">
            <div className="h-[12cm] w-[8cm] bg-transparent rounded-full border-[4px] border-gray-400 overflow-hidden flex justify-center items-center ">
              <img
                src="https://cdn.prod.website-files.com/66ba51656bf1fb9fa04683d6/675866b9eb3258ba1fc7bc8a_runway-screenshot.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2  gap-5 h-[30%]">
          <div className="w-[10cm] h-[4cm] bg-[#B08CE1] border-[3px] border-white rounded-4xl flex justify-center items-center">
            <div className="text-center">
              <div className="text-4xl  font-bold inline-block  mr-[5cm]">
                See
              </div>
              <div className="text-4xl font-extrabold mr-[2cm] ">How</div>

              <span className="text-4xl font-bold ml-[2cm]"> It Works ?</span>
            </div>
          </div>

          <div className="w-[18cm] h-[3cm] border-[3px] border-white rounded-4xl flex justify-center items-center">
            <OauthProvider />
          </div>

          {isLoggedIn ? (
            <Link href="/dashboard"
              className="w-[10cm]  cursor-pointer h-[4cm] bg-[#F9A600] border-[3px] border-white rounded-4xl flex justify-center items-center "
            >
              <span className="text-5xl font-bold">Dashboard</span>

              <span className="rounded-full bg-[#192227] text-[#F9A600] text-4xl h-[70px] w-[70px] flex justify-center items-center border-[4px] border-white">
                <ArrowUp />
              </span>
            </Link>
          ) : (
            <Link href="/"
              className="w-[10cm]  cursor-pointer h-[4cm] bg-[#F9A600] border-[3px] border-white rounded-4xl flex justify-center items-center"
            >
              <span className="text-5xl font-bold">Get Started</span>

              <span className="rounded-full bg-[#192227] text-[#F9A600] text-4xl h-[70px] w-[70px] flex justify-center items-center border-[4px] border-white">
                <ArrowUp />
              </span>
            </Link >
          )}
        </div>
      </div>
    </div>
  );
};
