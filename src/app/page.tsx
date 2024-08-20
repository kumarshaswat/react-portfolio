import Image from "next/image";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Navbar from "@/components/navbar";
import WordRotate from "@/components/magicui/word-rotate";
import { FlipWords } from "@/components/ui/flip-words";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

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
              className="text-7xl font-bold text-black dark:text-white pl-[11.5rem]"
              words={["Web Developer.", "UX Designer.", "CS Student.", "Full-Stack Developer.", "Tech Enthusiast.", "Team Leader.", "Problem Solver.", "Contributor.", "Creative Coder.", "Learner.", "Mentor."]}
            />
          </div>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={2500}>
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
              <BlurFade delay={5 * 0.1}>
                <ProjectCard
                  title="My Awesome Project"
                  href="/ACM-website"
                  description="This is a detailed description of my awesome project. It covers the main features and technologies used."
                  dates="August 2024 - Present"
                  tags={['JavaScript', 'React', 'Next.js']}
                  image="/assets/acm_website.png"
                  links={[
                    {
                      icon: <span>🔗</span>, // Replace with an actual icon component
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
                  title="My Awesome Project"
                  href="https://example.com/project"
                  description="This is a detailed description of my awesome project. It covers the main features and technologies used."
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
              <BlurFade delay={5 * 0.1}>
                <ProjectCard
                  title="My Awesome Project"
                  href="https://example.com/project"
                  description="This is a detailed description of my awesome project. It covers the main features and technologies used."
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
              <BlurFade delay={5 * 0.1}>
                <ProjectCard
                  title="My Awesome Project"
                  href="https://example.com/project"
                  description="This is a detailed description of my awesome project. It covers the main features and technologies used."
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
              <BlurFade delay={5 * 0.1}>
                <ProjectCard
                  title="My Awesome Project"
                  href="https://example.com/project"
                  description="This is a detailed description of my awesome project. It covers the main features and technologies used."
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
