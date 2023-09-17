import Image from "next/image";
import profile from "@/images/aboutprofile.svg";

const About = ({}) => {
  return (
    <div className="h-full lg:h-[100vh] lg:grid lg:place-content-center">
      <div className=" mt-10 py-40 lg:p-0 lg:flex-row lg:gap-6 gap-20 flex-col flex text-white ">
        <div className="basis-1/2 pr-10">
          <h1 className="lg:text-6xl text-5xl font-extrabold text-[#D0273C] mb-6 lg:mb-10">
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
          <div className="relative text-center hover:scale-110 transition-all ease-in-out w-[400px] m-auto ">
            <Image
              src={profile}
              alt="humra profile pic"
              className=" mt-10 relative"
            />
            <div className="absolute w-[200px] h-[200px] rounded-[50%] opacity-50 bg-[#D0273C] top-0 bottom-20 animate-ping m-auto left-0 right-0 z-[-1]" />
          </div>
        </div>
        <div className="basis-1/2">
          <h2 className="text-4xl font-bold mb-14">Education</h2>
          <ul className=" border-l-2 relative border-[#D0273C] flex flex-col gap-10 p-0 m-0">
            <div className="absolute h-[10vh] -bottom-[10vh] -left-[2px] border-l-2 border-[#D0273C] border-dashed" />
            <li className=" relative before:absolute before:top-0 before:-left-3 before:w-6 before:h-6 before:rounded-[100%] before:bg-[#D0273C]">
              <div className="ml-14 pb-6 border-b-[1px]">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold text-[#D0273C]">
                    University of British Columbia
                  </h3>
                  <p className="ml-4 text-sm text-[#FBB9C1] font-light">
                    Sep 2024 - June 2028
                  </p>
                </div>
                <p className="font-light text-md mt-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit in
                  curabitur himenaeos, nam Lorem ipsum dolor sit am
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
