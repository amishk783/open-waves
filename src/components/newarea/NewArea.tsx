import Image from "next/image";
import { BadgeCheck, ChevronUpCircle } from "lucide-react";
export function NewsArea() {
  return (
    <section className=" pt-44 pb-44">
      <div className="max-container">
        <div className="flex  justify-around  items-end  mb-[70px] max-sm:flex-col">
          <div className="max-sm:mb-5">
            <h5 className="mb-5 text-sm tracking-widest text-blue-500 uppercase">
              Interesting Articles
            </h5>
            <h1 className="  tracking-[-1px] leading-[56px] font-bold text-5xl max-sm:leading-[44px]">
              Read daily news about <br /> startup companies
            </h1>
          </div>
          <div className="flex">
            <p className=" pb-2 text-xl text-center  leading-7 max-w-[655px] max-sm:text-left ">
              In todays rapidly evolving world, technology is constantly shaping
              the way we live and interact. From artificial intelligence and
              automation to virtual reality, the pace of technological
              advancements is staggering.
            </p>
          </div>
        </div>
        <div className="flex gap-14 rounded-lg w-full  p-6  relative bg-black max-sm:flex-col">
          <div className=" max-w-[700px] w-full overflow-hidden max-sm:max-w-[300px]">
            <Image
              className="object-cover max-w-full rounded-lg"
              src={"/newsarea/news-1.jpg"}
              alt="description icon"
              width={701}
              height={80}
            />
          </div>
          <div className=" pt-2 pr-20 max-sm:pr-10">
            <h5 className=" text-blue-500 mb-5 text-sm tracking-widest font-medium">
              Mobile Development
            </h5>
            <h1 className=" text-white text-3xl leading-9 font-medium mb-6 -tracking-tight max-sm:tracking-normal ">
              OpenAI launches new alignment division to tackle risks of
              superintelligent AI
            </h1>
            <p className=" font-medium leading-7 text-slate-400 pb-8 mb-6">
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </p>
            <ul className=" flex flex-col justify-around space-y-10 list-none">
              <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-400">
                <BadgeCheck className=" bg-blue-400 text-slate-600 rounded-full" />
                Collaboration Tools
              </li>
              <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-400">
                <BadgeCheck className=" bg-blue-400 text-slate-600 rounded-full" />
                Smart Reminders
              </li>
            </ul>
            <a>
              <ChevronUpCircle />
            </a>
          </div>
        </div>
        <div className="pt-6 gap-6 flex items-start max-sm:flex-col">
          <div className="flex-1 bg-blue-50 rounded-lg  pt-[24px] px-[22px] pb-[113px] relative overflow-hidden max-sm:px-[10px]">
            <div className=" overflow-hidden mb-12">
              <Image
                className=" rounded-lg block w-full object-cover max-w-full max-sm:w-[250px]"
                src="/newsarea/news-2.jpg"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className=" pr-24 pl-2 max-sm:pr-10">
              <div className="">
                <h5 className=" mb-5 text-sm tracking-wider text-blue-500 uppercase">
                  Web Development
                </h5>
                <h1 className=" tracking-[-0.5px] leading-9 mb-6 font-bold text-3xl ">
                  Bluebase launches Tap to Pay on smartphone for international
                  and domestic business
                </h1>
                <p className=" font-medium text-lg border-b-2 border-slate-300 leading-7 text-slate-400 pb-8 mb-10">
                  Small UK merchants, businesses, and other enterprises can now
                  use Tap to Pay on service to replace payment terminals at
                  point of sale.
                </p>
                <ul className=" flex flex-wrap gap-8 list-none">
                  <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-700 min-w-[200px]">
                    <BadgeCheck className=" bg-blue-400 text-slate-700 rounded-full" />
                    Collaboration Tools
                  </li>
                  <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-700 min-w-[200px]">
                    <BadgeCheck className=" bg-blue-400 text-slate-700 rounded-full" />
                    Smart Reminders
                  </li>
                  <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-700 min-w-[200px]">
                    <BadgeCheck className=" bg-blue-400 text-slate-600 rounded-full" />
                    Requirement
                  </li>
                  <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-700 min-w-[200px]">
                    <BadgeCheck className=" bg-blue-400 text-slate-600 rounded-full" />
                    Task Management
                  </li>
                </ul>
              </div>
              <a>
                <ChevronUpCircle />
              </a>
            </div>
          </div>
          <div className="flex-1 bg-blue-50 rounded-lg  pt-[24px] px-[22px] pb-[113px] relative overflow-hidden max-sm:px-[10px]">
            <div className=" overflow-hidden mb-12">
              <Image
                className=" rounded-lg block w-full object-cover max-w-full max-sm:w-[250px]"
                src="/newsarea/news-2.jpg"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className=" pr-24 pl-2 max-sm:pr-10">
              <div className="">
                <h5 className=" mb-5 text-sm tracking-wider text-blue-500 uppercase">
                  Web Development
                </h5>
                <h1 className=" tracking-[-0.5px] leading-9 mb-6 font-bold text-3xl ">
                  Bluebase launches Tap to Pay on smartphone for international
                  and domestic business
                </h1>
                <p className=" font-medium text-lg border-b-2 border-slate-300 leading-7 text-slate-400 pb-8 mb-10">
                  Small UK merchants, businesses, and other enterprises can now
                  use Tap to Pay on service to replace payment terminals at
                  point of sale.
                </p>
                <ul className=" flex flex-wrap gap-8 list-none">
                  <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-700 min-w-[200px]">
                    <BadgeCheck className=" bg-blue-400 text-slate-700 rounded-full" />
                    Collaboration Tools
                  </li>
                  <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-700 min-w-[200px]">
                    <BadgeCheck className=" bg-blue-400 text-slate-700 rounded-full" />
                    Smart Reminders
                  </li>
                  <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-700 min-w-[200px]">
                    <BadgeCheck className=" bg-blue-400 text-slate-600 rounded-full" />
                    Requirement
                  </li>
                  <li className="flex items-center font-normal text-lg leading-4 gap-5 text-slate-700 min-w-[200px]">
                    <BadgeCheck className=" bg-blue-400 text-slate-600 rounded-full" />
                    Task Management
                  </li>
                </ul>
              </div>
              <a>
                <ChevronUpCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
