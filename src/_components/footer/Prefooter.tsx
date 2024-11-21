import Image from "next/image";
import Link from "next/link";

const servicesLinks = [
  {
    id: 1,
    imgUrl: "/prefooter/fiverr2.svg",
    link: "",
  },
  {
    id: 1,
    imgUrl: "/prefooter/shopify.svg",
    link: "",
  },
  {
    id: 1,
    imgUrl: "/prefooter/upwork.svg",
    link: "",
  },
  {
    id: 1,
    imgUrl: "/prefooter/dribble.svg",
    link: "",
  },
];

export function Prefooter() {
  return (
    <div className="z-10 flex flex-col gap-16 xl:flex-row xl:justify-between items-center bg-black border-b-[1px] border-opacity-35 border-slate-300 pb-16 max-sm:flex-col mx-10">
      <div className="flex flex-col w-full my-auto max-md:mt-10  xl:justify-center ">
        <Image src="/logo.png" alt="contact" width={171} height={34} />
        <h5 className="mt-10 text-lg leading-7 text-white text-opacity-80">
          We provide the expertise and support to <br /> propel your business
          forward.
        </h5>

        <div className="flex gap-2 justify-between mt-9 w-[50%]  text-base whitespace-nowrap">
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
          <button className="grow justify-center px-7 py-4 text-center bg-red-500 rounded-md leading-[100%] text-stone-50 max-md:px-5">
            Get Started
          </button>
        </div>

        <div className="flex xl:gap-5 justify-between  mt-12 max-md:mt-10 w-[90%] md:w-[50%]  xl:w-[70%] items-center ">
          {servicesLinks.map((item, index) => (
            <Link className="" key={index} href={item.link}>
              <Image
                className=" w-20 xl:w-24 text-violet-500 "
                src={item.imgUrl}
                alt="contact"
                width={100}
                height={10}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:pl-56 justify-center w-full  mt-6 max-md:mt-10 max-md:max-w-full xl:border-l-[1px] ">
        <div className="text-3xl font-medium tracking-tight leading-9 text-white max-md:max-w-full">
          Let’s get started on something great
        </div>
        <div className="mt-7 text-lg leading-7 text-white text-opacity-80 max-md:max-w-full">
          Our team of IT experts looks forward to meeting with you
          <br /> and providing valuable insights tailored to your business.
        </div>
        <button
          className="justify-center self-start px-7 py-3.5 mt-10 text-base leading-4 whitespace-nowrap bg-red-500 rounded-md text-stone-50 max-md:px-5"
          aria-label="Get an appointment now"
        >
          Get an appointment now
        </button>
        <div className="flex gap-5 justify-between items-center mt-10 w-[50%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
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
            <div className="mt-4 text-lg leading-7 text-white text-opacity-80">
              Client Satisfaction
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-2 text-white leading-[100%]">
              <div className="text-2xl font-medium">22+ </div>
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
