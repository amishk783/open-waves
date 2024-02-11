import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const roadmaps: {
  image: string;
  title: string;
  subtitle: string;
  line: string;
}[] = [
  {
    image: "/hwd-icon-1.svg",
    title: "Brainstorming",
    subtitle: "Ideas",
    line: "/linenew.png",
  },
  {
    image: "/hwd-icon-2.svg",
    title: "Product",
    subtitle: "Desgin",
    line: "/linenew.png",
  },
  {
    image: "/hwd-icon-3.svg",
    title: "Front-End",
    subtitle: "Development",
    line: "/linenew2.png",
  },
];

export function RoadMap() {
  return (
    <section className="pt-24 ">
      <div className="max-container px-4 max-sm:px-3">
        <div className=" flex w-full overflow bg-black justify-center relative rounded-md p-12 z-1 max-sm:flex-col max-sm:p-10">
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <Image
              className=" absolute left-0 bottom-0 "
              src="/roadmap-bg-shape-1.svg"
              alt="shape"
              width={1510}
              height={630}
            />
          </motion.div>
          <div className="flex flex-col items-start justify-between w-[17%] max-md:ml-0 max-md:w-full">
            <div className=" text-white max-md:mt-10 max-sm:mt-2">
              <div className="text-sm font-medium leading-4 text-blue-500 uppercase tracking-[5px]">
                Our Model
              </div>
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="mt-7 text-6xl font-bold tracking-tighter whitespace-nowrap max-md:text-4xl"
              >
                How we do
              </motion.div>
              <p className="mt-8 text-lg text-wrap whitespace-nowrap">
                Save time and money with <br /> our powerful method.
              </p>
              <div className="flex gap-3 mr-28 px-4 py-3 mt-60 text-lg leading-7 bg-blue-700 rounded-[30px] text-stone-50 max-md:px-6 max-sm:py-4 max-md:mt-10 max-sm:whitespace-nowrap">
                <div className="flex-auto">Learn More</div>
              </div>
            </div>
          </div>
          <div className=" flex-1  ml-5 w-[83%] py-5 max-md:ml-0 max-md:w-full max-sm:mt-10">
            <div className=" gap-24 items-center justify-center flex max-sm:flex-col max-sm:gap-10">
              {roadmaps.map((roadmap) => (
                <div
                  key={roadmap.title}
                  className="flex items-center bg-white  py-4 pl-[15px] pr-8 rounded-lg gap-7 relative min-w-64 max-sm:p-2 max-sm:min-w-[191px] max-sm:gap-3"
                >
                  <div className=" absolute bg-no-repeat h-[6px] z-[1] w-64 bg-cover right-[-100px] top-1/2 bg-line ">
                    <Image src={roadmap.line} alt="" width={6000} height={50} />
                  </div>
                  <div className="flex flex-none rounded-lg w-16 h-16 rounder-md items-center justify-center bg-purple-100 px-2 max-sm:w-12 max-sm:h-12">
                    <Image
                      src={roadmap.image}
                      alt="icon-road"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className=" flex-1  text-base font-medium ">
                    <h4 className="text-cyan-500 text-base max-sm:text-sm">
                      {roadmap.title}
                    </h4>
                    <p className=" text-slate-500 max-sm:text-sm">
                      {roadmap.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className=" mt-20 py-5 pl-12 gap-[100px] items-center justify-center flex max-sm:flex-col max-sm:gap-10 max-sm:pl-0 max-sm:mt-10">
              <div className="flex items-center bg-white  py-4 pl-[15px] pr-8 rounded-lg gap-7 relative min-w-64 max-sm:p-2 max-sm:min-w-[191px] max-sm:gap-3">
                <div className=" absolute bg-no-repeat h-[6px] z-10 w-64 bg-cover right-[100px] rotate-180 top-[240px] bg-line ">
                  <Image src="/linenew2.png" alt="" width={6000} height={50} />
                </div>
                <div className="flex flex-none rounded-lg w-16 h-16 rounder-md items-center justify-center z-10 bg-purple-100 px-2">
                  <Image
                    src="/hwd-icon-4.svg"
                    alt="icon-road"
                    width={70}
                    height={70}
                  />
                </div>
                <div className=" flex-1  text-base font-medium ">
                  <h4 className="text-cyan-500 text-base">SEO </h4>
                  <p className=" text-slate-500">Optimization</p>
                </div>
              </div>
              <div className="flex items-center bg-white  py-4 pl-[15px] pr-8 rounded-lg gap-7 relative min-w-64 max-sm:p-2 max-sm:min-w-[191px] max-sm:gap-3">
                <div className=" absolute bg-no-repeat h-[6px] z-[1] w-64 bg-cover right-[100px] top-1/2 bg-line ">
                  <Image src="/linenew.png" alt="" width={6000} height={50} />
                </div>
                <div className="flex flex-none rounded-lg w-16 h-16 rounder-md items-center justify-center z-10 bg-purple-100 px-2">
                  <Image
                    src="/hwd-icon-4.svg"
                    alt="icon-road"
                    width={70}
                    height={70}
                  />
                </div>
                <div className=" flex-1  text-base font-medium ">
                  <h4 className="text-cyan-500 text-base">Back-End</h4>
                  <p className=" text-slate-500">Development</p>
                </div>
              </div>
            </div>
            <div className=" mt-20 gap-[100px] items-center justify-center flex max-sm:mt-10">
              <div className="flex items-center bg-white  py-4 pl-[15px] pr-8 rounded-lg gap-7 relative min-w-64 max-sm:p-2 max-sm:min-w-[191px] max-sm:gap-3">
                <div className=" absolute bg-no-repeat h-[6px] z-[1] w-64 bg-cover right-[-100px] top-1/2 bg-line "></div>
                <div className="flex flex-none rounded-lg w-16 h-16 rounder-md items-center justify-center bg-purple-100 px-2">
                  <Image
                    src="/hwd-icon-6.svg"
                    alt="icon-road"
                    width={70}
                    height={70}
                  />
                </div>
                <div className=" flex-1  text-base font-medium ">
                  <h4 className="text-cyan-500 text-base">Digital</h4>
                  <p className=" text-slate-500">Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
