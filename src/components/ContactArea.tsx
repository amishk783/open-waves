import Image from "next/image";
import { useState } from "react";

export type Formdata = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};

export function ContactArea() {
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
    <section>
      <div className="flex max-container space-x-10 mb-40">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col grow px-20 py-12 w-full bg-blue-50 rounded-xl max-md:px-5 max-md:mt-6 max-md:max-w-full"
        >
          <header className="mt-14 text-sm font-medium leading-4 text-blue-700 uppercase tracking-[5px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
            {" "}
            Contact{" "}
          </header>
          <h1 className="mt-8 text-5xl font-bold tracking-tighter leading-[50px] text-neutral-800 max-md:mr-0.5 max-md:max-w-full max-md:text-4xl">
            {" "}
            Lets get in touch{" "}
          </h1>
          <p className="pt-1.5 pb-9 mt-9 text-xl leading-7 text-blue-700 border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:mr-0.5 max-md:max-w-full">
            {" "}
            You can reach us anytime via{" "}
            <a
              href="mailto:bluebase@mail.com"
              className="font-medium text-blue-700"
            >
              bluebase@mail.com
            </a>{" "}
          </p>
          <div className="flex gap-5 justify-between mt-10 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="firstName"
                className="text-base leading-4 text-zinc-900"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                className="justify-center items-start py-3.5 pr-16 pl-4 mt-5 text-base whitespace-nowrap bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5"
                aria-label="First Name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="lastName"
                className="text-base leading-4 text-zinc-900"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                className="justify-center items-start py-3.5 pr-16 pl-4 mt-5 text-base whitespace-nowrap bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5"
                aria-label="Last Name"
              />
            </div>
          </div>
          <h2 className="mt-7 text-base leading-4 text-zinc-900 max-md:mr-0.5 max-md:max-w-full">
            {" "}
            Email{" "}
          </h2>
          <input
            type="email"
            name="email"
            className="justify-center items-start py-3.5 pr-16 pl-4 mt-5 text-base whitespace-nowrap bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5 max-md:mr-0.5 max-md:max-w-full"
            aria-label="Your Email"
          />
          <div className="flex gap-5 justify-between mt-7 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="phoneNumber"
                className="text-base leading-4 text-zinc-900"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                className="justify-center items-start px-16 py-3.5 mt-5 text-base whitespace-nowrap bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5 max-md:pl-7"
                aria-label="Your Number"
              />
            </div>
            <div className="flex flex-col flex-1 whitespace-nowrap">
              <label
                htmlFor="country"
                className="text-base leading-4 text-zinc-900"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                className="justify-center items-start py-3.5 pr-16 pl-4 mt-4 text-base bg-white rounded-md border border-solid border-gray-900 border-opacity-20 text-zinc-900 text-opacity-60 max-md:pr-5"
                aria-label="Your Country"
              />
            </div>
          </div>
          <h2 className="mt-7 text-base leading-4 text-zinc-900 max-md:mr-0.5 max-md:max-w-full">
            {" "}
            Message{" "}
          </h2>
          <textarea
            name="message"
            className="mt-4 max-w-full bg-white rounded-md border border-solid border-gray-900 border-opacity-20 h-[130px] w-[546px] max-md:mr-0.5"
            aria-label="Message"
          ></textarea>
          <div className="flex gap-1.5 self-start mt-6 text-base leading-4 text-zinc-900 text-opacity-80 max-md:ml-1">
            <div className="bg-white rounded-sm border border-solid border-neutral-500 h-[22px] w-[22px]" />
            <div className="flex-auto self-start mt-1.5">You agree to our</div>
            <div className="grow justify-center px-px py-1 my-auto whitespace-nowrap border-b border-solid border-b-zinc-900 border-b-opacity-80">
              <a href="#" className="font-medium text-blue-700">
                terms and conditions.
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="justify-center items-center px-16 py-5 mt-8 text-lg leading-7 text-center whitespace-nowrap bg-blue-700 rounded-md text-stone-50 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
          >
            {" "}
            Get Started{" "}
          </button>
        </form>
        <div
          className="flex grow justify-center items-center px-16 py-12 w-full bg-blue-50 rounded-xl max-md:px-5 max-md:mt-6"
          aria-label="Statistics"
        >
          <div className="flex flex-col mt-28 max-w-full w-[191px] max-md:mt-10">
            <div className="flex flex-col pt-1.5 pr-14 pb-12 border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:pr-5">
              <div className="flex gap-2 justify-between leading-[100%] text-neutral-800">
                <div className="flex-grow text-4xl font-medium">22+ </div>
                <div className="flex-grow self-start mt-3 text-xl">Years</div>
              </div>
              <div className="mt-5 text-lg leading-5 text-blue-700 whitespace-nowrap">
                Field Experience
              </div>
            </div>
            <div className="flex flex-col pt-1.5 pr-6 pb-12 mt-12 border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:pr-5 max-md:mt-10">
              <div className="flex gap-2 justify-between leading-[100%] text-neutral-800">
                <div className="flex-grow text-4xl font-medium">950+ </div>
                <div className="flex-grow self-start mt-3 text-xl">
                  Projects
                </div>
              </div>
              <div className="mt-4 mb-1 text-lg leading-5 text-blue-700 whitespace-nowrap">
                Done Around World
              </div>
            </div>
            <div className="flex flex-col pt-1.5 pr-11 pb-12 mt-12 whitespace-nowrap border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:pr-5 max-md:mt-10">
              <div className="text-4xl font-medium leading-9 text-neutral-800">
                99%
              </div>
              <div className="mt-5 mb-1 text-lg leading-5 text-blue-700">
                Client Satisfaction
              </div>
            </div>
            <div className="flex flex-col pt-1.5 pr-12 pb-12 mt-12 border-b border-solid border-b-zinc-900 border-b-opacity-20 max-md:pr-5 max-md:mt-10">
              <div className="flex gap-1 justify-between leading-[100%] text-neutral-800">
                <div className="flex-grow text-4xl font-medium">1995+ </div>
                <div className="flex-grow self-start mt-3 text-xl">Year</div>
              </div>
              <div className="mt-5 mb-1 text-lg leading-5 text-blue-700 whitespace-nowrap">
                Established On
              </div>
            </div>
            <div className="flex gap-2.5 justify-between mt-12 leading-[100%] text-neutral-800 max-md:mt-10">
              <div className="text-4xl font-medium">2 </div>
              <div className="flex-auto self-start mt-3 text-xl">Mins</div>
            </div>
            <div className="mt-5 text-lg leading-5 text-blue-700">
              Response Time
            </div>
          </div>
        </div>
        <div className="flex flex-col grow items-start px-16 py-12 mx-auto w-full bg-blue-50 rounded-xl max-md:px-5 max-md:mt-6">
          <div className="flex flex-col pb-11 mt-32 max-w-full border-b border-solid border-b-zinc-900 border-b-opacity-20 w-[150px] max-md:mt-10">
            <Image
              src="/support-icon.svg"
              alt="contact"
              width={50}
              height={50}
            />
            <h2 className="mt-8 text-2xl font-medium leading-6 whitespace-nowrap text-neutral-800">
              Contact Info
            </h2>
            <div className="mt-7 text-base leading-6 text-zinc-900 text-opacity-80">
              +1 455 1482 236
              <br />
              Bluebase@mail.com
            </div>
          </div>
          <div className="flex flex-col pb-11 mt-10 max-w-full border-b border-solid border-b-zinc-900 border-b-opacity-20 w-[150px]">
            <Image src="/map-icon.svg" alt="contact" width={50} height={50} />
            <h2 className="mt-8 text-2xl font-medium leading-6 whitespace-nowrap text-neutral-800">
              Visit our office
            </h2>
            <div className="mt-7 text-base leading-6 text-zinc-900 text-opacity-80">
              16/9, Down Street
              <br />
              Edinburgh, Scotland
              <br />
              United Kingdom
            </div>
          </div>
          <div className="flex gap-3 mt-10 text-base font-medium leading-4 whitespace-nowrap text-zinc-900 text-opacity-80">
            <Image src="/instagram.png" alt="contact" width={25} height={50} />
            <a
              href="https://dribbble.com"
              className="flex-auto my-auto"
              aria-label="Dribbble"
              role="button"
            >
              Dribbble
            </a>
          </div>
          <div className="flex gap-3 mt-6 text-base font-medium leading-4 whitespace-nowrap text-zinc-900 text-opacity-80">
            <Image src="/instagram.png" alt="contact" width={25} height={50} />
            <a
              href="https://twitter.com"
              className="flex-auto my-auto"
              aria-label="Twitter"
              role="button"
            >
              Twitter
            </a>
          </div>
          <div className="flex gap-3 mt-6 text-base font-medium leading-4 whitespace-nowrap text-zinc-900 text-opacity-80">
            <Image src="/instagram.png" alt="contact" width={25} height={50} />
            <a
              href="https://instagram.com"
              className="flex-auto"
              aria-label="Instagram"
              role="button"
            >
              Instagram
            </a>
          </div>
          <div className="flex gap-3 mt-6 text-base font-medium leading-4 whitespace-nowrap text-zinc-900 text-opacity-80">
            <Image src="/instagram.png" alt="contact" width={25} height={50} />
            <a
              href="https://linkedin.com"
              className="flex-auto my-auto"
              aria-label="LinkedIn"
              role="button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
