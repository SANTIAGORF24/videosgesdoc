"use client";
import React from "react";
import ReactPlayer from "react-player";

export function Video() {
  return (
    <>
      <div className="flex flex-col items-center h-[32rem]">
        <div className="w-5/6 h-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2">
          <ReactPlayer
            url={"https://youtu.be/Aop2r7vseUo"}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}
