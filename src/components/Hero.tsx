import {
  IconArrowNarrowRight,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="p-4">
      <div className="mx-auto flex w-full max-w-6xl flex-col pt-20 lg:flex-row">
        <div className="relative space-y-8 lg:flex-[2]">
          <h1 className="text-balance text-6xl font-bold capitalize">
            make the best financial decisions
          </h1>
          <p className="w-full max-w-2xl text-black/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            veritatis dolores at ipsum error architecto eveniet aperiam
            explicabo qui consequuntur?
          </p>
          <span className="flex flex-col items-center gap-6 lg:flex-row">
            <button className="flex items-center gap-3 rounded bg-slate-950 px-6 py-3 font-medium capitalize text-slate-100 transition-all lg:hover:gap-6 lg:focus:gap-6 lg:focus:outline-none">
              <span>get started</span>
              <IconArrowNarrowRight stroke={1} />
            </button>
            <button className="flex items-center gap-3 rounded px-6 py-3 font-medium capitalize transition-all lg:hover:gap-6 lg:focus:gap-6 lg:focus:outline-none lg:focus:ring-1 lg:focus:ring-black">
              <IconPlayerPlayFilled className="rounded-full p-1 ring-1 ring-black" />
              <span>watch video</span>
            </button>
          </span>
          <span className="relative block h-fit w-fit p-4">
            <span className="relative block">
              <Image src={"/tags.png"} alt="tags" height={300} width={500} />
              <span className="absolute -left-[27px] bottom-[57px] -z-10 h-fit -rotate-[25deg] text-7xl font-bold uppercase lg:-left-9 lg:bottom-[88px] lg:text-8xl">
                a
              </span>
            </span>
            <Image
              src={"/star.png"}
              alt="star"
              height={48}
              width={48}
              className="absolute left-20 top-12"
            />
            <Image
              src={"/star.png"}
              alt="star"
              height={40}
              width={40}
              className="absolute bottom-14 right-12 rotate-45"
            />
          </span>
          <span className="absolute -top-8 left-44 -z-10 aspect-square h-48 rounded-full bg-amber-500 blur-2xl filter"></span>
          <span className="absolute -top-20 left-48 -z-10 aspect-square h-48 rounded-full bg-rose-500 blur-2xl filter"></span>
          <Image
            src={"/star.png"}
            alt="star"
            height={40}
            width={40}
            className="absolute -left-28 -top-20 rotate-12"
          />
        </div>
        <div className="relative isolate flex-1 p-4">
          <Image
            src={"/phone1.png"}
            alt="phone"
            height={500}
            width={250}
            className=""
          />
          <Image
            src={"/phone2.png"}
            alt="phone"
            height={500}
            width={250}
            className="absolute left-14 top-14 -z-20 lg:left-24"
          />
          <Image
            src={"/phone1.png"}
            alt="phone"
            height={500}
            width={250}
            className="absolute left-24 top-24 -z-30 lg:left-44"
          />
          <Image
            src={"/rings.png"}
            alt="phone"
            height={800}
            width={800}
            className="absolute -top-10 left-0 -z-40 lg:left-10"
          />

          <span className="absolute left-10 top-60 -z-40 aspect-square h-48 rounded-full bg-amber-500 blur-2xl filter"></span>
          <span className="absolute left-6 top-64 -z-40 aspect-square h-48 rounded-full bg-rose-500 blur-2xl filter"></span>
        </div>
      </div>
    </main>
  );
}
