import { IconCube, IconFlare, IconHexagon3d } from "@tabler/icons-react";
import Image from "next/image";

export default function Features() {
  return (
    <section
      className="relative flex flex-col-reverse gap-4 p-4 lg:flex-row"
      id="features"
    >
      <div className="relative isolate grid flex-1 place-content-center p-4">
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

        <span className="absolute left-32 top-4 -z-40 aspect-square h-48 rounded-full bg-amber-500 blur-2xl filter"></span>
        <span className="absolute left-36 top-24 -z-40 aspect-square h-48 rounded-full bg-rose-500 blur-2xl filter"></span>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <span>
          <h2 className="font-medium uppercase text-rose-500">features</h2>
          <h1 className="text-5xl font-bold capitalize">unifry premium</h1>
        </span>
        {[0, 1, 2].map((i) => (
          <span key={i} className="space-y-2 capitalize">
            <h3 className="flex items-center gap-2 font-medium">
              {i === 0 ? (
                <IconFlare className="text-rose-500" />
              ) : i === 1 ? (
                <IconHexagon3d className="text-rose-500" />
              ) : (
                <IconCube className="text-rose-500" />
              )}
              <span>budgerting intervals</span>
            </h3>
            <p className="w-full max-w-lg text-sm text-black/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              repudiandae sint repellendus a reiciendis numquam natus.
            </p>
          </span>
        ))}
      </div>
      <span className="absolute -right-20 top-36 -z-40 aspect-square h-48 rounded-full bg-amber-500 blur-2xl filter"></span>
      <span className="absolute -right-28 top-24 -z-40 aspect-square h-48 rounded-full bg-rose-500 blur-2xl filter"></span>
    </section>
  );
}
