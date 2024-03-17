import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import imageByIndex from "./imageByIndex";
import Image from "next/image";
import { ContentType } from "./imageByIndex";
import clsx from "clsx";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  const precotent = imageByIndex(1);

  const [content, setContent] = useState<ContentType>(precotent);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="flex flex-col items-center justify-center max-sm:overflow-hidden">
      <div className="flex  overflow-hidden ">
        <div className="flex flex-col justify-start w-full translate-x-48 max-w-[1086px] max-sm:max-w-[300px]  max-sm:translate-x-1 max-md:ml-0 max-md:w-full ">
          <div
            className="px-5 py-5 mt-20 max-md:mt-10  max-md:max-w-full overflow-hidden "
            ref={emblaRef}
          >
            <div className="backface-hidden flex rounded-lg ">
              {slides.map((index) => {
                const content = imageByIndex(index);

                return (
                  <div key={index} className="">
                    <div className="flex justify-between w-[650px] flex-grow-0 flex-shrink-0 mr-[-250px] max-sm:mr-[0px] transition-transform duration-300 transform hover:scale-105 max-sm:w-[300px]">
                      <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                        <div
                          className={clsx(
                            " relative z-10 flex-col justify-center items-start py-12 pr-16 pl-6 text-5xl font-medium tracking-tight leading-tighter  aspect-[0.58] max-md:px-5 max-md:mt-6 max-md:text-4xl max-md:leading-10",
                            index % 2 ? "text-white" : "text-black"
                          )}
                        >
                          {content?.image && (
                            <Image
                              className="object-cover w-full h-[110%] absolute inset-0 -z-10  rounded-lg"
                              src={content.image || "/projects/project-1.png"}
                              alt="description icon"
                              width={300}
                              height={80}
                            />
                          )}
                          {content.heading}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center align-middle mt-8 translate-x-28 ">
        <div className=" z-10 bg-slate-400 absolute h-1 rounded mr-auto w-[500px] max-w-[] overflow-hidden ">
          <div
            className=" absolute w-full bg-white top-0 bottom-0 left-[-100%] bg-gradient-to-r from-violet-200 to-indigo-600"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
