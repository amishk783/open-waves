import Image from "next/image";
import { useState } from "react";
import { Form } from "@/_components/Form";
export type Formdata = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};

export function ContactArea() {
  return (
    <section className="scale-90">
      <div className="flex max-container xl:space-x-10 max-sm:space-x-0 mb-40 flex-col xl:flex-row md:gap-10 xl:gap-0">
        <Form />
        <div className="flex flex-col md:flex-row gap-10 xl:w-full">
          <div
            className="flex justify-center items-center px-16 py-12 w-full bg-red-50 rounded-xl max-md:px-[5px] max-sm:px-1 max-sm:py-2 max-md:mt-6"
            aria-label="Statistics"
          >
            <div className="flex flex-col mt-28 max-w-full w-[191px] max-md:mt-10">
              <div className="flex flex-col pt-1.5 pr-14 pb-12 border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:pr-5">
                <div className="flex gap-2 justify-between leading-[100%] text-neutral-800">
                  <div className="flex-grow text-4xl font-medium">22+ </div>
                  <div className="flex-grow self-start mt-3 text-xl">Years</div>
                </div>
                <div className="mt-5 text-lg leading-5 text-[#97203E] whitespace-nowrap">
                  Field Experience
                </div>
              </div>
              <div className="flex flex-col pt-1.5 pr-6 pb-12 mt-12 border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:pr-2 max-md:mt-10">
                <div className="flex gap-2 justify-between leading-[100%] text-neutral-800">
                  <div className="flex-grow text-4xl font-medium">950+ </div>
                  <div className="flex-grow self-start mt-3 text-xl">
                    Projects
                  </div>
                </div>
                <div className="mt-4 mb-1 text-lg leading-5 text-[#97203E] whitespace-nowrap">
                  Done Around World
                </div>
              </div>
              <div className="flex flex-col pt-1.5 pr-11 pb-12 mt-12 whitespace-nowrap border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:pr-5 max-md:mt-10">
                <div className="text-4xl font-medium leading-9 text-neutral-800">
                  99%
                </div>
                <div className="mt-5 mb-1 text-lg leading-5 text-[#97203E]">
                  Client Satisfaction
                </div>
              </div>
              <div className="flex flex-col pt-1.5 pr-12 pb-12 mt-12 border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:pr-5 max-md:mt-10">
                <div className="flex gap-1 justify-between leading-[100%] text-neutral-800">
                  <div className="flex-grow text-4xl font-medium">1995+ </div>
                  <div className="flex-grow self-start mt-3 text-xl">Year</div>
                </div>
                <div className="mt-5 mb-1 text-lg leading-5 text-[#97203E] whitespace-nowrap">
                  Established On
                </div>
              </div>
              <div className="flex gap-2.5 justify-between mt-12 leading-[100%] text-neutral-800 max-md:mt-10">
                <div className="text-4xl font-medium">2 </div>
                <div className="flex-auto self-start mt-3 text-xl">Mins</div>
              </div>
              <div className="mt-5 text-lg leading-5 text-[#97203E]">
                Response Time
              </div>
            </div>
          </div>
          <div className="flex flex-col grow items-start px-16 py-12 mx-auto w-full bg-red-50 rounded-xl max-md:px-5 max-md:mt-6">
            <div className="flex flex-col pb-11 mt-32 max-w-full border-b border-solid border-b-zinc-900 border-b-opacity-20 w-[150px] max-md:mt-10">
              <Image
                src="/support-icon.svg"
                alt="contact"
                width={50}
                height={50}
              />
              <h2 className="mt-8 text-2xl font-medium leading-6 whitespace-nowrap text-neutral-800">
                Contact Info
              </h2>
              <div className="mt-7 text-base leading-6 text-zinc-900 text-opacity-80">
                +1 455 1482 236
                <br />
                Bluebase@mail.com
              </div>
            </div>
            <div className="flex flex-col pb-11 mt-10 max-w-full border-b border-solid border-b-zinc-900 border-b-opacity-20 w-[150px]">
              <Image src="/map-icon.svg" alt="contact" width={50} height={50} />
              <h2 className="mt-8 text-2xl font-medium leading-6 whitespace-nowrap text-neutral-800">
                Visit our office
              </h2>
              <div className="mt-7 text-base leading-6 text-zinc-900 text-opacity-80">
                16/9, Down Street
                <br />
                Edinburgh, Scotland
                <br />
                United Kingdom
              </div>
            </div>
            <div className="flex gap-3 mt-10 text-base font-medium leading-4 whitespace-nowrap text-zinc-900 text-opacity-80">
              <Image
                src="/instagram.png"
                alt="contact"
                width={25}
                height={50}
              />
              <a
                href="https://dribbble.com"
                className="flex-auto my-auto"
                aria-label="Dribbble"
                role="button"
              >
                Dribbble
              </a>
            </div>
            <div className="flex gap-3 mt-6 text-base font-medium leading-4 whitespace-nowrap text-zinc-900 text-opacity-80">
              <Image
                src="/instagram.png"
                alt="contact"
                width={25}
                height={50}
              />
              <a
                href="https://twitter.com"
                className="flex-auto my-auto"
                aria-label="Twitter"
                role="button"
              >
                Twitter
              </a>
            </div>
            <div className="flex gap-3 mt-6 text-base font-medium leading-4 whitespace-nowrap text-zinc-900 text-opacity-80">
              <Image
                src="/instagram.png"
                alt="contact"
                width={25}
                height={50}
              />
              <a
                href="https://instagram.com"
                className="flex-auto"
                aria-label="Instagram"
                role="button"
              >
                Instagram
              </a>
            </div>
            <div className="flex gap-3 mt-6 text-base font-medium leading-4 whitespace-nowrap text-zinc-900 text-opacity-80">
              <Image
                src="/instagram.png"
                alt="contact"
                width={25}
                height={50}
              />
              <button>
                <a
                  href="https://linkedin.com"
                  className="flex-auto my-auto"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
