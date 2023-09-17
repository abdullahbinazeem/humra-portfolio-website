import { FC } from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { GoDot, GoDotFill } from "react-icons/go";

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
          className=" px-8 md:px-16 2xl:px-10 max-w-[1280px] m-auto"
          id={slug}
        >
          {Page}
        </div>

        <div className="hidden lg:block absolute bottom-5 left-10">
          <div className="flex flex-col gap-5">
            <a href="">
              <AiFillGithub
                size={30}
                className=" text-[#fff] hover:text-[#D0273C] hover:scale-125 transition"
              />
            </a>
            <a href="">
              <AiOutlineLinkedin
                size={30}
                className=" text-[#fff] hover:text-[#D0273C] hover:scale-125 transition"
              />
            </a>
          </div>
        </div>
        <div className=" hidden lg:block absolute  top-[50%] bottom-[50%] right-10">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a href={`#${item.slug}`}>
                {slug == item.slug ? (
                  <GoDotFill
                    size={30}
                    className="text-[#D0273C] scale-110 animate-pulse"
                  />
                ) : (
                  <GoDot
                    size={30}
                    className=" text-[#fff] hover:text-[#D0273C] hover:scale-110 transition"
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
