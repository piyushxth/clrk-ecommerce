import Home from "@/app/(root)/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navlinks = ["All Categories", "Gift Cards", "Special Events"];

const Navbar = () => {
  return (
    <header className="z-10">
      <nav className="flex items-center justify-between mt-2 py-2 lg:mt-5 lg:py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search-icon lucide-search cursor-pointer"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
        <ul className="hidden lg:flex items-center gap-6 w-[140px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
        </ul>
        <Image
          src="/client/Clrk.png"
          alt="logo"
          width={100}
          height={100}
          className="w-20 h-auto"
        />{" "}
        <ul className="hidden lg:flex items-center gap-6 w-[140px]">
          <li className="cursor-pointer text-white">About</li>
          <li className="cursor-pointer text-white">Services</li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart-icon lucide-shopping-cart cursor-pointer text-white"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </nav>
    </header>
  );
};

export default Navbar;
