"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import AuthInput from "@/components/ui/AuthInput";
import { Button } from "@/components/ui/Button";
import LandingCard1 from "@/components/ui/LandingCard1";
import { EnterDoor } from "@/icons/EnterDoor";
import { FileStack } from "@/icons/FileStack";
import { QuestionMark } from "@/icons/QuestionMark";
import { Save } from "@/icons/Save";
import { Search } from "@/icons/Search";
import Image from "next/image";
import { ThanksForVisit } from "@/components/ui/ThanksForVisit";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";
import Footer from "@/components/Footer";
import AwwwardsLoader, { LandingLoader } from "@/components/ui/LandingLoader";
import OauthProvider from "@/components/ui/OauthProviderBtn";
import { HeroSection } from "@/components/hero-section";
import RunwayScroll from "@/components/runfun";
import FounderSection from "@/components/founder";

// Type augmentation for Navigator
declare global {
    interface Navigator {
        brave?: {
            isBrave?: unknown;
        };
    }
}

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        console.log(loading)
    }, [loading]);

    // Brave detection and alert
    useEffect(() => {
        const isBrave = navigator.brave !== undefined ||
            navigator.userAgent.includes('Brave');

        if (isBrave) {
            const alertDiv = document.createElement('div');
            alertDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                max-width: 400px;
                padding: 20px;
                background: #f0f3ff;
                border-left: 5px solid #4C6EF5;
                border-radius: 4px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                z-index: 9999;
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                color: #333;
                line-height: 1.5;
            `;

            alertDiv.innerHTML = `
                <button style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
                    color: #666;
                " onclick="this.parentNode.remove()">×</button>
                <strong style="display: block; margin-bottom: 10px; color: #4C6EF5">
                    <svg width="18" height="18" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 8px;">
                        <path fill="#4C6EF5" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
                    </svg>
                    Brave Browser Settings Required
                </strong>
                <p>For login to work properly:</p>
                <ol style="padding-left: 20px; margin: 10px 0;">
                    <li>Click the <strong>Brave Shields icon</strong> (🦁) in address bar</li>
                    <li>Select <strong>"Advanced Controls"</strong></li>
                    <li>Under <strong>"Cookies"</strong>, choose <strong>"Allow all cookies"</strong></li>
                    <li><strong>Refresh</strong> the page</li>
                </ol>
                <p style="font-size: 0.9em; color: #666; margin-top: 10px;">
                    <em>Note: You can re-enable shields after logging in.</em><br>
                    This is required because Brave blocks authentication cookies by default.
                </p>
            `;

            document.body.appendChild(alertDiv);
            setTimeout(() => alertDiv.remove(), 20 * 1000);
        }
    }, []);
     
    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/auth/user/session`, {
                    withCredentials: true
                });
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

    // Background animation values
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Text animation values
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

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
          <HeroSection  />
        </section>

        <div className="p-10 rounded-4xl">
          <div className="flex justify-center items-center overflow-hidden bg-[#192227] rounded-4xl p-10">
            <img
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