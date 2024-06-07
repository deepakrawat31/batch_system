import {
  IconArrowNarrowRight,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="p-4">
      <div className="mx-auto flex w-full max-w-6xl flex-col py-20 lg:flex-row">
        <div className="relative flex-[2] space-y-8">
          <h1 className="text-balance text-6xl font-bold capitalize">
            make the best financial decisions
          </h1>
          <p className="text-black/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            veritatis dolores at ipsum error architecto eveniet aperiam
            explicabo qui consequuntur?
          </p>
          <span className="flex items-center gap-6">
            <button className="flex items-center gap-3 rounded bg-slate-900 px-6 py-3 font-medium capitalize text-slate-100 transition-all lg:hover:gap-6 lg:focus:gap-6">
              <span>get started</span>
              <IconArrowNarrowRight stroke={1} />
            </button>
            <button className="flex items-center gap-3 rounded px-6 py-3 font-medium capitalize transition-all lg:hover:gap-6 lg:focus:gap-6">
              <IconPlayerPlayFilled className="rounded-full p-1 ring-1 ring-black" />
              <span>watch video</span>
            </button>
          </span>
          <span className="relative block">
            <Image src={"/tags.png"} alt="tags" height={300} width={500} />
            <span className="absolute -left-9 bottom-[88px] -rotate-[25deg] text-8xl font-bold uppercase">
              a
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
              className="absolute bottom-24 right-32 rotate-45"
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
        <div className="flex-1 bg-rose-300"></div>
      </div>
    </main>
  );
}
