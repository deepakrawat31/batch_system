import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footer = [
    {
      title: "links",
      links: [
        {
          to: "home",
          name: "home",
        },
        {
          to: "about",
          name: "about us",
        },
        {
          to: "booking",
          name: "booking",
        },
        {
          to: "blog",
          name: "blog",
        },
      ],
    },
    {
      title: "legal",
      links: [
        {
          to: "terms",
          name: "terms of use",
        },
        {
          to: "policy",
          name: "privacy policy",
        },
        {
          to: "cookie",
          name: "cookie policy",
        },
      ],
    },
    {
      title: "product",
      links: [
        {
          to: "tour",
          name: "take tour",
        },
        {
          to: "chat",
          name: "live chat",
        },
        {
          to: "review",
          name: "review",
        },
      ],
    },
  ];

  return (
    <section className="p-4">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-between gap-10 px-4 py-14 lg:flex-row lg:gap-4">
        <div className="flex flex-col gap-4 text-sm font-medium">
          <span>
            <Image
              src={"/logo.png"}
              alt="logo"
              height={37}
              width={117}
              className="h-8 w-24"
            />
          </span>
          <span className="flex items-center gap-2">
            <IconMailFilled className="text-rose-500" />
            <span>Help@frybix.com</span>
          </span>
          <span className="flex items-center gap-2">
            <IconPhoneFilled className="text-rose-500" />
            <span>+1234 456 678 89</span>
          </span>
        </div>
        {footer.map((data, i) => (
          <div className="flex flex-col gap-4 capitalize" key={i}>
            <h3 className="text-2xl font-medium">{data.title}</h3>
            {data.links.map((link, i) => (
              <Link
                href={link.to}
                key={i}
                className="text-sm font-medium text-black/60 lg:transition-colors lg:hover:text-black lg:focus:text-black lg:focus:outline-none"
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-4 font-medium capitalize">
          <h3 className="text-2xl">newsletter</h3>
          <p className="text-sm text-black/60">stay up to date</p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="enter your email"
              className="h-full w-full max-w-40 rounded bg-slate-200 p-2 font-medium outline-none placeholder:text-sm placeholder:capitalize placeholder:text-black/40 hover:ring-1 hover:ring-black focus:ring-1 focus:ring-black"
            />
            <button className="rounded bg-slate-950 p-4 capitalize text-slate-100 transition-transform hover:scale-90 focus:scale-90 focus:outline-none">
              subscribe
            </button>
          </form>
        </div>
        <span className="absolute inset-x-0 bottom-0 block h-[1px] w-full bg-gradient-to-r from-transparent via-black/20 to-transparent"></span>
      </div>
      <p className="py-10 text-center text-sm font-medium capitalize text-black/60">
        copyright 2022 uifry.com all rights reserved
      </p>
    </section>
  );
}
