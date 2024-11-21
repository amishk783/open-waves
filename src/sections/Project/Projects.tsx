import * as React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import { ProjectSlider } from "./ProjectSlider";
import EmblaCarousel from "./Carousel/EmblaCaraousel";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT + 1).keys()).slice(1);

export function Projects() {
  return (
    <section className=" justify-end xl:pt-24 pb-28 mt-56 w-full bg-slate-100 bg-opacity-100 max-md:mt-10 max-md:max-w-full">
      <div className="max-container flex gap-5 flex-col xl:flex-row max-md:gap-0 max-md:">
        <div className="flex flex-col xl:w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col grow items-center px-16 xl:pb-12 pt-5 mt-14 xl:mt-24 w-full text-xl leading-6 text-zinc-900 text-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full xl:w-[393px]">
              <div className="text-sm font-medium text-[#97203E] uppercase ml-2 tracking-[5px]">
                PROJECTS
              </div>
              <h1 className="mt-4 xl:mt-7 text-5xl font-bold tracking-tighter leading-[56px] text-neutral-800 max-md:text-5xl max-md:leading-14 max-sm:tracking-normal">
                Showcase of our{" "}
                <span className="text-red-600">recognized work</span>
              </h1>
              <div className="mt-4 xl:mt-7 leading-7 max-sm:text-lg">
                Our collaborative approach ensures that we truly understand our
                clients unique requirements and challenges.
              </div>
              <div className="flex flex-col py-4 xl:pt-7 pr-16 mt-10 border-t border-solid border-t-zinc-900 border-t-opacity-20 max-md:pr-2z">
                <div className="flex gap-5 justify-between max-sm:text-lg max-sm:whitespace-normal">
                  <span className="self-start w-5 h-5 bg-red-700 rounded-xl" />
                  <div className="flex-auto">Managed Services and Products</div>
                </div>
                <div className="flex gap-5 justify-between mt-8">
                  <span className="self-start w-5 h-5 bg-red-700 rounded-xl" />
                  <div className="flex-auto">Flexibility and Adaptability</div>
                </div>
                <div className="flex gap-5 justify-between mt-8">
                  <span className="self-start w-5 h-5 bg-red-700 rounded-xl" />
                  <div className="flex-auto">Competitive Advantage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ProjectSlider /> */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}
