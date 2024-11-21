import { Slider } from "@/_components/Slider/Slider";
import React, { useState } from "react";
import Image from "next/image";
import { faqContentDev, tools } from "@/constant";
import { Slide } from "@/_components/Slider/Slide";
import {
  Infinity,
  HandCoins,
  Headset,
  Gem,
  Plus,
  Minus,
  Check,
  Star,
} from "lucide-react";
import { Card } from "@/_components/ui/card";
import { cn } from "@/lib/utils";
import { Accordion } from "@/_components/Accordion/Accordion";
import { AccordionItem } from "@/_components/Accordion/ AccordionItem";
import { AccordionTrigger } from "@/_components/Accordion/AccordionTrigger";
import { AccordionContent } from "@/_components/Accordion/AccordionContent";

const features = [
  {
    icon: Infinity,
    title: "unlimited revisions",
    description:
      "We offer unlimited revisions as standard. So rest assured that you will be happy with all deliverables!",
  },
  {
    icon: HandCoins,
    title: "no hidden fees",
    description:
      "Our pricing is transparent, with no hidden fees. You’ll always know exactly what you’re paying for.",
  },
  {
    icon: Headset,
    title: "dedicated support",
    description:
      "Receive dedicated support throughout the project, ensuring assistance whenever you need it.",
  },
  {
    icon: Gem,
    title: "expert team",
    description:
      "Our professionals bring creativity and expertise to every project, delivering top-notch results.",
  },
];

