import Image from "next/image";
import { MoveRight } from "lucide-react";
const servicedisplay: {
  id: number;
  serviceTitle: string;
  serviceDescription: string;
  firstImageSrc: string;
  secondImageSrc: string;
  firstImageTitle: string;
  secondImageTitle: string;
  descriptionImageSrc: string;
}[] = [
  {
    id: 1,
    serviceTitle: "Development",
    descriptionImageSrc: "service-icon-1.svg",
    serviceDescription:
      "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    firstImageSrc: "/studio/case-studio-1-1.jpg",
    firstImageTitle: "Web Development",
    secondImageSrc: "/studio/case-studio-1-2.jpg",
    secondImageTitle: "Mobile Development",
  },
  {
    id: 2,
    serviceTitle: "Woo Commerce",
    descriptionImageSrc: "service-icon-2.svg",
    serviceDescription:
      "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    firstImageSrc: "/studio/case-studio-2-1.jpg",
    firstImageTitle: "electro",
    secondImageSrc: "/studio/case-studio-2-2.jpg",
    secondImageTitle: "Visit Demo",
  },
  {
    id: 3,
    serviceTitle: "CRM Solutions",
    descriptionImageSrc: "service-icon-3.svg",
    serviceDescription:
      "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    firstImageSrc: "/studio/case-studio-3-1.jpg",
    firstImageTitle: "CRM Solutions",
    secondImageSrc: "/studio/case-studio-3-2.jpg",
    secondImageTitle: "Mobile Development",
  },

  {
    id: 4,
    serviceTitle: "Web Desiging",
    descriptionImageSrc: "service-icon-4.svg",
    serviceDescription:
      "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    firstImageSrc: "/studio/case-studio-4-1.jpg",
    firstImageTitle: "Web Designing",
    secondImageSrc: "/studio/case-studio-4-2.jpg",
    secondImageTitle: "Graphic Designing",
  },

  {
    id: 5,
    serviceTitle: "IT Support",
    descriptionImageSrc: "service-icon-5.svg",
    serviceDescription:
      "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    firstImageSrc: "/studio/case-studio-5-1.jpg",
    firstImageTitle: "IT Support",
    secondImageSrc: "/studio/case-studio-5-2.jpg",
    secondImageTitle: "Web Support",
  },
];

export function StudioDisplay({ serviceId }: { serviceId: number }) {
  const matchedService = servicedisplay.find((item) => item.id === serviceId);
  console.log(matchedService);

  return (
    <div className="mt-10 max-md:max-w-full max-sm:mt-2">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
          <div className="grow px-9 py-7 w-full bg-white rounded-xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center w-full text-sm font-medium leading-5 text-blue-700 whitespace-nowrap bg-white rounded-xl shadow-sm max-md:mt-10">
                  <div className="flex overflow-hidden relative flex-col items-start pt-2 pr-16 pb-12 pl-6 w-full aspect-[0.86] max-md:px-5">
                    <Image
                      className="object-cover absolute inset-0 size-full"
                      src={matchedService?.firstImageSrc}
                      alt="description icon"
                      width={180}
                      height={50}
                    />
                    <div className="relative justify-center px-5 py-3 mb-60 rounded-xl bg-blue-700 bg-opacity-10 max-md:px-5 max-md:mb-10">
                      {matchedService?.firstImageTitle}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center w-full text-sm font-medium leading-5 text-blue-700 whitespace-nowrap bg-white rounded-xl shadow-sm max-md:mt-10">
                  <div className="flex overflow-hidden relative flex-col items-start pt-6 pr-16 pb-12 pl-6 w-full aspect-[0.73] max-md:px-5">
                    <Image
                      className="object-cover absolute inset-0 size-full"
                      src={matchedService?.secondImageSrc}
                      alt="description icon"
                      width={200}
                      height={50}
                    />
                    <div className="relative justify-center px-5 py-3 mb-60 rounded-xl bg-blue-700 bg-opacity-10 max-md:px-5 max-md:mb-10">
                      {matchedService?.secondImageTitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-14 py-12 w-full bg-white rounded-xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
            <Image
              className="size-full w-20"
              src={matchedService?.descriptionImageSrc}
              alt="description icon"
              width={20}
              height={20}
            />
            <div className="mt-8 text-2xl font-medium leading-6 text-neutral-800">
              {matchedService?.serviceTitle}
            </div>
            <div className="mt-6 text-lg leading-7 text-zinc-900 text-opacity-70 max-md:mr-2 pb-5">
              Software development is a dynamic and rapidly
              <br />
              evolving field that plays a pivotal role in shaping
              <br />
              the digital landscape we live in today. It
              <br />
              encompasses the processes, methodologies, and
              <br />
              practices used to design, create, deploy, and
              <br />
              maintain software applications and systems.
            </div>
            <a className=" w-10 px-3 py-3 h-9 rounded-full bg-blue-500 leading-10 ml-auto">
              <MoveRight className="" />
            </a>
            {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae579939d063c108c5dd05cccf4fa37433a9bf2015360578402455c4f3aa903?apiKey=418e80658b5e4102b77efea2f9b19dd5&"
                  className="self-end mt-6 aspect-square w-[53px]"
                /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
