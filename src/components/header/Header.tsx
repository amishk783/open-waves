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
          <div className="m-0 p-0">
            <div className="flex flex-row">
              <div className="flex-col items-center font-normal text-lg px-10">
                <h1 className="mb-1">Call us</h1>
                9971545684
              </div>
              <a className="px-6 my-2 text-white rounded-full cursor-pointer relative flex align-middle bg-blue-600  z-1 items-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
