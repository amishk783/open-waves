import Image from "next/image";

import { NavBar } from "./NavBar";

export function Header() {

  return (
    <header className="w-full bg-white sticky top-0 z-[1024] border-b-2 border-b-slate">
      <div className="max-container">
        <div className="flex w-full items-center justify-betweeen">
          <div className="flex w-full items-center gap-16">
            <Image src="/logo.png" alt="logo" width={100} height={50} />
            <NavBar />
          </div>
          <div className="m-0 p-0 max-sm:hidden">
            <div className="flex gap-10 items-center">
              <div className="relative   leading-[1] font-normal text-lg px-10 ">
                <a className=" block text-blue-400 font-bold tracking-[0.5px] text-base mb-2 ">
                  Call us
                </a>
                9971545684
              </div>
              <a className="px-6 py-[13px] text-white whitespace-nowrap rounded-full cursor-pointer relative inline-flex overflow-hidden gap-2 align-middle bg-blue-600  z-1 items-center">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
}
