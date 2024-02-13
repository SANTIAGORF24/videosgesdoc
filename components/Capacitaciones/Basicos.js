"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import ReactPlayer from "react-player";

export function Basic() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-7xl font-bold py-20">Capacitaciones</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between w-4/5 ">
          <div>
            {" "}
            <Card className="py-4 bg-gradient-to-r from-yellow-300  via-red-500 to-purple-500 ">
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
            <Card className="py-4 bg-gradient-to-r from-yellow-300  via-red-500 to-purple-500 ">
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
            <Card className="py-4 bg-gradient-to-r from-yellow-300  via-red-500 to-purple-500 ">
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
