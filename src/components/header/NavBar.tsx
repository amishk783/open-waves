import { useRef, useState } from "react";

import { Menu2 } from "@/lib/Menu2";
import { ChevronDown } from "lucide-react";
import { Menu0 } from "./Menu0";
import { Menu3 } from "./Menu3";
import { Menu1 } from "./Menu1";

const NavLinks: { id: number; service: string }[] = [
  {
    id: 1,
    service: "Home",
  },
  {
    id: 2,
    service: "Company",
  },
  {
    id: 3,
    service: "PortFolio",
  },
  {
    id: 4,
    service: "Services",
  },
];

export function NavBar() {
  const [hovering, setHovering] = useState<number | null>(null);
  // const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  // const [popoverHeight, setPopoverHeight] = useState<number | null>(null);
  const [isLayoutOpen, setIsLayoutOpen] = useState<boolean>(false);

  return (
    <nav onMouseEnter={() => setHovering(null)}>
      <ul className="flex xl:flex-row gap-10 list-none py-6">
        {NavLinks.map((navlink) => (
          <li
            key={navlink.service}
            onMouseEnter={(event) => setHovering(navlink.id)}
            className="px-2 py-1 rounded-full space-y-10 hover:bg-zinc-400  hover:bg-opacity-20"
          >
            <span
              onMouseEnter={() => {
                setIsLayoutOpen(true);
              }}
              onMouseLeave={() => {
                setIsLayoutOpen(false);
              }}
              className="flex gap-1"
            >
              {navlink.service} <ChevronDown />
            </span>
            {hovering === 0 ? (
              <Menu0 />
            ) : hovering === 1 ? (
              <Menu1 />
            ) : hovering === 2 ? (
              <Menu2 />
            ) : hovering === 3 ? (
              <Menu3 />
            ) : null}
            {/* {typeof hovering === "number" && (
              <div>
               
              </div>
            )} */}
            {/* {isLayoutOpen && <Menu2 />} */}
          </li>
        ))}
      </ul>
    </nav>
  );
}
