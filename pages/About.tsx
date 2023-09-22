import Image from "next/image";
import profile from "@/images/aboutprofile.svg";
import { getEducation } from "@/sanity/lib/query-utils";
import { Education } from "@/types/Education";
import { PortableText } from "@portabletext/react";

const EducationItem = ({ education }: { education: Education }) => {
  return (
    <li className=" relative before:absolute before:-left-3 before:top-0 before:h-6 before:w-6 before:rounded-[100%] before:bg-[#D0273C]">
      <div className="ml-14 border-b-[1px] pb-6">
        <div className="flex items-center">
          <h3 className="text-xl font-bold text-[#D0273C]">
            {education.university}
          </h3>
          education.startDate && (
          <p className="ml-4 text-sm font-light text-[#FBB9C1]">
            {education.startDate ? `${education.startDate} -` : ``}
            {education.enrolled ? ` Present` : ` ${education.endDate}`}
          </p>
          )
        </div>
        <div className="text-md mt-4 font-light">
          <PortableText value={education.content} />
        </div>
      </div>
    </li>
  );
};

const About = async ({}) => {
  const EducationItems = await getEducation();

  return (
    <div className="h-full lg:grid lg:h-[100vh] lg:place-content-center">
      <div className=" mt-10 flex flex-col gap-20 py-40 text-white lg:flex-row lg:gap-6 lg:p-0 ">
        <div className="basis-1/2 pr-10">
          <h1 className="mb-6 text-5xl font-extrabold text-[#D0273C] lg:mb-10 lg:text-6xl">
            About Me
          </h1>
          <p className=" text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipiscing elit in curabitur
            himenaeos, nam sapien sociosqu et etiam cursus fringilla id curae
            nascetur, commodo turpis aliquam potenti habitasse massa cras eros
            pretium.Name Lorem ipsum dolor sit amet consectetur adipiscing elit
            in curabitur himenaeos, nam sapien sociosqu et etiam cursus
            fringilla id curae nascetur, commodo turpis aliquam potenti
            habitasse massa cras eros pretium.Name
          </p>
          <div className="relative m-auto w-[400px] text-center transition-all ease-in-out hover:scale-110 ">
            <Image
              src={profile}
              alt="humra profile pic"
              className=" relative mt-10"
            />
            <div className="absolute bottom-20 left-0 right-0 top-0 z-[-1] m-auto h-[200px] w-[200px] animate-ping rounded-[50%] bg-[#D0273C] opacity-50" />
          </div>
        </div>
        <div className="basis-1/2">
          <h2 className="mb-14 text-4xl font-bold">Education</h2>
          <ul className=" relative m-0 flex flex-col gap-10 border-l-2 border-[#D0273C] p-0">
            <div className="absolute -bottom-[10vh] -left-[2px] h-[10vh] border-l-2 border-dashed border-[#D0273C]" />
            {EducationItems.map((education) => (
              <EducationItem education={education} key={education._id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
