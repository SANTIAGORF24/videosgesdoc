import Image from "next/image";
import React from "react";

const Footer = () => {
  const sections = [
    "Inicio",
    "Acerca de",
    "Proyectos",
    "Testimonios",
    "Equipo",
    "Contáctanos",
  ];

  return (
    <div className="w-full h-full bg-transparent flex sm:justify-center py-24 max-sm:px-12">
      <div className="w-4/5 flex flex-col items-center gap-6 max-sm:w-full">
        <div className="w-full flex gap-4 justify-center items-center">
          <div className="w-[100px]">
            <Image
              src="/assets/img/logo.png"
              width={100}
              height={100}
              alt="img"
              className="w-10 h-10 object-contain brightness-200"
            />
          </div>

          <p className="font-bold text-white text-xl">Soporte TICS</p>
        </div>
        <div className="flex gap-4 max-sm:w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-8 max-sm:gap-x-20 max-sm:px-10">
          {sections.map((tx, i) => (
            <a className="font-bold text-white" href="#" key={i}>
              {tx}
            </a>
          ))}
        </div>
        <div>
          <p className="text-white">
            Contactanos a:{" "}
            <a
              className="font-bold"
              href="mailto:soportetics@mindeporte.gov.co"
            >
              soportetics@mindeporte.gov.co
            </a>
          </p>
        </div>
        <div>
          <p className="text-white max-sm:px-5">
            ©2024 Todos los derechos reservados. Santiago Ramírez Forero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
