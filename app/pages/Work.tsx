"use client";

import { getWork } from "@/sanity/lib/query-utils";
import { useEffect, useState } from "react";

import Image from "next/image";

import { Work } from "@/types/Work";

const Work = ({}) => {
  const [data, setData] = useState<Work[]>();
  useEffect(() => {
    async function getData() {
      const WorkItems = await getWork();
      setData(WorkItems);
    }
    getData();
  }, []);

  return (
    <div className="h-full py-40 lg:grid lg:content-center lg:py-64">
      <div className=" mt-10 gap-20 text-white lg:gap-6 ">
        <h1 className="mb-20 text-5xl font-extrabold text-[#D0273C] lg:text-6xl">
          Work Timeline
        </h1>
        <ul className="relative m-0 flex flex-col gap-36 border-l-2 border-[#D0273C] p-0 lg:ml-[150px]">
          <div className="absolute -bottom-[10vw] -left-[2px] h-[10vw] border-l-2 border-dashed border-[#D0273C]" />
          {data?.map((item) => (
            <li
              key={item._id}
              className="relative before:absolute before:-left-3 before:top-0 before:h-6 before:w-6 before:rounded-[100%] before:bg-[#D0273C]"
            >
              <div className="absolute left-[40px] top-0 lg:left-[-160px]">
                <p className="text-sm opacity-50">
                  {item.current ? "Present" : item.startDate}
                </p>
              </div>
              <div className="ml-10 flex flex-col gap-8 lg:flex-row lg:gap-14">
                <div className=" relative mt-10 aspect-[4/3] min-w-[200px] max-w-[400px] flex-1 rounded-3xl bg-[#0D091A] lg:mt-0 lg:min-w-[300px]">
                  <Image
                    fill
                    alt={item.title}
                    src={item.image}
                    className="overflow-hidden rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#D0273C] lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-md mt-4 p-0 font-light lg:pr-32">
                    {item.description}
                  </p>
                  <a
                    className={
                      "mt-10 inline-block cursor-pointer rounded-md bg-[#D0273C] px-10 py-3 transition-all ease-in-out hover:-translate-y-2 hover:scale-110"
                    }
                    href={item.url}
                    target="_blank"
                  >
                    <span>View</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
