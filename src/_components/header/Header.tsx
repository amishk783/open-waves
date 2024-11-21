import Image from "next/image";

import { NavBar } from "./NavBar";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-[1024] border-b-2 border-b-slate mb-16">
      <div className="max-container">
        <div className="flex w-full items-center justify-betweeen">
          <div className="flex w-full items-center gap-16">
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
}
