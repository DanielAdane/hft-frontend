"use client";

import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import Button from "./ui/button";
import Link from "next/link";
import Drawer from "./drawer";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="py-4">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image width={75} height={40} src={"/logo.png"} alt="logo" priority />
          <p className="text-primary leading-tight font-semibold">
            Hop for <span className="block">Tomorrow</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 font-light">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/faqs">FAQs</Link>
          </li>
        </ul>
        <Button className="hidden md:block">Get Started</Button>

        {/* Mobile Menu */}
        <Drawer open={open} handleClose={() => setOpen(false)} />
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="md:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Menu className="w-7 h-7" />
          <span className="sr-only">Close menu</span>
        </button>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
