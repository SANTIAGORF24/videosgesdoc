"use client";
import React from "react";
import ReactPlayer from "react-player";

export function Video() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div>
          <ReactPlayer
            url={"https://youtu.be/Aop2r7vseUo"}
            controls
            width={1000}
            height={562}
          />
        </div>
      </div>
    </>
  );
}
