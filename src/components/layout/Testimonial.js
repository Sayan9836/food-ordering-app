"use client";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import customers from "../../data.js";
import Review from "./Review.js";
const Testimonial = () => {
  return (
    <div className="flex items-center flex-wrap justify-between mx-auto max-w-7xl">
      <div className="p-4">
        <h1 className="font-bold text-3xl text-gray-700 text-left mb-8">
          What Our Customers Say
        </h1>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={900}
          infiniteLoop={true}
          showStatus={false}
          className="max-w-[90vw] lg:max-w-[40vw] flex-2 hover:bg-transparent border-r-1 border-r-gray-100"
        >
          {customers?.map((review, idx) => {
            return <Review key={idx} details={review} />;
          })}
        </Carousel>
      </div>
      <div className="lg:w-[40%] sm:w-full">
        <Image
          src={
            "https://www.foodiv.com/wp-content/themes/foodiv/assets/images/testimonal.png"
          }
          width={"600"}
          height={"200"}
          objectFit="cover"
          className=""
        />
      </div>
    </div>
  );
};

export default Testimonial;

//
