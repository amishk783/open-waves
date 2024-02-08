import Image from "next/image";

import Button from "./Button";
import Todos from "@/components/todo/Todos";
import { Fragment, useState } from "react";
import { todo } from "node:test";
import { NavigationMenuDemo } from "@/components/header/NavigationDemo";
import { NavBar } from "@/components/header/NavBar";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/Hero";
import { RoadMap } from "@/components/RoadMap";
import { Offering } from "@/components/Offering";
import { Studio } from "@/components/studio/Studio";
import { AboutArea } from "@/components/AboutArea";
import { Projects } from "@/components/Project/Projects";
import { ProjectSlider } from "@/components/Project/ProjectSlider";

export type Todo = {
  id: number;
  text: string;
};

let initalTodos: Todo[] = [{ id: 1, text: "hello" }];
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(initalTodos);

  const onClickHandler = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    console.log(id);

    console.log(id);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.currentTarget.elements[0] as HTMLInputElement).value;
    setTodos((prevState) => {
      const newTodo: Todo = {
        id: prevState.length + 1,
        text: inputValue, // Assuming the input is the first element in the form
      };
      return [...prevState, newTodo];
    });
  };

  return (
    <Fragment>
      <div className="flex justify-center">
        {/* <NavigationMenuDemo /> */}
        <Header />
      </div>
      <main className="">
        <Hero />
        <RoadMap />
        <Offering />
        <Studio />
        <AboutArea />
        <Projects />
        
      </main>
    </Fragment>
  );
}
