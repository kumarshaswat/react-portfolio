"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { HeroParallax } from "@/components/acm-hero-parallax";
import DotPattern from "@/components/magicui/dot-pattern";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <section className="bg-black">
        <HeroParallax products={products} />
        <div className="max-w-7xl mx-auto py-4 px-4 w-full  left-0 top-0">
            <h1 className="text-2xl md:text-7xl font-bold text-slate-50">
                The development
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-slate-50">
                We build beautiful products with the latest technologies and frameworks.
                We are a team of passionate developers and designers that love to build
                amazing products.
            </p>
        </div>
    </section>
  );
}
export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "/assets/acm_website.png",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "/assets/acm_website.png",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "/assets/acm_website.png",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "/assets/acm_website.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "/assets/acm_website.png",
    },
  ];