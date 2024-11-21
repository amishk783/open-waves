import { AccordionItem } from "../Accordion/ AccordionItem";
import { Accordion } from "../Accordion/Accordion";
import { AccordionContent } from "../Accordion/AccordionContent";
import { AccordionTrigger } from "../Accordion/AccordionTrigger";
import { Prefooter } from "./Prefooter";
import { footerLinks } from "@/constant";
export function Footer() {
  return (
    <section className="bg-black md:pt-24 relative">
      <div className="max-container">
        <Prefooter />
        <div className="flex flex-col xl:flex-row mx-10 border-b-[1px] border-slate-400 border-opacity-60">
          <div className=" hidden md:grid w-full grid-cols-3 xl:grid-cols-5  pb-12 mt-24 font-medium  gap-20  ">
            {footerLinks &&
              footerLinks.map((item, index) => (
                <div key={index} className="flex flex-col w-48 xl:basis-0">
                  <h2 className="text-base leading-4 text-white">
                    {item.title}
                  </h2>

                  {item.links.map((link, index) => (
                    <div
                      key={index}
                      className="mt-10 text-base leading-6 text-white text-opacity-80"
                    >
                      {link.name}
                    </div>
                  ))}
                </div>
              ))}
          </div>
          <div className="md:hidden mt-10 max-w-full pr-1 pb-10">
            {footerLinks &&
              footerLinks.map((item, index) => (
                <div key={index} className="flex flex-col xl:w-48 xl:basis-0">
                  <Accordion>
                    <AccordionItem
                      className="my-3 text-white bg-card"
                      key={index}
                      value={index + 1}
                    >
                      <AccordionTrigger className="">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="">
                        {item.links.map((link, index) => (
                          <div key={index} className="text-white py-2">
                            {link.name}
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
          </div>
          <div className="flex flex-col xl:items-center px-10  xl:px-20 pb-7 mt-10 xl:mt-24 text-base leading-4  text-white whitespace-nowrap max-md:px-5 max-sm:hidden">
            <div className="xl:border-l-[1px] xl:px-14 xl:py-8">
              <p>Phone</p>
              <p className="mt-9 leading-10 text-white text-opacity-80">
                {" "}
                +1-455-1482-236 <br /> +1-938-740-7555{" "}
              </p>
              <div className="mt-16 max-md:mt-10">Mail</div>
              <p className="mt-9 leading-10 text-white text-opacity-80">
                {" "}
                bluebase@mail.com <br /> mandrodio@mail.com{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
