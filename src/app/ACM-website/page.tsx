"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { HeroParallax } from "@/components/acm-hero-parallax";
import DotPattern from "@/components/magicui/dot-pattern";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <section>
        <HeroParallax products={products} />
        <div className="max-w-7xl mx-auto py-4 px-4 w-full flex left-0 top-0">
            <div className="w-[30vw] p-8 flex justify-center">
              <h1 className="text-4xl font-bold text-white">Project Vision</h1>
            </div>
            <div className="w-[70vw] p-8 overflow-y-auto">
              <div className="space-y-6 max-w-2xl text-base md:text-xl text-neutral-200">
                <p>
                  During the development of Bankwise, our team recognized the common challenge of managing <span className="text-white font-semibold">multiple banking apps</span> to control one&apos;s finances. We aimed to <span className="text-white font-semibold">simplify the user experience</span> by creating an app that serves as a banking portfolio, enabling users to <span className="text-white font-semibold">manage their finances</span> across multiple banking accounts from different banks in one place.
                </p>
                <p>
                  In addition to simplifying the user experience, Bankwise also aims to <span className="text-white font-semibold">enhance financial literacy</span> among its users. We understand that many people struggle to understand financial concepts and are often intimidated by financial jargon. Therefore, we have <span className="text-white font-semibold">incorporated educational tools and resources</span> within the app to help users develop their financial knowledge and make informed decisions. Our goal is to <span className="text-white font-semibold">empower users</span> with the skills and knowledge necessary to achieve their financial goals and improve their overall financial well-being.
                </p>
                <p>
                  With Bankwise, users can not only manage their finances easily and conveniently but also gain the knowledge and confidence to <span className="text-white font-semibold">take control of their financial future</span>.
                </p>
              </div>
        </div>
        </div>
    </section>
  );
}

const products = [
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