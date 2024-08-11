import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hope for Tomorrow",
  description:
    "Hope for Tomorrow non-profit organization that collaborates with volunteers to deliver humanitarian aid and disaster relief to vulnerable communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} flex flex-col h-screen`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
