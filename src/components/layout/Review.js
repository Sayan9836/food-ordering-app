import Image from "next/image";
import React from "react";
const Review = ({ details }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="">
        <p className="text-gray-400 text-left">{details.desc}</p>
      </div>

      <div className="flex items-center justify-between">
        <div
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            border: "6px solid wheat",
          }}
        >
          {/* eslint-disable-next-line */}
          <img
            src={details.img}
            alt="pic"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </div>

        <p className="flex flex-col gap-2">
          <span className="font-bold text-2xl text-red-500">
            {details.name}
          </span>
          <span>{details.address}</span>
        </p>
      </div>
    </div>
  );
};

export default Review;
