import Link from "next/link";
import React from "react";

const navheaderLinks = ["Tracking Package", "FAQ", "About Us", "Contact Us"];

const Navheader = () => {
  return (
    <div className="hidden md:block border-b border-black/10">
      <nav className="container flex justify-between items-center px-5 fs-nav  text-black/50 h-10">
        <div className="flex items-center gap-6">
          <span>English</span>
          <span>Dollar</span>
        </div>
        <div className="flex items-center gap-6">
          {navheaderLinks.map((link) => (
            <Link key={link} href={link}>
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navheader;
