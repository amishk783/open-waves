import { LayoutNav } from "@/lib/LayoutNav";
import { ChevronDown } from "lucide-react";

const NavLinks: { service: string }[] = [
  {
    service: "Home",
  },
  {
    service: "Company",
  },
  {
    service: "PortFolio",
  },
  {
    service: "Services",
  },
];

export function NavBar() {

  // const [selected, setService] = useState<>();

  return (
    <ul className="flex xl:flex-row gap-10 list-none py-6">
      {NavLinks.map((navlink) => (
        <li
          key={navlink.service}
          className="px-2 py-1 rounded-full space-y-10 hover:bg-zinc-400  hover:bg-opacity-20"
        >
          <span className="flex gap-1">
            {navlink.service} <ChevronDown />
          </span>

          <LayoutNav/>
        </li>
      ))}
      <li></li>
      <li></li>
    </ul>
  );
}
