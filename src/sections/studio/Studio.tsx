import { useState } from "react";
import { StudioDisplay } from "./StudioDisplay";
import { motion } from "framer-motion";

type serviceType = {
  id: number;
  title: string;
};

const services: serviceType[] = [
  { id: 1, title: "Development" },
  { id: 2, title: "Woo Commerce" },
  { id: 3, title: "CRM Solutions" },
  { id: 4, title: "Web Designing" },
  { id: 5, title: "IT Support" },
];

export function Studio() {
  const [selectedService, setSelectedService] = useState<serviceType>({
    id: 1,
    title: "Development",
  });

  return (
    <section className="bg-slate-100 pt-12 pb-36 max-sm:pb-10">
      <div className="flex flex-col mt-24 mb-14 w-full max-w-[1311px] max-md:my-10 max-md:max-w-full max-container">
        <div className="self-center text-md font-mono font-bold leading-4 text-center text-[#97203E] uppercase whitespace-nowrap tracking-[5px]">
          CASE STUDIES
        </div>
        <div className="self-center mt-7 text-6xl font-bold tracking-tighter text-center leading-[55.8px] text-neutral-800 max-md:max-w-full max-md:text-5xl">
          Detailing of our <span className="text-red-600">products</span>
        </div>
        <div className="gap-5 px-3.5 py-2 mt-14 text-xl leading-5 text-center bg-white rounded-xl text-zinc-900 text-opacity-80 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <ul className="flex gap-10 flex-wrap justify-around items-center rounded-md max-md:flex-col py-2">
            {services.map((service) => (
              <motion.li
                key={service.id}
                className={`flex-auto md:max-w-64 z-20 self-stretch rounded-xl max-md:px-5 py-6 ${
                  selectedService.id === service.id ? "text-white" : ""
                }`}
                animate={
                  selectedService.id === service.id
                    ? { x: 0, opacity: 1 }
                    : { x: 0, opacity: 0.5 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <button
                  onClick={() => setSelectedService(service)}
                  className={`${
                    selectedService.id === service.id
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  } px-7 py-6 rounded-full transition-all text-lg duration-300 ease-in-out`}
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
