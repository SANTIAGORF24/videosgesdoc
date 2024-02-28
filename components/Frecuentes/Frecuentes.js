"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import ReactPlayer from "react-player";
import "../../app/globals.css";

export function Frecuentes() {
  const customBorderStyle = {
    borderImage: "linear-gradient(to right, #fcd34d, #ff6384, #8a2be2)",
    borderImageSlice: 1,
  };

  return (
    <>
      <div id="basicos" className="py-10">
        <div className="flex flex-col items-center">
          <h2 className="sm:text-7xl font-bold text-5xl">
            PREGUNTAS FRECUENTES
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div className="w-full">
            <Card
              style={customBorderStyle}
              className="py-4 bg-transparent border-solid border-3"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white ">
                  Capitulo 4
                </p>
                <small className="text-white">Preguntas Frecuentes</small>
                <h4 className="font-bold text-large text-white">
                  Eliminar plantilla de vuelta
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <ReactPlayer
                  url={"https://youtu.be/-ckjcoPzwAU"}
                  controls
                  width="100%"
                  height="auto"
                />
              </CardBody>
            </Card>
          </div>
          <div className="w-full">
            <Card
              style={customBorderStyle}
              className="py-4 bg-transparent border-solid border-3 "
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white ">
                  Capitulo 5
                </p>
                <small className="text-white">Preguntas Frecuentes</small>
                <h4 className="font-bold text-large text-white">
                  Mi coordinador no puede editar la plantilla
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <ReactPlayer
                  url={"https://youtu.be/eHP-uMhT_o4"}
                  controls
                  width="100%"
                  height="auto"
                />
              </CardBody>
            </Card>
          </div>
          <div className="w-full">
            <Card
              style={customBorderStyle}
              className="py-4 bg-transparent border-solid border-3"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white">
                  Capitulo 6
                </p>
                <small className="text-white">Preguntas Frecuentes</small>
                <h4 className="font-bold text-large text-white">
                  ER no sale de mi bandeja (estado finalizado/asignado)
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <ReactPlayer
                  url={"https://youtu.be/-1DEJd3DrTo"}
                  controls
                  width="100%"
                  height="auto"
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
