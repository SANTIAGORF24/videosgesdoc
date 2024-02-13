"use client";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import { Video } from "@/components/Banner/Video";
import { Basic } from "@/components/Capacitaciones/Basicos";
export default function Home() {
  return (
    <>
      <Banner />
      <Video />
      <Basic />
    </>
  );
}
