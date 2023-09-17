import { cn } from "@/libs/utils";
import { FC } from "react";

interface navbarProps {}
const navbar: FC<navbarProps> = ({}) => {
  return (
    <div className="flex justify-between pt-10 text-white items-center px-8 md:px-16 2xl:px-10  max-w-[1280px] m-auto">
      <div>
        <h1 className="text-7xl font-extrabold text-[#D0273C]">H</h1>
      </div>
      <div className="flex gap-12 font-semibold text-lg ">
        <li>
          <a>
            <p className="cursor-pointer hover:text-[#D0273C] transition-all duration-200 hover:-translate-y-1 hover:scale-105">
              Skills
            </p>
          </a>
        </li>
        <li>
          <a>
            <p className="cursor-pointer hover:text-[#D0273C] transition-all duration-200 hover:-translate-y-1 hover:scale-105">
              About Me
            </p>
          </a>
        </li>
        <li>
          <a>
            <p className="cursor-pointer hover:text-[#D0273C] transition-all duration-200 hover:-translate-y-1 hover:scale-105">
              Experience
            </p>
          </a>
        </li>
        <li>
          <a>
            <p className="cursor-pointer hover:text-[#D0273C] transition-all duration-200 hover:-translate-y-1 hover:scale-105">
              Projects
            </p>
          </a>
        </li>
        <li className="hover:scale-105 hover:-translate-y-1 transition-all ease-linear">
          <a
            className={cn(
              " cursor-pointer rounded-md px-6 py-3 bg-[#D0273C] hover:scale-105"
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
