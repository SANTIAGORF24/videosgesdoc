"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ReactPlayer from "react-player";
import "../../app/globals.css";

export function Novedades() {
  const customBorderStyle = {
    borderImage: "linear-gradient(to right, #fcd34d, #ff6384, #8a2be2)",
    borderImageSlice: 1,
  };

  return (
    <>
      <div id="basicos" className="py-10">
        <div className="flex flex-col items-center">
          <h2 className="sm:text-7xl font-bold text-5xl">Novedades</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div className="w-full">
            <Card
              style={{
                ...customBorderStyle,
                width: "400px", // Adjust width as needed
              }}
              className="py-4 bg-transparent border-solid border-3"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white ">
                  Nueva version
                </p>
                <small className="text-white">Novedades</small>
                <h4 className="font-bold text-large text-white">
                  Nueva version
                </h4>
              </CardHeader>
              <CardBody
                className="overflow-visible py-2"
                style={{ width: "100%" }}
              >
                <ReactPlayer
                  url={"https://youtu.be/xc_IkvEPGUg"}
                  controls
                  width="100%"
                  height="100%"
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
