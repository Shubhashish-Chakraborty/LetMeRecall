"use client";

import Link from "next/link";

const Footer = () => {

  return (
    <footer className="bg-[#192227] h-[11cm] flex justify-center items-center  rounded-4xl ">
      <div className="w-1/2 flex justify-center items-center px-10">
        <p className="text-white text-5xl leading-snug tracking-wide">
          Your&nbsp;
          <span className="text-[#B08CE1] font-semibold">digital</span>
          &nbsp;second brain for&nbsp;
          <span className="text-[#2B82B5] font-semibold">organizing</span>,
          capturing, and rediscovering&nbsp;
          <span className="text-[#ADE988] font-semibold">everything</span> that
          matters.
        </p>
      </div>

      <div className="w-[50%] p-5">
        <div className="bg-white  rounded-4xl">
          <div className="    p-10 flex flex-col justify-center items-center gap-8">
            {/* Row 1 */}
            <div className="flex gap-4">
              <div className="w-[11cm] h-[2cm] bg-[#F9A600] text-5xl flex items-center justify-center rounded-full   border-black border-[2px]   border-b-[5px]  border-r-[10px]">
                <Link href="" target="_blank" rel="noopener noreferrer">
                  {" "}
                  Github
                </Link>
              </div>
              <div className="w-[5cm] h-[2cm] bg-[#2B82B5] text-5xl flex items-center justify-center rounded-full  border-black border-[2px]   border-b-[5px]  border-r-[10px]">
                <Link href="" target="_blank" rel="noopener noreferrer">
                  {" "}
                  Twitter{" "}
                </Link>
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-[16cm] h-[2cm] bg-[#ADE988] text-5xl flex items-center justify-center rounded-full  border-black border-[2px]   border-b-[5px]  border-r-[10px]">
              <Link href="" target="_blank" rel="noopener noreferrer">
                {" "}
                LinkedIn
              </Link>
            </div>

            {/* Row 3 */}
            <div className="flex gap-4">
              <div className="w-[5cm] h-[2cm] bg-[#B08CE1] text-5xl flex items-center justify-center rounded-full  border-black border-[2px]   border-b-[5px]  border-r-[10px]">
                <Link href="" target="_blank" rel="noopener noreferrer">
                  {" "}
                  Email{" "}
                </Link>
              </div>
              <div className="w-[11cm] h-[2cm] bg-[#192227] text-5xl flex items-center justify-center rounded-full text-[#F9A600]  border-black border-[2px]   border-b-[5px]  border-r-[10px]">
                <Link href="" target="_blank" rel="noopener noreferrer">
                  {" "}
                  Let's Contact{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
