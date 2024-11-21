import { cn } from "@/lib/utils";
import React, { useState } from "react";

export type Formdata = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};

interface FormProps {
  className?: string;
}

export const Form: React.FC<FormProps> = ({ className }) => {
  const [data, setData] = useState<Formdata>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    console.log(formData);
    const newData: Formdata = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      country: formData.get("country") as string,
      message: formData.get("message") as string,
    };
    setData(newData);
    console.log(newData);

    try {
      const response = await fetch("/api/email/", {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const message = await response.json();
      if (!message) console.log("empty");

      console.log(message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex flex-col grow lg:px-10 xl:px-10 py-12 w-full bg-red-50 rounded-xl max-md:mt-6 ",
          className
        )}
      >
        <div className="w-full px-4">
          <p className="mt-12 text-sm font-medium leading-4 text-[#97203E] uppercase tracking-[5px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
            Contact
          </p>
          <h1 className="mt-10 text-3xl lg:text-5xl font-bold tracking-tighter leading-[50px] text-neutral-800 max-md:mr-0.5 max-md:max-w-full max-md:text-4xl">
            Lets get in touch
          </h1>
          <p className="pt-1.5 pb-9 mt-2 text-md lg:text-xl leading-7 text-[#97203E] border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:mr-0.5 max-md:max-w-full">
            You can reach us anytime via
            <a
              href="mailto: " //insert mail here
              className="font-medium text-[#97203E]"
            >
              example@xyz.com
            </a>
          </p>
        </div>
        <div className="px-4">
          <div className="flex gap-5    xl:justify-between mt-10 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <div className="flex flex-col lg:flex-1 gap-2 lg:gap-4 ">
                <label
                  htmlFor="firstName"
                  className="text-base leading-4 text-zinc-900"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  className="justify-center p-2 items-start lg:py-3.5 text-base whitespace-nowrap bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5"
                  aria-label="First Name"
                />
              </div>

              {/* <div className="flex flex-col  lg:flex-1">
                <label
                  htmlFor="lastName"
                  className="text-base leading-4 text-zinc-900"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className="justify-center items-start p-2 py-3.5 mt-5 text-base whitespace-nowrap bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5"
                  aria-label="Last Name"
                />
              </div> */}
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:gap-5 mt-4 lg:mt-7 ">
            <h2 className=" text-base leading-4 text-zinc-900 max-md:mr-0.5 max-md:max-w-full">
              {" "}
              Email{" "}
            </h2>
            <input
              type="email"
              name="email"
              className="w-full py-3.5 p-2 text-base whitespace-nowrap bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5 max-md:mr-0.5 max-md:max-w-full"
              aria-label="Your Email"
            />
          </div>
          <div className="flex flex-col w-full gap-3 lg:gap-4 lg:flex-row xl:justify-between mt-4 lg:mt-7 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
            <div className="flex flex-col lg:flex-1 gap-2 lg:gap-4">
              <label
                htmlFor="phoneNumber"
                className="text-base leading-4 text-zinc-900"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                className="justify-center items-start lg:py-3.5 p-2 text-base whitespace-nowrap bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5 max-md:pl-7"
                aria-label="Your Number"
              />
            </div>
            <div className="flex flex-col lg:flex-1 whitespace-nowrap  gap-2 lg:gap-4">
              <label
                htmlFor="country"
                className="text-base leading-4 text-zinc-900"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                className="justify-center items-start lg:py-3.5 p-2 text-base bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5"
                aria-label="Your Country"
              />
            </div>
          </div>
          <div className="w-[70%] lg:w-full">
            <h2 className="mt-7 text-base leading-4 text-zinc-900 max-md:mr-0.5 max-md:max-w-full">
              {" "}
              Message{" "}
            </h2>
            <textarea
              name="message"
              className="mt-4 max-w-full bg-white rounded-md border border-solid border-gray-900 border-opacity-20 h-16 lg:h-[130px] w-[546px] max-md:mr-0.5"
              aria-label="Message"
            ></textarea>
          </div>
          <div className=" flex items-center w-full">
            <div className="flex gap-1.5 self-start mt-6 text-base leading-4 text-zinc-900 text-opacity-80 max-md:ml-1">
              <div className="bg-white rounded-sm border border-solid border-neutral-500 h-[22px] w-[22px]" />
              <div className="flex-auto self-start mt-1.5">
                You agree to our
              </div>
              <div className="justify-center py-1 mt-[2px] my-auto whitespace-nowrap border-b border-solid border-b-zinc-900 border-b-opacity-80">
                <a href="#" className="font-medium text-[#97203E]">
                  terms and conditions.
                </a>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="justify-center w-full items-center xl:px-16 py-5 mt-8 text-lg leading-7 text-center whitespace-nowrap bg-red-700 rounded-md text-stone-50 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
          >
            {" "}
            Get Started{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
