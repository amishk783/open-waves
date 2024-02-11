export function AboutArea() {
  return (
    <section className=" pt-52 pb-28">
      <div className="max-container">
        <div className="w-full flex items-center justify-between gap-10">
          <div
            id="left"
            className=" flex flex-col max-w-96 w-full my-auto text-xl font-medium leading-6 text-zinc-900 text-opacity-80 max-md:mt-10"
          >
            <div className="text-sm text-blue-700 uppercase tracking-[5px]">
              CONSULTING EXCELLENCE
            </div>
            <h1 className="mt-8 text-5xl font-bold tracking-tighter leading-[56px] text-neutral-800 max-md:text-4xl max-md:leading-10">
              Best pathway to <br /> our clients.
            </h1>
            <p className="mt-11 leading-7 max-md:mt-10">
              Our consulting process begins with a<br /> thorough assessment of
              your current IT <br /> infrastructure, workflows, and pain points.
            </p>
            <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
              <div className="self-start w-5 h-5 bg-blue-700 rounded-xl" />
              <div className="flex-auto">24/7 Full Service Support</div>
            </div>
            <div className="flex gap-5 justify-between mt-8">
              <div className="self-start w-5 h-5 bg-blue-700 rounded-xl" />
              <div className="flex-auto">Immediate Response</div>
            </div>
            <div className="flex gap-5 justify-between mt-8">
              <div className="self-start w-5 h-5 bg-blue-700 rounded-xl" />
              <div className="flex-auto">Easy to Approach us</div>
            </div>
          </div>
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="gap-5 max-md:gap-0 max-md:">
              <div className="flex flex-col ml-auto w-[382px] px-10 relative max-md:ml-0 max-md:w-full ">
                <div className="flex flex-col max-md:mt-10  ">
                  <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                    Tailored Solutions
                  </h2>
                  <div className="mt-7 text-lg leading-7 text-zinc-900 text-opacity-70">
                    Develop IT solutions based on the <br /> analysis phase.
                  </div>
                </div>
                <div className=" left-[-113px] top-[60px] justify-center items-center px-4 mt-5 w-full text-2xl font-bold tracking-tight text-center text-blue-700 whitespace-nowrap bg-violet-50 rounded-3xl aspect-square h-[53px] leading-[53.02px] max-md:mt-10">
                  01
                </div>
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:max-w-full">
                  <div className="py-12 pr-5  rounded-xl max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                      <div className="w-[14%] max-md:ml-0 max-md:w-full">
                        <div className="justify-center items-center px-4 mt-5 w-full text-2xl font-bold tracking-tight text-center text-blue-700 whitespace-nowrap bg-violet-50 rounded-3xl aspect-square h-[53px] leading-[53.02px] max-md:mt-10">
                          01
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full bg-violet-50 py-10 pl-4 pr-5">
                        <div className="flex flex-col max-md:mt-10">
                          <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                            Discovery and Analysis
                          </h2>
                          <div className="mt-5 text-lg leading-7 text-zinc-900 text-opacity-70">
                            Perform a analysis of the client's <br /> existing
                            IT systems.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-11 rounded-xl max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
                    <div className="justify-center items-center self-stretch px-3.5 my-auto w-full text-2xl font-bold tracking-tight text-center text-blue-700 whitespace-nowrap bg-violet-50 rounded-3xl aspect-square h-[53px] leading-[53.02px] max-md:mt-10">
                      03
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full bg-violet-50  py-10 pl-4 pr-5">
                    <div className="flex flex-col grow max-md:mt-10">
                      <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                        Deployment and Support
                      </h2>
                      <div className="mt-6 text-lg leading-7 text-zinc-900 text-opacity-70">
                        Regularly communicate with our <br /> client to any
                        concern.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
