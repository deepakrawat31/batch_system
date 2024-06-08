import Image from "next/image";

export default function Faq() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 p-4">
      <div className="relative flex flex-col gap-2">
        <h3 className="font-medium uppercase text-rose-500">faq</h3>
        <h2 className="w-full max-w-2xl text-5xl font-bold capitalize">
          frequently asked questions
        </h2>
        <Image
          src={"/star.png"}
          alt="star"
          height={40}
          width={40}
          className="absolute bottom-0 right-40 rotate-45"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`flex flex-col gap-2 rounded-md p-4 ${i === 1 || i === 2 || i === 5 ? "" : "bg-rose-500 text-slate-100"}`}
          >
            <h4 className="w-full max-w-sm text-2xl font-bold capitalize">
              the best financial accounting app ever!
            </h4>
            <p className="font-medium capitalize">
              {`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              sequi nihil laborum delectus esse nulla amet magnam omnis."`}
            </p>
          </span>
        ))}
      </div>
    </section>
  );
}
