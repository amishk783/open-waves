import Image from "next/image";

export function Prefooter() {
  return (
    <div className="z-10 flex justify-between items-center bg-black border-b-[1px] border-opacity-35 border-slate-300 pb-24 max-sm:flex-col">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10 before:absolute before:w-[1px] before:bg-slate-200 before:h-[369px] before:opacity-20 before:left-1/2 ">
        <Image src="/logo.png" alt="contact" width={171} height={34} />
        <header className="mt-10 text-lg leading-7 text-white text-opacity-80">
          We provide the expertise and support to <br /> propel your business
          forward.
        </header>

        <div className="flex gap-2 justify-between mt-9 text-base whitespace-nowrap">
          <div className="grow justify-center items-start py-4 pr-16 pl-4 rounded-md border border-solid border-white border-opacity-20 text-zinc-300 text-opacity-60 max-md:pr-5">
            <label htmlFor="emailInput">Enter Your Email</label>
            <input
              id="emailInput"
              type="email"
              aria-label="Email"
              role="textbox"
              className="w-full bg-transparent"
            />
          </div>
          <button className="grow justify-center px-7 py-4 text-center bg-blue-700 rounded-md leading-[100%] text-stone-50 max-md:px-5">
            Get Started
          </button>
        </div>

        <div className="flex gap-5 justify-between mt-12 max-md:mt-10">
          <Image
            className=" bg-white text-violet-500"
            src="/instagram.png"
            alt="contact"
            width={50}
            height={50}
          />
          <Image
            className=" bg-white text-violet-500"
            src="/instagram.png"
            alt="contact"
            width={50}
            height={50}
          />
          <Image
            className=" bg-white text-violet-500"
            src="/instagram.png"
            alt="contact"
            width={50}
            height={50}
          />
          <Image
            className=" bg-white text-violet-500"
            src="/instagram.png"
            alt="contact"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="flex flex-col self-end mt-6 max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl font-medium tracking-tight leading-9 text-white max-md:max-w-full">
          Let’s get started on something great
        </div>
        <div className="mt-7 text-lg leading-7 text-white text-opacity-80 max-md:max-w-full">
          Our team of IT experts looks forward to meeting with you
          <br /> and providing valuable insights tailored to your business.
        </div>
        <button
          className="justify-center self-start px-7 py-3.5 mt-10 text-base leading-4 whitespace-nowrap bg-blue-700 rounded-md text-stone-50 max-md:px-5"
          aria-label="Get an appointment now"
        >
          Get an appointment now
        </button>
        <div className="flex gap-5 justify-between mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1">
            <div className="flex gap-2.5 justify-between text-white leading-[100%]">
              <div className="text-2xl font-medium">2 </div>
              <div className="flex-auto text-base">Mins</div>
            </div>
            <div className="mt-3 text-lg leading-7 whitespace-nowrap text-white text-opacity-80">
              Response Time
            </div>
          </div>
          <div className="flex flex-col flex-1 self-start whitespace-nowrap">
            <div className="text-2xl font-medium leading-7 text-white">99%</div>
            <div className="mt-3 text-lg leading-7 text-white text-opacity-80">
              Client Satisfaction
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-2 justify-between text-white leading-[100%]">
              <div className="grow text-2xl font-medium">22+ </div>
              <div className="text-base">Years</div>
            </div>
            <div className="mt-3 text-lg leading-7 whitespace-nowrap text-white text-opacity-80">
              Field Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
