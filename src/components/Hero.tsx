import * as React from "react";
import Image from "next/image";
export function Hero() {
  return (
    <div className="flex justify-center items-center px-16 pt-5 w-full max-md:px-5 max-md:max-w-full ">
      <div className="justify-center pb-12 mt-20 max-w-full border-b border-solid border-b-zinc-300 w-[1545px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-11 font-medium max-md:mt-10 max-md:max-w-full">
              <div className="text-sm leading-4 text-blue-700 uppercase tracking-[5px] max-md:max-w-full">
                EMPOWERMENT
              </div>
              <div className="mt-7 text-8xl tracking-tighter leading-[82px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Seamless IT for your business, boosting your growth.
              </div>
              <div className="mt-11 text-2xl leading-10 text-neutral-800 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full max-sm:text-lg">
                We provide the expertise and support to propel your business
                forward in the digital landscape.
              </div>
              <div className="flex gap-4 self-start mt-9 text-lg leading-7 max-sm:flex-col ">
                <div className="grow justify-center px-7 py-5 whitespace-nowrap bg-blue-700 rounded-[30px] text-stone-50 max-md:px-4 max-md:py-3">
                  Learn More
                </div>
                <div className="flex gap-3 justify-between px-7 py-5 text-blue-700 bg-blue-700 bg-opacity-10 rounded-[30px] max-md:px-4 max-md:py-3">
                  <div>Let's Talk</div>
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
              <div className="flex overflow-hidden relative flex-col items-start pt-5 pr-16 w-full min-h-[399px] max-md:pr-5 max-md:max-w-full max-sm:pt-2 max-sm:min-h-[1px]">
                {/*<Image
                  src="/hero-bg1-1.png"
                  className="object-cover absolute inset-0 size-full max-sm:hidden"
                  alt="hero background"
                  width={450}
                  height={200}
                />*/}
                <div className="flex relative gap-4 justify-between px-20 py-11 mt-20 bg-white rounded-xl shadow-md shadow-slate-300 mx-2 my-3  max-md:px-5 max-md:mt-10">
                 {/* <Image
                    src="/hero-icon1.svg"
                    alt="hero-icon"
                    width={50}
              height={50} 
              />*/}
                  <div className="my-auto text-5xl font-medium tracking-wide leading-10 text-neutral-800 max-md:text-4xl">
                    2+
                  </div>
                  <div className="self-start mt-2 text-base leading-5 text-zinc-900">
                    Years
                    <br />
                    <span className="text-zinc-900">Experience</span>
                  </div>
                </div>
                
              </div>
              <div className="mt-6 max-md:max-w-full max-sm:mt-0">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-2.5 justify-between px-12 py-12 w-full text-base font-medium leading-4 whitespace-nowrap bg-white rounded-xl shadow-md text-zinc-900 max-md:px-5 max-md:mt-6">
                      {/* <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/906776e8a261f8c8d125df1558a37730a2bc59d01f0820bf30c3afd1ac5cbeb6?apiKey=418e80658b5e4102b77efea2f9b19dd5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/906776e8a261f8c8d125df1558a37730a2bc59d01f0820bf30c3afd1ac5cbeb6?apiKey=418e80658b5e4102b77efea2f9b19dd5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/906776e8a261f8c8d125df1558a37730a2bc59d01f0820bf30c3afd1ac5cbeb6?apiKey=418e80658b5e4102b77efea2f9b19dd5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/906776e8a261f8c8d125df1558a37730a2bc59d01f0820bf30c3afd1ac5cbeb6?apiKey=418e80658b5e4102b77efea2f9b19dd5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/906776e8a261f8c8d125df1558a37730a2bc59d01f0820bf30c3afd1ac5cbeb6?apiKey=418e80658b5e4102b77efea2f9b19dd5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/906776e8a261f8c8d125df1558a37730a2bc59d01f0820bf30c3afd1ac5cbeb6?apiKey=418e80658b5e4102b77efea2f9b19dd5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/906776e8a261f8c8d125df1558a37730a2bc59d01f0820bf30c3afd1ac5cbeb6?apiKey=418e80658b5e4102b77efea2f9b19dd5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/906776e8a261f8c8d125df1558a37730a2bc59d01f0820bf30c3afd1ac5cbeb6?apiKey=418e80658b5e4102b77efea2f9b19dd5&"
                        className="max-w-full aspect-[3.13] w-[124px]"
                      />{" "} */}
                      <div className="grow self-start mt-5">
                        Meet <span className="text-zinc-900">Our Experts</span>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 justify-between px-14 py-10 w-full bg-white rounded-xl shadow-md max-md:px-5 max-md:mt-6">
                      <div className="flex flex-col flex-1 text-xs font-medium leading-3 text-zinc-700">
                        <div>Verified by</div>
                        <Image
                          alt="google-icon"
                          src="/hero-icon2.svg"
                          className="self-center mt-3 aspect-[3.03] w-[91px]"
                          width={91}
                          height={50}
                        />
                      </div>
                      <div className="flex-auto self-end mt-8 text-base leading-4 text-zinc-900">
                        3245 <span className="text-zinc-900">Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
