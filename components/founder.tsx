import React from 'react'

export default function FounderSection() {
  return (
    <div>

<div className=" bg-[#192227] flex justify-center items-center p-10 rounded-4xl">
          <div className="w-[20cm] h-[15cm] bg-white rounded-4xl p-10">
            <div className="h-[60%] flex justify-center items-center overflow-hidden rounded-4xl">
              <img
                className="object-center h-full w-[15cm] rounded-4xl border-[8px] border-white"
                src="https://letmerecall.vercel.app/_next/image?url=%2FshubhImg.png&w=256&q=75"
                alt=""
              />
            </div>
            <div className="h-[30%] flex justify-center items-center uppercase text-[#192227] text-8xl font-bold">
              Shubhashish
            </div>
            <div className="text-2xl flex justify-center items-center gap-5 uppercase">
              <span className="rounded-2xl font-bold px-2 py-2 bg-[#B08CE1]">nextjs</span>
              <span className="rounded-2xl font-bold px-2 py-2 bg-[#ADE988]">framer-motion</span>
              <span className="rounded-2xl font-bold px-2 py-2 bg-[#2B82B5]">react</span>
              <span className="rounded-2xl font-bold px-2 py-2 bg-[#F9A600]">tailwind</span>
            </div>
          </div>
        </div>

    </div>
  )
}
