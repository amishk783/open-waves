import { Form } from "@/_components/Form";
import Map, { GeolocateControl, Layer, Marker } from "react-map-gl";

import { motion } from "framer-motion";
import { ArrowDownCircle, Mail, MapPin, Phone, Pin } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Accordion } from "@/_components/Accordion/Accordion";
import { Slider } from "@/_components/Slider/Slider";
import { Slide } from "@/_components/Slider/Slide";
import { MapBox } from "@/_components/Map";
import { SpinningText } from "@/_components/ui/SpinningText";
import { faqContent } from "@/constant";
import { AccordionItem } from "@/_components/Accordion/ AccordionItem";
import { AccordionTrigger } from "@/_components/Accordion/AccordionTrigger";
import { AccordionContent } from "@/_components/Accordion/AccordionContent";

const sliderArray = [
  {
    id: 1,
    type: "image",
    url: "/marquee-icon1.png",
  },
  {
    id: 2,
    type: "text",
    text: "Start your Project",
  },
  {
    id: 3,
    type: "image",
    url: "/marquee-icon2.png",
  },
  {
    id: 4,
    type: "text",
    text: "Start your Project",
  },
  {
    id: 5,
    type: "image",
    url: "/marquee-icon1.png",
  },
  {
    id: 6,
    type: "text",
    text: "Start your Project",
  },
  {
    id: 7,
    type: "image",
    url: "/marquee-icon2.png",
  },
  {
    id: 8,
    type: "text",
    text: "Start your Project",
  },
];

const page = () => {
  const handleClickScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="w-full h-full lg:overflow-hidden pt-20">
      <section className="xl:max-container w-full h-full   ">
        <div className="">
          <div className="flex flex-col gap-5 justify-center items-start max-md:px-4 md:items-center">
            <div className="px-5 py-2 bg-red-50 rounded-3xl text-red-700">
              <p className="">Contact Us</p>
            </div>
            <h1 className=" text-3xl md:text-6xl">
              We are always open to talk
            </h1>
          </div>
        </div>
        <div className=" pt-14 md:pt-40 flex items-center flex-col-reverse md:flex-row justify-end w-full gap-10 md:gap-20">
          <div className="w-full">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="flex justify-end pr-20"
            >
              <SpinningText
                text={"- Get in touch with us - Get in touch with us"}
                onClick={() => handleClickScroll("contact")}
              />
              <span className=" -translate-x-[122px] translate-y-[72px]">
                <ArrowDownCircle
                  size={48}
                  className="text-red-400"
                  onClick={() => handleClickScroll("contact")}
                />
              </span>
            </motion.a>
          </div>
          <div className="flex flex-col gap-5 max-md:px-7">
            <h3 className="text-md md:text-2xl w-[90%] md:w-[80%]">
              Have questions or need assistance with your digital projects?
              Reach out to AstraLabs, and we'll help you achieve your goals.
            </h3>
            <div className="flex flex-col text-md md:text-xl  gap-4">
              <div className=" flex gap-4  items-center">
                <Phone className="text-red-500" />
                <h5>+91-885154846</h5>
              </div>
              <div className=" flex gap-4  items-center">
                <Mail className="text-red-500" />
                <h5>info@sparklabs.com </h5>
              </div>
              <div className=" flex gap-4  items-center">
                <MapPin className="text-red-500" />
                <h5>123 Ocean Drive, Miami, FL 33139</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full mt-20 md:mt-40 rounded-xl flex items-center justify-center">
          <div className=" w-full xl:w-[80%] h-full ">
            <div className="flex flex-col md:flex-row gap-10 lg:gap-0 justify-center bg-red-50 items-center w-full h-full">
              <div className="w-full">
                <Form className="py-2 mt-0" />
              </div>
              <div className="bg-red-50 w-full lg:w-[50%] h-[400px] md:h-[920px] relative">
                <div className="bg-[url(/contact-us-woman.jpg)] bg-cover rounded-xl bg-right-top md:bg-center absolute w-full h-full" />
                <div className="absolute w-full h-full justify-center flex items-end bg-gradient-to-t from-slate-950 md:from-slate-700 rounded-md to-bg-slate-100 md:to-transparent">
                  <div className="w-[80%] py-20 text-white">
                    <h5 className="text-3xl">
                      Reach out to us today and discover how we can help your
                      business thrive, grow, and succeed with ease.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-full mt-40 bg-red-50 rounded-xl">
          <div className="flex items-center justify-center w-full text-primary md:py-10 mb-10">
            <div className=" container xl:max-container md:mx-5 lg:mx-10 flex flex-col md:flex-row gap-5 md:gap-0">
              <div className="flex flex-col lg:flex-row xl:w-[40%] justify-start max-sm:px-2 gap-10 sm:gap-0 ">
                <div className="flex flex-col space-y-5   p-4 ">
                  <h2 className="text-wrap text-4xl ">
                    FREQUENTLY{" "}
                    <span className="flex text-nowrap">ASKED QUESTIONS</span>
                  </h2>

                  <button className="px-2 w-32 py-3 rounded-2xl bg-red-500">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="flex-1 flex-col items-center w-full px-4 md:px-0  md:w-full flex justify-center">
                {faqContent.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionItem className="my-2 " value={index + 1}>
                      <AccordionTrigger>
                        <h5 className="xl:text-xl">{item.question}</h5>
                      </AccordionTrigger>
                      <AccordionContent>
                        <h2 className="py-2 xl:text-xl">{item.answer}</h2>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Slider direction="right" className=" flex gap-10 items-center">
          {sliderArray.map((item, index) => (
            <Slide key={index}>
              {item.type === "text" ? (
                <h5 className="text-3xl uppercase whitespace-nowrap">
                  {item.text}
                </h5>
              ) : (
                <div className="w-24 ">
                  <Image
                    src={item.url || ""}
                    alt=""
                    width={50}
                    height={50}
                  ></Image>
                </div>
              )}
            </Slide>
          ))}
        </Slider>
      </section>
      <section className="py-20 w-full h-[500px]">
        <MapBox />
      </section>
    </main>
  );
};

export default page;
