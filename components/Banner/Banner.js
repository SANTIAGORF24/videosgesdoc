import React from "react";

export function Banner() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center py-36">
          <h1 className="text-9xl font-bold ">APRENDAMOS</h1>
          <h1 className="text-9xl font-bold ">GESDOC</h1>
          <h5 className="w-3/6 text-xl py-10 text-slate-500">
            Bienvenido a nuestra página dedicada a la campaña ¡Aprendamos
            Gesdoc! Aquí encontrarás tutoriales detallados para dominar el
            correcto funcionamiento de GESDOC.
          </h5>
        </div>
      </div>
    </>
  );
}
