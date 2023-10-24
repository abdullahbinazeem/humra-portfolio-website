"use client";

import { cn } from "@/app/libs/utils";
import {
  getHighlightedTechnologies,
  getTechnologies,
} from "@/sanity/lib/query-utils";
import { Techonologies } from "@/types/Technologies";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function Hero() {
  const [data, setData] = useState<{
    highlighted: Techonologies[];
    data: Techonologies[];
  }>();
  useEffect(() => {
    async function getData() {
      const WorkItems = await getTechnologies();
      const HighLighted = await getHighlightedTechnologies();
      setData({ highlighted: HighLighted, data: WorkItems });
    }
    getData();
  }, []);

  console.log(data);
  return (
    <div className="grid h-full w-full content-center py-40 text-white lg:h-[100vh] lg:p-0">
      <h1 className="mb-6 text-center text-5xl font-extrabold text-[#D0273C] lg:mb-10 lg:text-6xl">
        Skills
      </h1>
      <div className=" mt-10  flex flex-col gap-20 text-white lg:flex-row ">
        <div>
          <h1 className="t mb-8 text-3xl font-bold text-[#D0273C] lg:text-4xl ">
            HIGLIGHTS -
          </h1>
          <ul className="flex flex-col gap-y-10">
            {data?.highlighted.map((item) => (
              <li key={item._id}>
                <div className="flex items-center ">
                  <div className="relative mr-10 grid aspect-square h-32 place-content-center rounded-[30px] bg-[#2E2745]">
                    <Image
                      fill
                      alt={item.name}
                      src={item.icon}
                      className="overflow-hidden rounded-3xl p-5"
                    />
                  </div>
                  <div>
                    <div className="mb-4 flex items-center">
                      <h3 className="mr-4 text-2xl font-bold">{item.name}</h3>
                      <p className="font-thin opacity-50">{item.years} years</p>
                    </div>
                    <p className="font-light">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="m-auto flex-1">
          <div className="flex flex-wrap justify-center gap-5 ">
            {data?.data.map((item) => (
              <div
                key={item._id}
                className="relative mr-10 grid aspect-square h-32 place-content-center rounded-[30px] bg-[#2E2745]"
              >
                <Image
                  fill
                  alt={item.name}
                  src={item.icon}
                  className="overflow-hidden rounded-3xl p-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
