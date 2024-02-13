import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div
      // style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      className="grid sm:grid-cols-3 gap-8 mx-auto max-w-[95vw] lg:max-w-7xl p-2"
    >
      <div className="flex flex-col gap-2 items-center h-[500px]">
        <div className="relative w-full h-[250px]">
          <Image src={"/service1.png"} fill={true} alt="service1" />
        </div>{" "}
        <h1 className="font-bold text-2xl text-gray-700 text-center items-center">
          Something for everyone
        </h1>
        <p className="text-gray-400 font-semibold ">
          We ve got every meal covered and more: from mouthwatering snacks and
          curated alcohol selections to indulgent desserts and even everyday
          essentials like paper towels. Elevate your dining experience with our
          diverse range of offerings
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center h-[500px]">
        <div className="relative w-full h-[250px]">
          <Image src={"/service2.png"} fill={true} alt="service2" />
        </div>
        <h1 className="font-bold text-2xl text-gray-700 text-center ">
          Delivery or pickup
        </h1>
        <p className="text-gray-400 font-semibold">
          Sit back and relax, indulge in culinary bliss as we bring our
          exceptional dishes straight to your doorstep. Experience the
          convenience of our seamless delivery service, ensuring that the rich
          flavors and quality ingredients of our cuisine reach you in perfect
          condition
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center h-[500px]">
        <div className="relative w-full h-[250px]">
          <Image src={"/service3.png"} fill={true} alt="service3" />
        </div>
        <h1 className="font-bold text-2xl text-gray-700 text-center">
          Premium Quality Food Selection
        </h1>
        <p className="text-gray-400 font-semibold">
          Indulge in an exquisite culinary journey with our meticulously curated
          selection of quality food. Each dish is a testament to our commitment
          to exceptional taste, freshness, and premium ingredients.
        </p>
      </div>
    </div>
  );
};

export default Services;
