"use client";
import { ScrollProgress } from "../../components/ui/scroll-progress";
import Image from "next/image";
import Link from "next/link";
import { Radley } from "next/font/google";

const TitleFont = Radley({
  subsets: ["latin"],
  weight: "400",
});

export default function BankwiseCaseStudy() {
  return (
    <div className="min-h-screen bg-[#111019] text-white pt-16 px-[15vw]">
      <main>
        <ScrollProgress className="bg-[#dd6e42]" />
        <section className="py-20 pt-10 text-left relative">
          <div className="container mx-auto px-4 pt-10">
            <p className="text-lg leading-[34px] text-[#d8d7e2] mb-4 pl-4">
              HACKUTD IX || FALL 2022 || 1ST PLACE FOR BEST DESIGN
            </p>
            <div className={`${TitleFont.className}`}>
              <h1 className="text-[#dd6e42] text-8xl font-black mb-4 pl-4">
                Bankwise
              </h1>
              <p className="text-[#dd6e42] text-3xl tracking-wider pl-4">
                All your banks, all in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              {[
                {
                  title: "MY ROLES",
                  items: ["User Research", "Product Design", "App Development"],
                },
                {
                  title: "MY TEAM",
                  items: ["Manasi Vipat", "Abel Thomas", "Abhishek Madhavan"],
                },
                { title: "TOOLS USED", items: ["Figma", "React Native"] },
                { title: "TIMELINE", items: ["24 hours"] },
              ].map((section, index) => (
                <div key={index}>
                  <h2 className="text-lg leading-[34px] mb-4">
                    {section.title}
                  </h2>
                  {section.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-[#d8d7e2] mb-2">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-bold mb-4">Project Vision</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#807e92] text-xl leading-relaxed mb-4">
                  During the development of Bankwise, our team recognized the
                  common challenge of managing
                  <span className="text-[#d8d7e2]">
                    {" "}
                    multiple banking apps
                  </span>{" "}
                  to control one&apos;s finances. We aimed to
                  <span className="text-[#d8d7e2]">
                    {" "}
                    simplify the user experience
                  </span>{" "}
                  by creating an app that serves as a banking portfolio,
                  enabling users to{" "}
                  <span className="text-[#d8d7e2]">
                    manage their finances
                  </span>{" "}
                  across multiple banking accounts from different banks in one
                  place.
                </p>
                <p className="text-[#807e92] text-xl leading-relaxed">
                  In addition to simplifying the user experience, Bankwise also
                  aims to
                  <span className="text-[#d8d7e2]">
                    {" "}
                    enhance financial literacy
                  </span>{" "}
                  among its users. We have{" "}
                  <span className="text-[#d8d7e2]">
                    incorporated educational tools and resources
                  </span>{" "}
                  within the app to help users develop their financial knowledge
                  and make informed decisions. Our goal is to
                  <span className="text-[#d8d7e2]"> empower users</span> with
                  the skills and knowledge necessary to achieve their financial
                  goals and improve their overall financial well-being.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111019]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-bold mb-4">Prompt</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#807e92] text-xl leading-relaxed mb-6">
                  We were presented with several prompts to base our app on at
                  HackUTD, and we opted to center our app around the following:
                </p>
                {[
                  '"Create the best financial hack. Money impacts much of our lives and we would like to promote change for good." (Capital One)',
                  '"Use technology to design a creative solution to a problem that your community currently faces." (State Farm)',
                  '"What enhancements or improvements can be made to optimize our end-user experience?" (RingCentral)',
                ].map((quote, index) => (
                  <blockquote
                    key={index}
                    className="border-l-4 border-[#ee4274] pl-4 mb-4 italic text-xl text-[#d8d7e2]"
                  >
                    {quote}
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-bold mb-4">The Framework</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#807e92] text-xl leading-relaxed mb-6">
                  To better understand how we would{" "}
                  <span className="text-[#d8d7e2]">
                    construct the core experience
                  </span>{" "}
                  for Bankwise, we created a framework. This helped us focus
                  more on the{" "}
                  <span className="text-[#d8d7e2]">overall structure</span> of
                  the app and less on the specific features that we would
                  implement later on. The Bankwise framework is a{" "}
                  <span className="text-[#d8d7e2]">five-step process</span> that
                  focuses on creating a simplified user experience and providing
                  a more efficient way of managing finances across multiple
                  banking accounts.
                </p>
              </div>
            </div>
            <Image
              src="/bankwise/bankwise-framework.png"
              alt="Bankwise Framework"
              width={2000}
              height={2000}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="py-20 bg-[#111019]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-bold mb-4">The Solution</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#807e92] text-xl leading-relaxed mb-6">
                  The solution we came up with is a{" "}
                  <span className="text-[#d8d7e2]">mobile application</span>{" "}
                  that simplifies the process of
                  <span className="text-[#d8d7e2]">
                    {" "}
                    managing multiple
                  </span>{" "}
                  banking accounts by enabling users to add and manage various
                  bank accounts, check their credit card statements, view their
                  bank statements, and manage their finances
                  <span className="text-[#d8d7e2]">
                    {" "}
                    through a single app
                  </span>{" "}
                  without the need to{" "}
                  <span className="text-[#d8d7e2]">
                    log in to multiple banking apps
                  </span>
                  .
                </p>
                <p className="text-[#807e92] text-xl leading-relaxed">
                  With future developments in mind, Bankwise aims to{" "}
                  <span className="text-[#d8d7e2]">
                    expand its functionality
                  </span>{" "}
                  and integrate it with multi-tool platforms, making it a
                  one-stop-shop for{" "}
                  <span className="text-[#d8d7e2]">
                    managing finances across the world.
                  </span>
                  <br /> <br />
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/bankwise/bankwise-presentation-pic.png"
            alt="Bankwise App Screenshot"
            width={2000}
            height={2000}
            className="rounded-lg shadow-lg mb-6"
          />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-bold mb-4">Obstacles</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#807e92] text-xl leading-relaxed mb-4">
                  Developing Bankwise presented{" "}
                  <span className="text-[#d8d7e2]">several challenges</span>{" "}
                  that our team had to overcome:
                </p>
                <ul className="list-disc list-inside text-[#807e92] text-xl leading-relaxed space-y-2 mb-4">
                  <li>
                    Ensuring the app was{" "}
                    <span className="text-[#d8d7e2]">secure and reliable</span>
                  </li>
                  <li>
                    <span className="text-[#d8d7e2]">
                      Integrating with multiple banking systems
                    </span>
                    , each with their own APIs and unique features
                  </li>
                  <li>
                    Making the app{" "}
                    <span className="text-[#d8d7e2]">
                      intuitive and easy to use
                    </span>{" "}
                    for a broad range of users
                  </li>
                </ul>
                <p className="text-[#807e92] text-xl leading-relaxed">
                  To achieve this, we conducted{" "}
                  <span className="text-[#d8d7e2]">
                    extensive user testing and design iterations
                  </span>{" "}
                  to ensure that the app&apos;s interface was user-friendly and
                  straightforward.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111019]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-bold mb-4">Reflections</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#807e92] text-xl leading-relaxed mb-4">
                  As the development of Bankwise progressed, our team
                  encountered a variety of challenges that required{" "}
                  <span className="text-[#d8d7e2]">
                    creative problem-solving and adaptation
                  </span>
                  . Personally, one of my biggest takeaways from this experience
                  was the importance of{" "}
                  <span className="text-[#d8d7e2]">
                    collaboration and communication
                  </span>{" "}
                  within a team.
                </p>
                <p className="text-[#807e92] text-xl leading-relaxed mb-6">
                  I also learned the importance of being{" "}
                  <span className="text-[#d8d7e2]">
                    adaptable and open to change
                  </span>
                  . As with any project,{" "}
                  <span className="text-[#d8d7e2]">
                    unexpected challenges arose
                  </span>
                  that required us to shift our approach and pivot our strategy.
                  Being{" "}
                  <span className="text-[#d8d7e2]">open to new ideas</span> and
                  willing to{" "}
                  <span className="text-[#d8d7e2]">adjust our plans </span>
                  allowed us to overcome these challenges and{" "}
                  <span className="text-[#d8d7e2]">
                    create a better product
                  </span>
                  .
                </p>
              </div>
            </div>
            <Image
              src="/bankwise/bankwise-winning-pic.png"
              alt="Bankwise Team Winning"
              width={2000}
              height={2000}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
