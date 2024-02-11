import { Prefooter } from "./Prefooter";

export function Footer() {
  return (
    <section className="bg-black pt-24 relative pb-36">
      <div className="max-container">
        <Prefooter />
        <div className="flex  border-b-[1px] border-slate-400 border-opacity-60">
          <div className="flex flex-1  gap-5 justify-around pr-10 pb-12 mt-24 font-medium  max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-sm:pr-1">
            <div className="flex flex-col basis-0">
              <h2 className="text-base leading-4 text-white">Services</h2>
              <div className="mt-10 text-base leading-6 text-white text-opacity-80">
                {" "}
                IT Support{" "}
              </div>
              <div className="mt-8 text-base leading-6 text-white text-opacity-80">
                {" "}
                Web Design{" "}
              </div>
              <div className="mt-7 text-base leading-6 text-white text-opacity-80">
                {" "}
                Development{" "}
              </div>
              <div className="flex gap-2.5 justify-between mt-6 whitespace-nowrap">
                <div className="grow text-base leading-6 text-white text-opacity-80">
                  {" "}
                  Cloud Things{" "}
                </div>
                <a
                  href="#"
                  className="justify-center px-2.5 py-2 text-sm leading-3 text-white bg-blue-700 rounded-xl aspect-[1.84]"
                >
                  {" "}
                  New{" "}
                </a>
              </div>
              <div className="mt-7 text-base leading-6 text-white text-opacity-80">
                {" "}
                E-Commerce{" "}
              </div>
              <div className="mt-8 text-base leading-6 text-white text-opacity-80">
                {" "}
                CRM Solutions{" "}
              </div>
            </div>
            <nav className="flex flex-col text-base leading-6 whitespace-nowrap basis-0 text-white text-opacity-80">
              <h2 className="text-white leading-[100%]">Company</h2>
              <a href="#" className="mt-9">
                Blog
              </a>
              <a href="#" className="mt-7">
                About Us
              </a>
              <a href="#" className="mt-9">
                Partners
              </a>
              <a href="#" className="mt-8">
                Careers
              </a>
              <a href="#" className="mt-9">
                Events
              </a>
              <a href="#" className="mt-9">
                Team
              </a>
            </nav>
            <nav className="flex flex-col text-base leading-6 whitespace-nowrap basis-0 text-white text-opacity-80">
              <h2 className="text-white leading-[100%]">Product</h2>
              <a href="#" className="mt-10">
                Case Studies
              </a>
              <a href="#" className="mt-8">
                Our Pricing
              </a>
              <a href="#" className="mt-8">
                Features
              </a>
              <a href="#" className="mt-8">
                Overview
              </a>
              <a href="#" className="mt-8">
                New Releases
              </a>
              <a href="#" className="mt-8">
                Solutions
              </a>
            </nav>
            <nav className="flex flex-col text-base leading-6 whitespace-nowrap basis-0 text-white text-opacity-80">
              <h2 className="text-white leading-[100%]">Our Fields</h2>
              <a href="#" className="mt-10">
                Healthcare
              </a>
              <a href="#" className="mt-8">
                Banks
              </a>
              <a href="#" className="mt-8">
                Logistics
              </a>
              <a href="#" className="mt-7">
                Supermarkets
              </a>
              <a href="#" className="mt-8">
                Industries
              </a>
              <a href="#" className="mt-8">
                Hotels
              </a>
            </nav>
            <nav className="flex flex-col text-base leading-6 whitespace-nowrap basis-0 text-white text-opacity-80">
              <h2 className="text-white leading-[100%]">Legal</h2>
              <a href="#" className="mt-9">
                Licenses
              </a>
              <a href="#" className="mt-8">
                Settings
              </a>
              <a href="#" className="mt-7">
                Cookies
              </a>
              <a href="#" className="mt-9">
                Document
              </a>
              <a href="#" className="mt-9">
                Terms
              </a>
              <a href="#" className="mt-8">
                Privacy
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-center  px-20 pt-px pb-7 mt-24 text-base leading-4 text-white whitespace-nowrap before:absolute before:w-[1px] before:bg-slate-200 before:h-[369px] before:opacity-20 before:left-[70%] max-md:px-5 max-sm:hidden">
            <div>Phone</div>
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
    </section>
  );
}
