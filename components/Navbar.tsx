"use client";

import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-full max-w-lg h-[1.7cm] p-1 bg-[#192227] rounded-2xl flex justify-between items-center">
        {/* Left - Logo */}
        <div className="flex items-center gap-6 p-2 ml-1 rounded-2xl bg-white">
          <Link href="#" className=" cursor-pointer">
            <Image
              src="/5e819a5ce865476b73087fd1276e7c3e.jpg"
              alt="Letmerecall logo"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Middle - Links */}
        <div className="hidden md:flex text-[#8C8C8C] text-center gap-10">
          <Link href="/about" className="hover:text-white cursor-pointer">
            About
          </Link>
          <span className="hover:text-white cursor-pointer">Projects</span>
          <Link href="/login" className="hover:text-white cursor-pointer">
            Login
          </Link>
        </div>

        {/* Right - Contact Button */}
        <Link href="">
          <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all cursor-pointer">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};
