"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/hero-section";
import RunwayScroll from "@/components/runfun";
import FounderSection from "@/components/founder";
import AwwwardsLoader from "@/components/ui/LandingLoader";

export default function Home() {
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

  if (showLoader) {
    return (
      <div className="h-screen bg-slate-500 flex items-center justify-center">
        <AwwwardsLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="border-white border-[20px]">
        <div className="relative z-50">
          <Navbar />
        </div>

        <section>
          <HeroSection />
        </section>

        <div className="p-10 rounded-4xl">
          <div className="flex justify-center items-center overflow-hidden bg-[#192227] rounded-4xl p-10">
            <Image
              className="h-[16cm] w-[35cm] border-[3px] border-white rounded-2xl"
              src="https://cdn.prod.website-files.com/66ba51656bf1fb9fa04683d6/675866b9eb3258ba1fc7bc8a_runway-screenshot.webp"
              alt="Runway Screenshot"
            />
          </div>
        </div>

        <section>
          <RunwayScroll />
        </section>

        <section className="p-10 rounded-2xl">
          <FounderSection />
        </section>

        <section>
          <Footer />
        </section>
      </div>

      <div>
        <video
          autoPlay
          loop
          muted
          className="h-[6cm] w-full object-cover"
          src="/aCJfjSdWJ-7kR-ES_footerV2.mp4"
        />
      </div>
    </div>
  );
}
