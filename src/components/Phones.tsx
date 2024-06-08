import { IconBrandAppleFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function Phones() {
  return (
    <section className="p-4" id="pricing">
      <div className="relative isolate mx-auto flex min-h-64 w-full max-w-6xl flex-col items-start justify-center gap-4 overflow-hidden rounded-md bg-slate-950 px-4 py-4 text-slate-100 lg:min-h-80 lg:px-20">
        <h2 className="text-5xl font-bold capitalize">ready to get started?</h2>
        <p className="w-full max-w-lg font-medium text-slate-100/60">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          officia perspiciatis labore.
        </p>
        <button className="flex w-fit items-center gap-2 rounded bg-slate-100 p-4 font-medium capitalize text-black lg:transition-all lg:hover:gap-4 lg:focus:gap-4 lg:focus:outline-none">
          <span>download app</span>
          <IconBrandAppleFilled />
        </button>
        <Image
          src={"/phones.png"}
          alt="phones"
          height={300}
          width={400}
          className="absolute -right-8 top-8 -z-20 hidden lg:block"
        />
        <Image
          src={"/star2.png"}
          alt="star"
          height={40}
          width={40}
          className="absolute bottom-8 right-8 z-30 rotate-45 lg:left-1/3 lg:right-auto"
        />
      </div>
    </section>
  );
}
