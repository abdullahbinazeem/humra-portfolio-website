import { FC } from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { GoDot, GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import MotionWrap from "./MotionWrap";

interface SectionProps {
  name: string;
  slug: string;
  page: JSX.Element;
  navigation: {
    name: string;
    slug: string;
    page: JSX.Element;
  }[];
}
const Section: FC<SectionProps> = ({ name, slug, page: Page, navigation }) => {
  return (
    <div>
      <div className="relative ">
        <div
          className=" m-auto max-w-[1280px] px-8 md:px-16 2xl:px-10"
          id={slug}
        >
          <MotionWrap>{Page}</MotionWrap>
        </div>

        <div className="absolute bottom-5 left-10 hidden lg:block">
          <div className="flex flex-col gap-5">
            <a href="">
              <AiFillGithub
                size={30}
                className=" text-[#fff] transition hover:scale-125 hover:text-[#D0273C]"
              />
            </a>
            <a href="">
              <AiOutlineLinkedin
                size={30}
                className=" text-[#fff] transition hover:scale-125 hover:text-[#D0273C]"
              />
            </a>
          </div>
        </div>
        <div className=" absolute bottom-[50%] right-10  top-[50%] hidden lg:block">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a href={`#${item.slug}`}>
                {slug == item.slug ? (
                  <GoDotFill
                    size={30}
                    className="scale-110 animate-pulse text-[#D0273C]"
                  />
                ) : (
                  <GoDot
                    size={30}
                    className=" text-[#fff] transition hover:scale-110 hover:text-[#D0273C]"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
