import Image from "next/image";

import Button from "./Button";

import { Fragment} from "react";

import { Header } from "@/components/header/Header";
import { Hero } from "@/components/Hero";
import { RoadMap } from "@/components/RoadMap";
import { Offering } from "@/components/Offering";
import { Studio } from "@/components/studio/Studio";
import { AboutArea } from "@/components/AboutArea";
import { Projects } from "@/components/Project/Projects";

import { NewsArea } from "@/components/newarea/NewArea";
import { ContactArea } from "@/components/ContactArea";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
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
        <Footer />
      </main>
    </Fragment>
  );
}
