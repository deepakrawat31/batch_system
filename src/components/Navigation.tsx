"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const links = [
    {
      link: "home",
      to: "/",
    },
    {
      link: "about us",
      to: "#about",
    },
    {
      link: "pricing",
      to: "#pricing",
    },
    {
      link: "features",
      to: "#features",
    },
  ];

  const [smallScreen, setSmallScreen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSmallScreen(true);
    } else setSmallScreen(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-b-black/30 bg-slate-100/40 p-4 backdrop-blur-sm backdrop-filter">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <nav className="flex items-center gap-8">
          <span>
            <Image
              src={"/logo.png"}
              alt="logo"
              height={37}
              width={117}
              className="h-8 w-24"
            />
          </span>
          {!smallScreen && (
            <span className="flex items-center gap-2 font-medium capitalize">
              {links.map((link, i) => (
                <Link
                  href={link.to}
                  key={i}
                  className="transition-colors hover:text-rose-500 focus:text-rose-500 focus:outline-none"
                >
                  {link.link}
                </Link>
              ))}
            </span>
          )}
        </nav>
        <button className="rounded bg-slate-900 px-9 py-3 font-medium capitalize text-slate-100 transition-all hover:scale-90 hover:bg-transparent hover:text-black hover:ring-1 hover:ring-slate-900 focus:scale-90 focus:bg-transparent focus:text-black focus:outline-none focus:ring-1 focus:ring-slate-900">
          download
        </button>
      </div>
    </header>
  );
}
