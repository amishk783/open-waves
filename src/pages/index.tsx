import Image from "next/image";

import Button from "./Button";

import { Fragment } from "react";

import { Header } from "../_components/header/Header";
import { Hero } from "@/sections/Hero";
import { RoadMap } from "@/sections/RoadMap";
import { Offering } from "@/sections/Offering";
import { Studio } from "@/sections/studio/Studio";
import { AboutArea } from "@/sections/AboutArea";
import { Projects } from "@/sections/Project/Projects";

import { NewsArea } from "@/sections/newarea/NewArea";
import { ContactArea } from "@/sections/ContactArea";
import { Footer } from "@/_components/footer/Footer";

export default function Home() {
  return (
    <Fragment>
      <div className="flex justify-center">{/* <NavigationMenuDemo /> */}</div>
      <main className=" overflow-hidden">
        <Hero />
        <RoadMap />
        <Offering />
        <Studio />
        <AboutArea />
        <Projects />
        <NewsArea />
        <ContactArea />
      </main>
    </Fragment>
  );
}
