import { useState } from "react";
import { StudioDisplay } from "./StudioDisplay";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

type serviceType = {
  id: number;
  title: string;
};

const services: serviceType[] = [
  {
    id: 1,
    title: "Development",
  },
  {
    id: 2,
    title: "Woo Commerce",
  },
  { id: 3, title: "CRM Solutions" },
  { id: 4, title: "Web Designing" },
  { id: 5, title: "IT Support" },
];
export function Studio() {
  const [selectedService, setSelectedService] = useState<serviceType>({
    id: 1,
    title: "Development",
  });
  console.log(selectedService.id);

  return (
    <section className="  bg-slate-100 pt-12 pb-36 max-sm:pb-10  ">
      <div className="flex flex-col mt-24 mb-14 w-full max-w-[1311px] max-md:my-10 max-md:max-w-full max-container">
        <div className="self-center text-sm font-medium leading-4 text-center text-[#97203E] uppercase whitespace-nowrap tracking-[5px]">
          CASE STUDIES
          
        </div>
        <div className="self-center mt-7 text-6xl font-bold tracking-tighter text-center leading-[55.8px] text-neutral-800 max-md:max-w-full max-md:text-5xl">
          Detailing of our products
        </div>
        <div className=" gap-5 px-3.5 py-2 mt-14 text-xl leading-5 text-center bg-white rounded-xl text-zinc-900 text-opacity-80 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <ul className="flex  justify-around items-center rounded-md max-sm:flex-col">
            {services.map((service) => (
              <motion.li
                initial={{}}
                key={service.title}
                className={`flex-auto z-20 self-stretch rounded-xl max-md:px-5 py-6 ${
                  selectedService && selectedService.title === service.title
                    ? " hoverover text-white  duration-10 translateX(100%)"
                    : "translateX(0%) transform 0.3s ease"
                } `}
                animate={
                  selectedService && selectedService.title === service.title
                    ? { translateX: "0%", translateY: "0%" }
                    : { translateX: "-5%", translateY: "0%" }
                }
                transition={{ duration: 0.1, ease: "easeIn" }}
              >
                <span className="z-[-10] hoverover bg-black"></span>
                <button
                  onClick={() => setSelectedService(service)}
                  className=""
                >
                  {service.title}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
        {selectedService && <StudioDisplay serviceId={selectedService.id} />}
      </div>
    </section>
  );
}
