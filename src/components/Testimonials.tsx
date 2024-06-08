"use client";

import { IconQuote, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const testomonies = [
    {
      id: 0,
      name: "nick jonas",
      title: "the best financial accounting app ever!",
      text: "I have been using the unifry accounting app for my small business and I must say, it has been a game changer. This app is highly customizable, allowing me to tailor it to fit the specific needs of my business. It has simplified my accounting processes and saved me a lot of time and effort. The user-friendly interface makes it easy for me to navigate and track my finances.",
    },
    {
      id: 1,
      name: "karl hilton",
      title: "for my accounting needs!",
      text: "I have been using unifry for my accounting needs and I must say, it has been a game changer for my business. The app is incredibly user-friendly and the interface is fresh and modern. It has made managing my finances so much easier and efficient.",
    },
    {
      id: 2,
      name: "gill peak",
      title: "time saver!",
      text: "I would recommend unifry for anyone trying to get the word out about their business. It has saved me so much time!",
    },
    {
      id: 3,
      name: "andy mull",
      title: "to next level!",
      text: "If you want to take your business to the next level, use unifry and don't look any further.",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(0);

  const filteredTestimony = testomonies.filter(
    (user) => user.id === selectedUser,
  );

  return (
    <section className="flex flex-col gap-10 p-4 lg:gap-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-medium uppercase">testimonal</h3>
        <h2 className="w-full max-w-md text-balance text-center text-5xl font-bold capitalize">
          what our users say about us?
        </h2>
      </div>
      <div className="flex flex-col-reverse gap-4 lg:flex-row">
        <div className="relative my-40 flex flex-1 items-center justify-center">
          <span className="relative rounded-full border-2 border-black bg-slate-200 p-10">
            <IconUser size={60} stroke={1} />
            <span className="absolute -right-6 top-1/2 rounded-full border-2 border-black bg-rose-400 p-4 text-slate-100">
              <IconQuote />
            </span>
          </span>
          <Image
            src={"/rings.png"}
            alt="ring"
            height={550}
            width={550}
            className="absolute -left-4 -top-32 -z-30 lg:-top-60 lg:left-14"
          />
          <Image
            src={"/star.png"}
            alt="star"
            height={48}
            width={48}
            className="absolute -top-24 right-4 lg:-top-20 lg:right-32"
          />
          <span className="absolute left-44 top-0 -z-40 aspect-square h-48 rounded-full bg-amber-500 blur-2xl filter"></span>
          <span className="absolute left-48 top-14 -z-40 aspect-square h-48 rounded-full bg-rose-500 blur-2xl filter"></span>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          {filteredTestimony.map((testimony) => (
            <span key={testimony.id} className="flex flex-col gap-6">
              <h5 className="w-full max-w-xl text-2xl font-bold capitalize">
                {testimony.title}
              </h5>
              <p className="w-full max-w-xl text-pretty font-medium capitalize tracking-wide">
                <IconQuote className="float-start text-red-500" size={32} />{" "}
                {testimony.text}
              </p>
              <span className="font-bold uppercase text-rose-500">
                {testimony.name}
              </span>
            </span>
          ))}
          <span className="flex items-center gap-4">
            {testomonies.map((user) => (
              <button
                key={user.id}
                onClick={() => setSelectedUser(user.id)}
                className={`rounded-full border-2 border-black bg-slate-200 p-2 lg:transition-opacity lg:hover:opacity-100 lg:focus:opacity-100 lg:focus:outline-none ${selectedUser === user.id ? "" : "opacity-40"}`}
              >
                <IconUser />
              </button>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
