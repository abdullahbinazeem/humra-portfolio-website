import { cn } from "@/app/libs/utils";
import { FC } from "react";

interface navbarProps {}
const navbar: FC<navbarProps> = ({}) => {
  return (
    <div className="m-auto flex max-w-[1280px] items-center justify-between px-8 pt-10 text-white  md:px-16 2xl:px-10">
      <div>
        <h1 className="text-7xl font-extrabold text-[#D0273C]">H</h1>
      </div>
      <div className="flex gap-12 text-lg font-semibold ">
        <li>
          <a>
            <p className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:text-[#D0273C]">
              Skills
            </p>
          </a>
        </li>
        <li>
          <a>
            <p className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:text-[#D0273C]">
              About Me
            </p>
          </a>
        </li>
        <li>
          <a>
            <p className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:text-[#D0273C]">
              Experience
            </p>
          </a>
        </li>
        <li>
          <a>
            <p className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:text-[#D0273C]">
              Projects
            </p>
          </a>
        </li>
        <li className="transition-all ease-linear hover:-translate-y-1 hover:scale-105">
          <a
            className={cn(
              " cursor-pointer rounded-md bg-[#D0273C] px-6 py-3 hover:scale-105",
            )}
          >
            <span>Contact</span>
          </a>
        </li>
      </div>
    </div>
  );
};

export default navbar;
