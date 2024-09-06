"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion, stagger } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projectss", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};

const listVariants={
  closed:{
    x:"100vw"
  },
  opened:{
    x:0,
    transition:{
      staggerChildren:0.2
    }
  }
}

const listItemsVariants={
  closed:{
    x:-10,
    opacity:0
  },
  opened:{
   x:0,
   opacity:1
  }
}

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <div className="hidden md:flex gap-4 text-white justify-start font-thin">
        {links.map((link) => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="txt-sm bg-grey-to-purple rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white font-thin mr-2">Rajeen</span>
          <span className="w-12 h- rounded bg-white text-black flex  items-center justify-center">
            .DEV
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-6 w-1/3 justify-end">
        <Link href="#">
          <Image
            src="/github-mark-white.svg"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image src="/icons8-linkedin.svg" alt="logo" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image
            src="/medium-white-icon.svg"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/icons8-stack-overflow.svg"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* Responsive MENU */}
      <div className="md:hidden">
        {/*MENU Button*/}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <motion.div
            variants={topVariants}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-grey-to-purple rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-grey-to-purple rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-grey-to-purple rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu list */}
        {menuOpen && (
          <motion.div  variants={listVariants} initial="closed"  animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div variants={listItemsVariants} className="" key={link.title}>
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
