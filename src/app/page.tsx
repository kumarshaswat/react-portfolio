import Image from "next/image";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import DotPattern from "@/components/magicui/dot-pattern";
import WordRotate from "@/components/magicui/word-rotate";
import { FlipWords } from "@/components/ui/flip-words";
import BlurFade from "@/components/magicui/blur-fade";
import ProjectCard from "@/components/project-card";
import { Github, BookText, Figma, Link } from "lucide-react";
import { HackathonCard } from "@/components/ui/hackathon-card";
import { DATA } from "@/data";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col h-full w-full">
      <section className="items-left pt-[20vh] pl-[20vw] h-max pb-[10vh]">
        <BlurFade>
          <h1 className="text-7xl font-bold"> Hello, I&apos;m</h1>
          <h1 className="text-7xl font-bold text-[#7374be] dark:text-[#9394f1]">
            Shaswat Kumar.
          </h1>
          <div className="flex">
            <h1 className="text-7xl font-bold">I&apos;m a</h1>
            <FlipWords
              className="text-7xl font-bold text-[#0a0a0a] dark:text-[#f8fafc] pl-[11rem]"
              words={[
                "Web Developer.",
                "UX Designer.",
                "CS Student.",
                "Full-Stack Developer.",
                "Tech Enthusiast.",
                "Team Leader.",
                "Problem Solver.",
                "Contributor.",
                "Creative Coder.",
                "Learner.",
                "Mentor.",
              ]}
            />
          </div>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={5 * 0.1}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-[60vw] mx-auto">
            <BlurFade delay={10 * 0.1}>
              <ProjectCard
                title="BoardScan"
                href="https://github.com/kumarshaswat/BoardScan"
                description="I built an end-to-end pipeline to solve the 'Analog Data Loss' problem by digitizing whiteboard photos into fully editable vector graphics. The project integrates a React Native mobile app, a Flask backend, an OpenCV extraction pipeline, and a custom YOLOv26-Medium model fine-tuned for real-world whiteboard conditions."
                dates="January 2026 - June 2026"
                tags={[
                  "React Native",
                  "Python",
                  "Computer Vision",
                  "YOLO",
                  "Flask",
                ]}
                link="https://github.com/kumarshaswat/BoardScan"
                image="/assets/boardscan_mockup.png"
                links={[
                  {
                    icon: <Github size={16} />,
                    type: "GitHub",
                    href: "https://github.com/kumarshaswat/BoardScan",
                  },
                ]}
                className="my-custom-class"
                target="_blank"
                rel="noopener noreferrer"
              />
            </BlurFade>
            <BlurFade delay={10 * 0.1}>
              <ProjectCard
                title="ELMO - Capstone Project"
                href="/elmo"
                description="ELMO is an AI platform that streamlines news consumption by delivering concise, customizable summaries from multiple sources. I deployed and fine-tuned a local DeepSeek model to power this analysis, utilizing advanced prompt engineering for optimal text summarization."
                dates="January 2025 - May 2025"
                tags={["Python", "Machine Learning", "AI"]}
                link="https://example.com/project"
                image="/assets/elmo_landing.png"
                links={[
                  {
                    icon: <Github size={16} />,
                    type: "GitHub",
                    href: "https://github.com/Sharktail001/ELMO-Capstone-Proj",
                  },
                ]}
                className="my-custom-class"
              />
            </BlurFade>
            <BlurFade delay={10 * 0.1}>
              <ProjectCard
                title="The UX Website"
                href="https://uxutd.com/"
                description="This is my case study on how I acted as PM for the design and development of the new UX website. I assisted in creating the UI/UX and I worked with a team to develop the website and bring it to life."
                dates="September 2024 - December 2024"
                tags={["JavaScript", "React", "Next.js"]}
                link="https://example.com/project"
                image="/assets/ux_website.png"
                links={[
                  {
                    icon: <Github size={16} />, // You can replace this with an actual icon component
                    type: "GitHub",
                    href: "https://github.com/uxutd/UX-Website",
                  },
                  {
                    icon: <Link size={16} />, // You can replace this with an actual icon component
                    type: "Link",
                    href: "https://uxutd.com/",
                  },
                ]}
                className="my-custom-class"
                target="_blank"
                rel="noopener noreferrer"
              />
            </BlurFade>
            <BlurFade delay={11 * 0.1}>
              <ProjectCard
                title="The ACM Website"
                href="https://acmutd.co/"
                description="Acted as the sole front-end developer over a 2-3 month summer period to completely refresh the ACM website. Designed and built the new landing page, about page, and all necessary core pages to modernize the organization's digital presence."
                dates="Summer 2024"
                tags={["JavaScript", "React", "Next.js"]}
                image="/assets/acm_website.png"
                links={[
                  {
                    icon: <Github size={16} />,
                    type: "GitHub",
                    href: "https://github.com/acmutd/website",
                  },
                  {
                    icon: <Link size={16} />,
                    type: "Link",
                    href: "https://acmutd.co/",
                  },
                ]}
                className="my-custom-class"
                target="_blank"
                rel="noopener noreferrer"
              />
            </BlurFade>
            <BlurFade delay={13 * 0.1}>
              <ProjectCard
                title="Sociate"
                href="https://www.figma.com/design/RXnhf5yWDDQ7MydwndY1FG/UCI-Designathon-(Sociate)?node-id=0-1&t=uHGs9E88A4CRU7Xo-1"
                description="This is a case study of how I mastered my craft in User Research and UI/UX design. I worked with a team of 5 developers to create a social media platform that connects people with similar interests."
                dates="August 2023"
                tags={["JavaScript", "React", "Next.js"]}
                link="https://example.com/project"
                image="/assets/sociate_mockup.png"
                links={[
                  {
                    icon: <Figma size={16} />, // You can replace this with an actual icon component
                    type: "Figma",
                    href: "https://www.figma.com/design/RXnhf5yWDDQ7MydwndY1FG/UCI-Designathon-(Sociate)?node-id=0-1&t=uHGs9E88A4CRU7Xo-1",
                  },
                  {
                    icon: <span>📄</span>, // Replace with an actual icon component
                    type: "Research",
                    href: "https://www.figma.com/design/RXnhf5yWDDQ7MydwndY1FG/UCI-Designathon-(Sociate)?node-id=57-3&t=uHGs9E88A4CRU7Xo-1",
                  },
                ]}
                className="my-custom-class"
                target="_blank"
                rel="noopener noreferrer"
              />
            </BlurFade>
            <BlurFade delay={12 * 0.1}>
              <ProjectCard
                title="Bankwise"
                href="/bankwise"
                description="This is a case study on how I developed a full project in less than 24 hours. Bankwise is a banking portfolio, enabling users to manage their finances across multiple banking accounts from different banks in one place. "
                dates="November 2022"
                tags={["JavaScript", "React", "Next.js"]}
                link="https://example.com/project"
                image="/assets/bankwise_mockup.png"
                links={[
                  {
                    icon: <Github size={16} />, // You can replace this with an actual icon component
                    type: "GitHub",
                    href: "https://github.com/kumarshaswat/bankwise",
                  },
                  {
                    icon: <BookText size={16} />, // Replace with an actual icon component
                    type: "DevPost",
                    href: "https://devpost.com/software/bankwise",
                  },
                ]}
                className="my-custom-class"
              />
            </BlurFade>
            <BlurFade delay={14 * 0.1}>
              <ProjectCard
                title="Shop & Share"
                href="https://www.figma.com/design/6xRaV6rfhLhvA5NgHsZ4Es/Shop%26Share-Logo-Ideas?node-id=27-49&t=OYyXUF6daKQR5cJW-1"
                description="This is a case study on my first ever projects that ignited the flame of love for front-end and back-end tools. Four other developers and I participated in a highly competitive development program to make a collaborative shopping list app."
                dates="August 2022 - December 2022"
                tags={["JavaScript", "React", "Next.js"]}
                link="https://example.com/project"
                image="/assets/shopandshare_mockup.png"
                links={[
                  {
                    icon: <span>🔗</span>, // You can replace this with an actual icon component
                    type: "GitHub",
                    href: "https://github.com/acm-projects/Shop-and-Share",
                  },
                  {
                    icon: <span>📄</span>, // Replace with an actual icon component
                    type: "Presentation",
                    href: "https://docs.google.com/presentation/d/1-nI3FBE1ePgHm5GRyTW2AMS_ICKkEjp5RNpKb2NZ7xg/edit#slide=id.p",
                  },
                ]}
                className="my-custom-class"
                target="_blank"
                rel="noopener noreferrer"
              />
            </BlurFade>
          </div>{" "}
          <section id="Work">
            <div className="space-y-12 w-full py-12 mx-auto max-w-[60vw]">
              <BlurFade delay={BLUR_FADE_DELAY * 13}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                      Work Experience
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      I like building things
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      During my time in university, I joined a bunch of
                      organizations and gained valuable experience working on
                      real-world projects. Here are some of the highlights of my
                      work experience.
                    </p>
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                  {DATA.hackathons.map((project, id) => (
                    <BlurFade
                      key={project.title + project.dates}
                      delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                    >
                      <HackathonCard
                        title={project.title}
                        description={project.description}
                        location={project.location}
                        dates={project.dates}
                        image={project.image}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </ul>
              </BlurFade>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
