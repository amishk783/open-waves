import Image from "next/image";
import { motion } from "framer-motion";

const services: { title: string; description: string; image: string }[] = [
  {
    title: "Development",
    description: "Our development is pixel perfect in all ways.",
    image: "/service-icon-1.svg",
  },
  {
    title: "Woo Commerce",
    description: "We have a best team for your shopping websites.",
    image: "/service-icon-2.svg",
  },
  {
    title: "CRM Solutions",
    description: "We enhance customer experiences for success",
    image: "/service-icon-3.svg",
  },
  {
    title: "Web Design",
    description: "We create vibrant, intuitive and minimalist web",
    image: "/service-icon-4.svg",
  },
];

export function Offering() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      duration: 100,
      ease: "easeInOut",
      type: "spring",
    },
  };
  return (
    <motion.section className="pt-44 pb-44 max-sm:pt-20 max-sm:pb-20 ">
      <div className="max-container drop-shadow-lg">
        <div className=" mb-24 items-center justify-between flex max-sm:flex-col max-sm:mb-12">
          <div className="">
            <div className=" text-center mb-7 font-medium text-base justify-center  tracking-widest leading-[1.2px] uppercase text-red-500 max-md:max-w-full max-md:text-sm max-md:leading-10 max-sm:mb-4">
              WHAT WE’RE OFFERING
            </div>
            <div className="flex flex-col gap-20">
              <div>
                <h1 className=" text-center mb-5 font-medium text-6xl tracking-tighter  bg-sky-600S text-neutral-800 max-md:max-w-full max-md:text-5xl max-md:leading-12">
                  Dealing in all professional IT services.
                </h1>

                {/*<p className=" text-xl font-normal text-slate-600 text-left">
            One fundamental aspect of IT services is infrastructure management.{" "}
            This involves the design, implementation, and maintenance of the{" "}
            hardware, software, networks, and servers.
            </p>*/}
              </div>
              <motion.div
                whileInView="show"
                initial="hidden"
                variants={container}
                className=" grid grid-cols-1 xl:grid-cols-5  gap-5  max-sm:flex-col max-md:mt-10 max-md:max-w-full  "
              >
                {services.map((service) => (
                  <motion.div
                    variants={item}
                    key={service.title}
                    className="flex flex-col flex-1 py-12 bg-white rounded-xl shadow-sm md:px-5 max-sm:py-1 hover:gradient hover:bg-opacity-50 hover:text-zinc-50  "
                  >
                    <Image
                      src={service.image}
                      className="mt-7 aspect-[1.02] w-[46px] stroke"
                      alt="Development"
                      width={100}
                      height={50}
                    />
                    <h2 className="mt-8 text-2xl font-medium leading-6 ">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-base leading-6  text-opacity-70 w-5/6 ">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
                <motion.div
                  variants={item}
                  className="flex flex-row-reverse max-md:px-5 max-sm:py-1 flex-1 items-center max-md:justify-between   xl:flex-col xl:flex-1 xl:pb-11 bg-white rounded-xl shadow-sm hover:gradient hover:bg-opacity-50 hover:text-zinc-50 hover:text-white "
                >
                  <div className="mt-5 text-center justify-center self-start xl:self-end px-5 py-3 mr-6 text-sm font-medium leading-4 text-white whitespace-nowrap bg-red-700 rounded-xl aspect-[2.09] max-md:pr-5 max-md:mr-2.5 max-sm:pt-2">
                    Free!
                  </div>
                  <div className="flex flex-col xl:px-9 pt-2  max-sm:pt-4">
                    <Image
                      src="/service-icon-5.svg"
                      className="xl:mt-7 aspect-[1.02] w-[46px]"
                      alt="Development"
                      width={100}
                      height={50}
                    />

                    <h2 className="mt-8 text-2xl font-medium leading-6">
                      IT Support
                    </h2>
                    <p className="mt-6 text-base leading-6 text-opacity-70 ">
                      We offers expert assistance <br /> for your IT issues.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
