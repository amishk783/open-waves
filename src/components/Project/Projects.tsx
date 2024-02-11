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
    <section className="justify-end px-px pt-24 pb-28 mt-56 w-full bg-blue-700 bg-opacity-10 max-md:mt-10 max-md:max-w-full">
      <div className="max-container flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col grow items-center px-16 pb-12 pt-5 mt-24 w-full text-xl leading-6 text-zinc-900 text-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[393px]">
              <div className="text-sm font-medium text-blue-700 uppercase tracking-[5px]">
                PROJECTS
              </div>
              <h1 className="mt-7 text-5xl font-bold tracking-tighter leading-[56px] text-neutral-800 max-md:text-4xl max-md:leading-10">
                Showcase of our <br /> recognized work
              </h1>
              <div className="mt-8 leading-7">
                Our collaborative approach ensures that <br /> we truly
                understand our clients unique <br /> requirements and
                challenges.
              </div>
              <div className="flex flex-col pt-7 pr-16 mt-10 border-t border-solid border-t-zinc-900 border-t-opacity-20 max-md:pr-5">
                <div className="flex gap-5 justify-between whitespace-nowrap">
                  <span className="self-start w-5 h-5 bg-blue-700 rounded-xl" />
                  <div className="grow">Managed Services and Products</div>
                </div>
                <div className="flex gap-5 justify-between mt-8">
                  <span className="self-start w-5 h-5 bg-blue-700 rounded-xl" />
                  <div className="flex-auto">Flexibility and Adaptability</div>
                </div>
                <div className="flex gap-5 justify-between mt-8">
                  <span className="self-start w-5 h-5 bg-blue-700 rounded-xl" />
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
