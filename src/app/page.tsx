import Image from "next/image";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import DotPattern from "@/components/magicui/dot-pattern";
import WordRotate from "@/components/magicui/word-rotate";
import { FlipWords } from "@/components/ui/flip-words";
import BlurFade from "@/components/magicui/blur-fade";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col h-full w-full">
      <section className="items-left pt-[20vh] pl-[20vw] h-max pb-14">
        <BlurFade>
          <h1 className="text-7xl font-bold"> Hello, I&apos;m</h1>
          <h1 className="text-7xl font-bold text-[#7374be] dark:text-[#9394f1]">Shaswat Kumar.</h1>
          <div className="flex">
            <h1 className="text-7xl font-bold">I&apos;m a</h1>
            <FlipWords
              className="text-7xl font-bold text-[#0a0a0a] dark:text-[#f8fafc] pl-[11.5rem]"
              words={["Web Developer.", "UX Designer.", "CS Student.", "Full-Stack Developer.", "Tech Enthusiast.", "Team Leader.", "Problem Solver.", "Contributor.", "Creative Coder.", "Learner.", "Mentor."]}
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
                  title="The ACM Website"
                  href="/ACM-website"
                  description="This is my case study on how I assisted with the UI/UX and development of the ACM website. I mainly worked on the landing page, creating most of the assets and the animations."
                  dates="August 2024 - Present"
                  tags={['JavaScript', 'React', 'Next.js']}
                  image="/assets/acm_website.png"
                  links={[
                    {
                      icon:  <span>🔗</span>, // You can replace this with an actual icon component
                      type: 'GitHub',
                      href: 'https://github.com/example/project',
                    },
                    {
                      icon: <span>📄</span>, // Replace with an actual icon component
                      type: 'Documentation',
                      href: 'https://docs.example.com/project',
                    },
                  ]}
                  className="my-custom-class"
                />
              </BlurFade>
              <BlurFade delay={11 * 0.1}>
                <ProjectCard
                  title="The UX Website"
                  href="https://example.com/project"
                  description="This is my case study on how I designer and devloped the new UX webite. I assisted in creating the UI/UX and I worked with a team to devlop the website and bring it to life."
                  dates="August 2024 - Present"
                  tags={['JavaScript', 'React', 'Next.js']}
                  link="https://example.com/project"
                  image="/assets/ux_website.png"
                  links={[
                    {
                      icon: <span>🔗</span>, // You can replace this with an actual icon component
                      type: 'GitHub',
                      href: 'https://github.com/example/project',
                    },
                    {
                      icon: <span>📄</span>, // Replace with an actual icon component
                      type: 'Documentation',
                      href: 'https://docs.example.com/project',
                    },
                  ]}
                  className="my-custom-class"
                />
              </BlurFade>
              <BlurFade delay={12 * 0.1}>
                <ProjectCard
                  title="Bankwise"
                  href="https://example.com/project"
                  description="This is a case study on how we devloped a full project in less than 24 hours. Bankwise is a banking portfolio, enabling users to manage their finances across multiple banking accounts from different banks in one place. "
                  dates="November 2022"
                  tags={['JavaScript', 'React', 'Next.js']}
                  link="https://example.com/project"
                  image="/assets/bankwise_mockup.png"
                  links={[
                    {
                      icon: <span>🔗</span>, // You can replace this with an actual icon component
                      type: 'GitHub',
                      href: 'https://github.com/example/project',
                    },
                    {
                      icon: <span>📄</span>, // Replace with an actual icon component
                      type: 'Documentation',
                      href: 'https://docs.example.com/project',
                    },
                  ]}
                  className="my-custom-class"
                />
              </BlurFade>
              <BlurFade delay={5 * 0.1}>
                <ProjectCard
                  title="Sociate"
                  href="https://example.com/project"
                  description="This is a case study of how I mastered my craft in User Research and UI/UX design. I worked with a team of 5 developers to create a social media platform that connects people with similar interests."
                  dates="August 2024 - Present"
                  tags={['JavaScript', 'React', 'Next.js']}
                  link="https://example.com/project"
                  image="/assets/sociate_mockup.png"
                  links={[
                    {
                      icon: <span>🔗</span>, // You can replace this with an actual icon component
                      type: 'GitHub',
                      href: 'https://github.com/example/project',
                    },
                    {
                      icon: <span>📄</span>, // Replace with an actual icon component
                      type: 'Documentation',
                      href: 'https://docs.example.com/project',
                    },
                  ]}
                  className="my-custom-class"
                />
              </BlurFade>
              <BlurFade delay={5 * 0.1}>
                <ProjectCard
                  title="Shop & Share"
                  href="https://example.com/project"
                  description="This is a case study on my first ever projects that ignited the flame of love for front-end and back-end tools. Four other developers and I participated in a highly competitive development program to make a collaborative shopping list app."
                  dates="August 2024 - Present"
                  tags={['JavaScript', 'React', 'Next.js']}
                  link="https://example.com/project"
                  image="/path/to/project-image.jpg"
                  links={[
                    {
                      icon: <span>🔗</span>, // You can replace this with an actual icon component
                      type: 'GitHub',
                      href: 'https://github.com/example/project',
                    },
                    {
                      icon: <span>📄</span>, // Replace with an actual icon component
                      type: 'Documentation',
                      href: 'https://docs.example.com/project',
                    },
                  ]}
                  className="my-custom-class"
                />
              </BlurFade>
          </div>
        </div>
      </section>
    </main>
  );
}
