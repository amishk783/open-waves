import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const NavLinks = [
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
    service: "Portfolio",
  },
  {
    id: 4,
    service: "Services",
  },
];

export function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll behavior for showing/hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsVisible(isScrollingUp || currentScrollPos < 270);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={clsx(
        "flex items-center fixed top-0 left-0 w-full h-20 transition-transform duration-500 ease-in-out z-50 bg-white",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 w-full">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              <Image src="/logo.png" alt="contact" width={130} height={34} />
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-10">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href="#"
                className="text-black hover:text-blue-600 px-3 py-2 text-lg font-normal border-transparent hover:border-blue-600 transition duration-300"
              >
                {link.service}
              </Link>
            ))}
          </div>

          {/* Contact Us on the right */}
          <button className="hidden md:flex h-12 items-center bg-red-600 rounded-full focus:outline-none shadow-lg hover:scale-105 duration-100">
            <Link
              href="#"
              className="text-white px-3 py-2 rounded-md text-base font-semibold"
            >
              Contact Us
            </Link>
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href="#"
                className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium border-b-2 border-transparent hover:border-blue-600 transition duration-300"
              >
                {link.service}
              </Link>
            ))}
            <Link
              href="#"
              className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium border-b-2 border-transparent hover:border-blue-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
