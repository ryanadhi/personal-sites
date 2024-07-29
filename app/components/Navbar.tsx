"use client";

// import React, { useState } from 'react';
import NavLink from './Navlink';
const links = [
  { url: "/", title: "Home" },
  { url: "/experiences", title: "Experiences" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  return (
    <nav className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 h-16 flex items-center'>
      <div id="horizontal-links" className="flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
