"use client";
 

import Link from "next/link";
import NavLink from "./Navlink";
const links = [
  // { url: "/", title: "Home" },
  { url: "/experiences", title: "Experiences" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {

  return (
    <nav className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 h-16 flex items-center bg-white bg-opacity-70 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 max-w-6xl mx-auto justify-between">
      <div className="">
        <Link
          className="p-1 rounded sm:hover:bg-slate-200 sm:hover:text-slate-950 leading-relaxed text-xl font-mono"
          href="/"
        >
          <span className="">rap</span>
        </Link>
      </div>
      <div id="horizontal-links" className="flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
