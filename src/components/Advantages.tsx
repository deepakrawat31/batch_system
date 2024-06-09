import { IconBell, IconFlare } from "@tabler/icons-react";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className="relative flex flex-col gap-40 p-4" id="about">
      <div className="flex flex-col gap-4 lg:flex-row">
        <span className="flex flex-1 flex-col items-end justify-center gap-8">
          <span>
            <h2 className="font-medium uppercase text-rose-500">advantages</h2>
            <h1 className="text-5xl font-bold capitalize">why choose unifry</h1>
          </span>
          <span className="space-y-2 capitalize">
            <h3 className="flex items-center gap-2 text-2xl font-semibold">
              <span className="rounded-full bg-rose-500 p-2 text-slate-100">
                <IconBell />
              </span>
              <span>clever notifications</span>
            </h3>
            <p className="w-full max-w-lg text-sm text-black/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              minus itaque, reiciendis nulla similique nisi quisquam sunt
              consectetur cupiditate fugiat. Sapiente eum placeat commodi
              tempora ducimus totam molestias provident rerum ea. Aut deleniti
              quos, nostrum perferendis quod perspiciatis sequi eum.
            </p>
          </span>
        </span>
        <span className="relative isolate grid flex-1 place-content-center p-4">
          <Image
            src={"/phone2.png"}
            alt="phone"
            height={500}
            width={300}
            className="rotate-[14deg]"
          />
          <Image
            src={"/rings.png"}
            alt="ring"
            height={550}
            width={550}
            className="absolute -top-10 left-0 -z-30 lg:-top-20 lg:left-20"
          />

          <span className="absolute bottom-4 left-32 -z-40 aspect-square h-48 rounded-full bg-amber-500 blur-2xl filter"></span>
          <span className="absolute bottom-24 left-36 -z-40 aspect-square h-48 rounded-full bg-rose-500 blur-2xl filter"></span>
        </span>
      </div>
      <div className="flex flex-col-reverse gap-4 lg:flex-row">
        <span className="relative isolate grid flex-1 place-content-center p-4">
          <Image
            src={"/phone1.png"}
            alt="phone"
            height={500}
            width={300}
            className="rotate-[14deg]"
          />
          <Image
            src={"/rings.png"}
            alt="ring"
            height={550}
            width={550}
            className="absolute -top-10 left-0 -z-30 lg:-top-20 lg:left-20"
          />

          <span className="absolute bottom-24 right-60 -z-40 aspect-square h-48 rounded-full bg-amber-500 blur-2xl filter"></span>
          <span className="absolute bottom-4 right-52 -z-40 aspect-square h-48 rounded-full bg-rose-500 blur-2xl filter"></span>
        </span>
        <span className="flex flex-1 flex-col items-start justify-center gap-4 capitalize">
          <h3 className="flex items-center gap-2 text-2xl font-semibold">
            <span className="rounded-full bg-rose-500 p-2 text-slate-100">
              <IconFlare />
            </span>
            <span>fully customizable</span>
          </h3>
          <p className="w-full max-w-lg text-sm text-black/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            minus itaque, reiciendis nulla similique nisi quisquam sunt
            consectetur cupiditate fugiat. Sapiente eum placeat commodi tempora
            ducimus totam molestias provident rerum ea. Aut deleniti quos,
            nostrum perferendis quod perspiciatis sequi eum.
          </p>
        </span>
      </div>
      <Image
        src={"/star.png"}
        alt="star"
        height={48}
        width={48}
        className="absolute right-8 top-12 lg:right-20"
      />
      <Image
        src={"/star.png"}
        alt="star"
        height={48}
        width={48}
        className="absolute bottom-28 right-2 lg:bottom-40 lg:right-1/2"
      />
    </section>
  );
}