const services = [
  {
    id: 1,
    title: "Custom web design solutions",
  },
  {
    id: 1,
    title: "Responsive web development",
  },
  {
    id: 1,
    title: "E-commerce solutions",
  },
  {
    id: 1,
    title: "Content management systems",
  },
  {
    id: 1,
    title: " Web application developemnt",
  },
  {
    id: 1,
    title: "WordPress maintenance and support",
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const toggleCards = (index: number) => {
    console.log(index);

    if (activeIndex.includes(index)) {
      setActiveIndex((prev) => prev.filter((i) => i !== index));
    } else {
      setActiveIndex((prev) => [...prev, index]);
    }
  };

  return (
    <>
      <main className="w-full h-full lg:overflow-hidden pt-20">
        <section className="xl:max-container w-full h-full   ">
          <div className="">
            <div className="flex flex-col gap-14 justify-center items-start max-md:px-4 md:items-center">
              <div className="px-5 py-2 bg-red-50  rounded-3xl text-red-700">
                <p className="">Development</p>
              </div>
              <div className="flex flex-col text-center gap-5">
                <h1 className=" text-3xl  w-[70%] md:text-7xl font-medium leading-loose mx-auto mt-auto mb-4">
                  Development is the pillar of our company
                </h1>
                <p className="text-xl  mx-auto max-w-[60%] leading-7 ">
                  Software development is the process of designing, programming,
                  testing, and maintaining software applications and systems.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center mt-20 pt-20">
          <div className="w-[65%] bg-red-50 rounded-xl ">
            <div className="flex flex-col md:flex-row ">
              <div className=" flex flex-col gap-10  w-[60%] p-10">
                <div className="flex flex-col gap-8 ">
                  <h2 className="text-3xl text-red-500">
                    Responsive Design For The Modern World
                  </h2>
                  <p className="text-base text-zinc-700">
                    At Sparknex, we specialize in creating visually stunning and
                    highly functional websites that elevate your online
                    presence. Our team of experts combines creativity with
                    technical expertise to deliver bespoke web solutions
                    tailored to your unique needs.
                  </p>
                  <p className="text-base text-zinc-700">
                    Whether you’re a startup looking to establish your online
                    presence or an established business aiming to refresh your
                    digital footprint, Sparknex offers the expertise and support
                    you need to achieve your goals.
                  </p>
                </div>
                <div className=" flex items-center pt-10 w-full h-full border-t-[1px]">
                  <div className="flex gap-10">
                    <Image
                      className="w-24 h-24"
                      src="/testimonialicon.png"
                      alt="avatar"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }, (_, index) => (
                            <Star
                              className="text-yellow-500"
                              fill="#fde047"
                              size={20}
                              key={index}
                            />
                          ))}
                        </div>
                        <h5 className="text-lg">Jane Doe</h5>
                      </div>
                      <p className=" text-sm">
                        SparkNex exceeded our expectations with their
                        high-quality work and timely delivery. They enhanced our
                        designs and were a pleasure to work with. They
                        consistently met every deadline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 justify-center w-[40%] p-8">
                <ul className="p-4 bg-white rounded-xl w-full">
                  {services.map((item, index) => (
                    <li
                      className="flex gap-4 py-3 border-b-[1px] last:border-b-0"
                      key={index}
                    >
                      <Check size={28} className="text-red-500" />
                      <p className="text-base leading-7">{item.title}</p>
                    </li>
                  ))}
                </ul>
                <button className="uppercase bg-blue-600 py-3 w-[90%] text-white rounded-3xl">
                  Request a qoute
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 mask pt-20">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col justify-center items-start max-md:px-4 md:items-center">
              <div className=" text-3xl text-red-700">
                <p className="">Our Tech Stack</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Slider
                direction="right"
                speed={20}
                className=" flex gap-32  items-center "
              >
                {tools.map((tool, index) => (
                  <Slide className="" key={index}>
                    <div className="w-20 mx-20 ">
                      <Image
                        src={tool.imgUrl}
                        alt="icon"
                        width={140}
                        height={70}
                      ></Image>
                    </div>
                  </Slide>
                ))}
              </Slider>
              <Slider
                direction="left"
                speed={20}
                className=" flex items-center "
              >
                {tools.map((tool, index) => (
                  <Slide className="" key={index}>
                    <div className="w-20 mx-20 ">
                      <Image
                        src={tool.imgUrl}
                        alt="icon"
                        width={140}
                        height={70}
                      ></Image>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        <section className="flex w-full h-[1000px]  md:h-[330px] justify-center mt-40 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] xl:w-[65%] h-full gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;
              const isOpen = activeIndex.includes(index);
              return (
                <Card
                  className={cn(
                    "w-full h-full relative  z-10 overflow-hidden duration-200  transition-transform ease-reveal ",
                    isOpen ? "bg-red-400" : "bg-red-50"
                  )}
                  key={index}
                >
                  <div
                    className={cn(
                      "absolute inset-0 w-full h-full flex flex-col justify-between p-6 bg-red-50  transition-all  ease-in-out ",
                      isOpen
                        ? "-translate-x-full duration-700"
                        : "translate-x-0 duration-700"
                    )}
                  >
                    <Icon size={48} className=" text-red-600"></Icon>
                    <div className="flex flex-col gap-8">
                      <h4 className="text-xl uppercase text-red-600">
                        {item.title}
                      </h4>
                      <button
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600"
                        onClick={() => toggleCards(index)}
                      >
                        <Plus size={30} className="text-white" />
                      </button>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "absolute inset-0 w-full -z-10 h-full flex  flex-col justify-between p-6 bg-red-400 transition-all ease-reveal  ",
                      isOpen
                        ? "  duration-1000"
                        : " translate-x-20  duration-1000 "
                    )}
                  >
                    <Icon size={48} className=" text-blue-500"></Icon>
                    <div className="flex flex-col xl:gap-8">
                      <p className="text-base w-full text-white">
                        {item.description}
                      </p>
                      <button
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600"
                        onClick={() => toggleCards(index)}
                      >
                        <Minus size={30} className="text-white" />
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        <section className="flex justify-center w-full mt-28">
          <div className="w-[90%] bg-red-50 p-20">
            <div className="flex flex-col md:flex-row gap-28">
              <div className="flex flex-col gap-10 max-w-[40%]">
                <div className="flex flex-col gap-8">
                  <p className="text-sm leading-4 text-red-700 uppercase tracking-[5px] max-md:max-w-full">
                    EMPOWERMENT
                  </p>
                  <h4 className="text-5xl lg:text-7xl font-medium xl:tracking-tighter text-neutral-800 max-md:max-w-full max-md:text-xl max-md:leading-10">
                    Engine of progess
                  </h4>
                  <p className="text-xl ">
                    {" "}
                    Development as stone of innovation.
                  </p>
                </div>
                <div className="flex flex-col gap-10 text-2xl">
                  <p>
                    Software development is the stab process of designing,
                    programming, solids to testing, and maintaining software as
                    the applications and systems. It empowers us to turn ideas
                  </p>
                  <p>
                    Software developers, often rest referred to as coders or
                    programmers, are sat the creative minds behind the digital
                    innovations we use daily. They possess a unique blend of
                  </p>
                  <p>
                    Developers write lines of code by state using programming
                    languages such as Python, Java, JavaScript, and C++,
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <Image
                  src="/tools/devservice.jpg"
                  alt="service development"
                  width={600}
                  height={700}
                />
                <Image
                  src="/tools/devservice1.jpg"
                  alt="service development"
                  width={600}
                  height={700}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full mt-40  rounded-xl">
          <div className="flex items-center justify-center w-full text-primary ">
            <div className=" container py-10 bg-red-50 md:mx-5 lg:mx-10 flex rounded-xl  flex-col md:flex-row gap-5 md:gap-0">
              <div className="flex flex-col lg:flex-row xl:w-[40%] justify-start max-sm:px-2 gap-10 sm:gap-0 ">
                <div className="flex flex-col space-y-5   py-4 px-8 ">
                  <h2 className="text-wrap text-4xl ">
                    FREQUENTLY{" "}
                    <span className="flex text-nowrap">ASKED QUESTIONS</span>
                  </h2>

                  <button className="px-2 w-44 py-3 rounded-3xl text-white bg-red-500">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="flex-1 flex-col items-center w-full px-4 md:px-0  md:w-full flex justify-center">
                {faqContentDev.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionItem className="my-2 " value={index + 1}>
                      <AccordionTrigger>
                        <h5 className="xl:text-xl">{item.question}</h5>
                      </AccordionTrigger>
                      <AccordionContent>
                        <h2 className="py-2 text-zinc-600 xl:text-base">{item.answer}</h2>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
