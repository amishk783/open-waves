import * as React from "react";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: 600 },
    show: { opacity: 1, x: 0, duration: 100 },
  };

  

  return (
    <div className="flex  justify-center items-center px-12 2xl:px-20 2xl:pt-4 pt-12 w-full max-md:px-5 max-md:max-w-full bg-gradient-to-r from-red-200 via-purple-50 to-blue-200">
      <div className="-z-10 bg-white">
        <svg viewBox="0 0 500 200">
          <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"></path>
        </svg>
      </div>
      <div className="justify-center pb-12 mt-20 max-w-full border-b border-solid border-b-zinc-300 w-[1545px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-3 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-11 font-medium max-md:mt-10 max-md:max-w-full">
              <div className="text-sm leading-4 text-red-700 uppercase tracking-[5px] max-md:max-w-full">
                EMPOWERMENT
              </div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="mt-7 text-7xl tracking-tighter text-neutral-800 max-md:max-w-full max-md:text-xl max-md:leading-10"
              >
                Seamless IT for your business, boosting your growth.
              </motion.div>
              <div className="mt-11 text-2xl leading-10 text-neutral-800 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full max-sm:text-lg">
                We provide the expertise and support to propel your business
                forward in the digital landscape.
              </div>
              <div className="flex gap-4 self-start mt-9 text-lg leading-7 max-sm:flex-col ">
                <button className="grow justify-center px-7 py-5 whitespace-nowrap bg-red-700 rounded-[30px] text-stone-50 max-md:px-4 max-md:py-3 hover:scale-110">
                  Learn More
                </button>
                <div className="flex gap-3 shadow-md justify-between px-7 py-5 text-red-700 hover:text-white bg-red-100 hover:bg-red-600 rounded-[30px] max-md:px-4 max-md:py-3">
                  <button>Let's Talk</button>

                  {/* <img
                    loading="lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                    className="aspect-square w-[18px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:max-w-full">
              <motion.div
                animate="show"
                variants={container}
                initial="hidden"
                className="grid grid-cols-2 relative items-center pt-20 pl-12 w-full max-md:pr-5 max-md:max-w-full max-sm:pt-2 max-sm:min-h-[1px]"
              >
                <motion.div
                  variants={item}
                  className="flex relative gap-4 justify-between px-20 py-16 bg-white rounded-xl shadow-md shadow-slate-300 mx-2 my-3  max-md:px-5 max-md:mt-10"
                >
                  <Image
                    src="/hero-icon1.svg"
                    alt="hero-icon"
                    width={50}
                    height={50}
                  />
                  <div className="my-auto text-5xl font-medium tracking-wide leading-10 text-neutral-800 max-md:text-4xl">
                    +8
                  </div>
                  <div className="self-start mt-2 text-base leading-5 text-zinc-900">
                    Years
                    <br />
                    <span className="text-zinc-900">Experience</span>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex relative gap-4 justify-between px-20 py-[63px] bg-white rounded-xl shadow-md shadow-slate-300 mx-2 my-3  max-md:px-5 max-md:mt-10"
                >
                  <Image
                    src="/hero-icon1.svg"
                    alt="hero-icon"
                    width={50}
                    height={50}
                  />
                  <div className="my-auto text-5xl font-medium tracking-wide leading-10 text-neutral-800 max-md:text-4xl">
                    +8
                  </div>
                  <div className="self-start mt-2 text-base leading-5 text-zinc-900">
                    Years
                    <br />
                    <span className="text-zinc-900">Experience</span>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex relative gap-4 justify-between px-20 py-16 bg-white rounded-xl shadow-md shadow-slate-300 mx-2 my-3  max-md:px-5 max-md:mt-10"
                >
                  <Image
                    src="/hero-icon1.svg"
                    alt="hero-icon"
                    width={50}
                    height={50}
                  />
                  <div className="my-auto text-5xl font-medium tracking-wide leading-10 text-neutral-800 max-md:text-4xl">
                    +8
                  </div>
                  <div className="self-start mt-2 text-base leading-5 text-zinc-900">
                    Years
                    <br />
                    <span className="text-zinc-900">Experience</span>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex relative gap-4 justify-between px-20 py-16 bg-white rounded-xl shadow-md shadow-slate-300 mx-2 my-3  max-md:px-5 max-md:mt-10"
                >
                  <Image
                    src="/hero-icon1.svg"
                    alt="hero-icon"
                    width={50}
                    height={50}
                  />
                  <div className="my-auto text-5xl font-medium tracking-wide leading-10 text-neutral-800 max-md:text-4xl">
                    +8
                  </div>
                  <div className="self-start mt-2 text-base leading-5 text-zinc-900">
                    Years
                    <br />
                    <span className="text-zinc-900">Experience</span>
                  </div>
                </motion.div>
              </motion.div>
              {/* </motion.div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="wave"></div> */}
    </div>
  );
}
