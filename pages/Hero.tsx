import { cn } from "@/libs/utils";
import Image from "next/image";

import profilewebImg from "@/images/profile.png";

export default function Hero() {
  return (
    <div className="grid h-full w-full place-content-center text-white lg:h-[88vh]">
      <div className="flex flex-col-reverse items-center lg:flex-row">
        <div className="basis-1/2">
          <div className="mb-4 lg:mb-10">
            <h2 className="text-3xl font-extrabold text-[#F29FAA] lg:text-4xl">
              Hi, I&apos;m
            </h2>
            <h1 className="mb-3 text-5xl font-extrabold  text-[#D0273C] lg:text-6xl">
              Name Last Name
            </h1>
            <h3 className="mb-6 text-xl font-bold lg:mb-12 lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </h3>
            <p className="text-md font-light lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit in
              curabitur himenaeos, nam sapien sociosqu et etiam cursus fringilla
              id curae nascetur, commodo turpis aliquam potenti habitasse massa
              cras eros pretium.
            </p>
          </div>
          <a
            className={cn(
              "group relative mt-10 inline-block animate-bounce cursor-pointer rounded-xl bg-[#D0273C] px-7 py-4 text-xl font-bold transition-all ease-linear hover:-translate-y-5 hover:scale-110 hover:animate-none",
            )}
            href="#about"
          >
            <span className="absolute left-0 top-0 block h-full w-full rounded-xl bg-[#D0273C]"></span>
            <span className="absolute left-0 top-0 block h-full w-full rounded-xl bg-[#D0273C] "></span>
            <span className="absolute left-2 top-2 z-[-1] block h-full w-full rounded-xl bg-[#630410]  transition-transform ease-linear group-hover:translate-x-[-15px]"></span>
            <span className="relative text-white">Learn about me</span>
          </a>
        </div>
        <div className="basis-1/2 ">
          <Image
            alt="humra"
            src={profilewebImg}
            className="w-[300px] lg:float-right lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
