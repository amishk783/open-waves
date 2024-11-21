import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
export function ProjectSlider() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="flex flex-col ml-5 w-full translate-x-48 max-w-[1086px]  max-md:ml-0 max-md:w-full">
      <div ref={emblaRef} className="px-5 mt-24 max-md:mt-10 max-md:max-w-full">
        <div
          
          className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
        >
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className=" relative z-10 flex-col justify-center items-start py-12 pr-16 pl-6 text-5xl font-medium tracking-tighter leading-10 text-white whitespace-nowrap aspect-[0.58] max-md:px-5 max-md:mt-6 max-md:text-4xl max-md:leading-10">
              <Image
                className="object-cover absolute inset-0  h-[110%] -z-10  "
                src="/projects/project-1.png"
                alt="description icon"
                width={300}
                height={20}
              />
              E-commerce <br /> platform <br /> development.
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-6">
              <div className="overflow-hidden z-10 relative flex-col justify-center items-start pt-11 pr-16 pb-80 pl-6 w-full text-5xl font-medium tracking-tighter leading-10 whitespace-nowrap aspect-[0.58] text-zinc-900 max-md:px-5 max-md:pb-10 max-md:text-4xl max-md:leading-10">
                <Image
                  className="object-cover absolute inset-0 size-full -z-10"
                  src="/projects/project-2.png"
                  alt="description icon"
                  width={300}
                  height={20}
                />
                Mobile <br /> Platform <br /> Development
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-6">
              <div className="overflow-hidden z-10 relative flex-col justify-center items-start pt-11 pr-16 pb-80 pl-6 w-full text-5xl font-medium tracking-tighter leading-10 whitespace-nowrap aspect-[0.58] text-zinc-900 max-md:px-5 max-md:pb-10 max-md:text-4xl max-md:leading-10">
                <Image
                  className="object-cover absolute inset-0 size-full -z-10"
                  src="/projects/project-3.png"
                  alt="description icon"
                  width={300}
                  height={20}
                />
                Mobile <br /> Platform <br /> Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
