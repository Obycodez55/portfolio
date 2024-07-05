import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
       Kind Words From{" "}
        <span className="text-purple"> Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            />
      </div>
    </div>
  );
};

export default Testimonials;
