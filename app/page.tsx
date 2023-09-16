import { cn } from "@/libs/utils";
import Image from "next/image";

import profilewebImg from "@/images/profile.png";

export default function Home() {
  return (
    <div className="h-[95vh] w-full grid place-content-center text-white">
      <div className="flex items-center">
        <div>
          <div className="mb-10">
            <h2 className="text-4xl text-[#F29FAA] font-extrabold">
              Hi, I&apos;m
            </h2>
            <h1 className="text-6xl text-[#D0273C]  font-extrabold mb-3">
              Name Last Name
            </h1>
            <h3 className="text-2xl font-bold mb-12">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </h3>
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing elit in
              curabitur himenaeos, nam sapien sociosqu et etiam cursus fringilla
              id curae nascetur, commodo turpis aliquam potenti habitasse massa
              cras eros pretium.
            </p>
          </div>
          <a
            className={cn(
              "group text-xl cursor-pointer rounded-xl mt-10 py-4 px-7 font-bold bg-[#D0273C] inline-block relative hover:-translate-y-5 hover:scale-110 transition-all ease-linear"
            )}
          >
            <span className="top-0 left-0 block rounded-xl absolute w-full h-full bg-[#D0273C] "></span>
            <span className="top-2 left-2 block rounded-xl absolute w-full h-full bg-[#630410] z-[-1]  group-hover:translate-x-[-15px] transition-transform ease-linear"></span>
            <span className="relative text-white">Learn about me</span>
          </a>
        </div>
        <div>
          <Image alt="humra" src={profilewebImg} width={1200} />
        </div>
      </div>
    </div>
  );
}
