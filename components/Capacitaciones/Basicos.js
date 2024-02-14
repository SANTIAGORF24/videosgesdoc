"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import ReactPlayer from "react-player";
import "../../app/globals.css";
export function Basic() {
  const customBorderStyle = {
    borderImage: "linear-gradient(to right, #fcd34d, #ff6384, #8a2be2)",
    borderImageSlice: 1,
  };
  return (
    <>
      <div id="basicos">
        <div className="flex flex-col items-center">
          <h2 className="text-7xl font-bold py-20">Radicación</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="sm:flex sm:justify-between sm:w-4/5 max-sm:w-full max-sm:p-6 max-sm:gap-6 max-sm:flex max-sm:flex-col">
          <div>
            {" "}
            <Card
              style={customBorderStyle}
              className="py-4 bg-transparent border-solid border-3"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white ">
                  Capitulo 2
                </p>
                <small className="text-white">memorando</small>
                <h4 className="font-bold text-large text-white">
                  Redactar Memorando (IE)
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <ReactPlayer
                  url={"https://youtu.be/lBsLRmMn2uo"}
                  controls
                  width={400}
                  height={202}
                />
              </CardBody>
            </Card>
          </div>
          <div>
            {" "}
            <Card
              style={customBorderStyle}
              className="py-4 bg-transparent border-solid border-3 "
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white ">
                  Capitulo 3
                </p>
                <small className="text-white">memorando</small>
                <h4 className="font-bold text-large text-white">
                  Responder un Memorando (IE)
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <ReactPlayer
                  url={"https://youtu.be/ZuW73B7lEj8"}
                  controls
                  width={400}
                  height={202}
                />
              </CardBody>
            </Card>
          </div>
          <div>
            {" "}
            <Card
              style={customBorderStyle}
              className="py-4 bg-transparent border-solid border-3"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white ">
                  Nueva version
                </p>
                <small className="text-white">GESDOC</small>
                <h4 className="font-bold text-large text-white">
                  Nueva version
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <ReactPlayer
                  url={"https://youtu.be/xc_IkvEPGUg"}
                  controls
                  width={400}
                  height={202}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
