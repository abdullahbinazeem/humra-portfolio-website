"use client";

import { getContact } from "@/sanity/lib/query-utils";
import { Personal } from "@/types/Personal";
import React, { useEffect, useState } from "react";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  const [data, setData] = useState<Personal>();
  useEffect(() => {
    async function getData() {
      const ContactInfo = await getContact();
      setData(ContactInfo);
    }
    getData();
  }, []);

  return (
    <div className="grid min-h-[100vh] w-full content-center py-20">
      <div>
        <h2 className="mb-6 text-5xl font-extrabold text-[#D0273C] lg:mb-10 lg:text-6xl">
          Contact
        </h2>

        <div className="mb-8 mt-[4em] w-full items-center justify-evenly gap-10 md:flex lg:w-3/5">
          <div className="mx-0 my-4 flex w-full cursor-pointer flex-row items-center justify-between rounded-[10px] bg-[#fef4f5] p-4 transition-all duration-[0.3s] ease-[ease-in-out] last:bg-[#f2f7fb] hover:shadow-[0_0_25px_#fef4f5] last:hover:shadow-[0_0_25px_#f2f7fb]  ">
            <a
              href="mailto:hello@micael.com"
              className="font-medium no-underline"
            >
              {data?.email}
            </a>
            <AiOutlineMail size={30} color="#111" />
          </div>
          {data?.phone_number && (
            <div className=" mx-0 my-4 flex w-full cursor-pointer flex-row items-center justify-between rounded-[10px] bg-[#fef4f5] p-4 transition-all duration-[0.3s] ease-[ease-in-out] last:bg-[#f2f7fb] hover:shadow-[0_0_25px_#fef4f5] last:hover:shadow-[0_0_25px_#f2f7fb]">
              <a
                href={`tel:${data.phone_number}`}
                className="font-medium no-underline"
              >
                {data.phone_number}
              </a>
              <AiOutlinePhone size={30} color="#111" />
            </div>
          )}
        </div>

        <form action={`https://formsubmit.co/${data?.email}`} method="POST">
          <div className="mt-20 md:px-10 lg:px-20">
            <div className="block w-full md:flex md:gap-10 lg:gap-20">
              <div className="mb-5 flex-1">
                <label className="mb-3 block text-base font-medium text-[#D0273C]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#D0273C] focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex-1">
                <label className="mb-3 block text-base font-medium text-[#D0273C]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#D0273C] focus:shadow-md"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#D0273C]">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="Type your message"
                className="max-h-[300px] min-h-[100px] w-full  rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#D0273C] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#D0273C] px-8 py-3 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
