import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  open: boolean;
  handleClose: () => void;
}
const Drawer: FC<DrawerProps> = ({ open, handleClose }) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-40 w-full h-screen p-4 overflow-y-auto transition-transform bg-white -translate-x-full md:hidden",
        {
          "translate-x-0": open,
        },
      )}
      tabIndex={-1}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image width={75} height={40} src={"/logo.png"} alt="logo" priority />
        <p className="text-primary leading-tight font-semibold">
          Hop for <span className="block">Tomorrow</span>
        </p>
      </Link>
      <button
        onClick={handleClose}
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
      >
        <X className="w-7 h-7" />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-10 overflow-y-auto">
        <ul className="text-center space-y-6 font-light">
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
          <li>
            <Button>Get Started</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
