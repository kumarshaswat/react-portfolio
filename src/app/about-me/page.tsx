import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col h-full w-full">
      <section className="items-left pt-[20vh] pl-[20vw]">
        <BlurFade>
          <h1 className="text-7xl font-bold">A little bit</h1>

          <div className="flex">
            <h1 className="text-7xl font-bold">about</h1>
            <FlipWords
              className="text-7xl font-bold text-[#7374be] dark:text-[#9394f1] pl-[13.5rem]"
              words={[
                "me.",
                "my story.",
                "who I am.",
                "my journey.",
                "my life.",
              ]}
            />
          </div>
        </BlurFade>
      </section>

      <div className="px-[15vw]">
        <Timeline
          data={[
            {
              title: "2003",
              content: (
                <>
                  <p className="text-xl">
                    I was born in a small town in India. I grew up in a loving
                    family and had a happy childhood. The narrow streets of our
                    town were always bustling with activity, filled with the
                    aroma of spices from local markets and the chatter of
                    neighbors. My parents, both engineers, instilled in me a
                    love for learning from an early age.
                    <br />
                    <br />
                    Despite limited resources, my parents always encouraged my
                    dreams and made sure my needs and wants were catered to.
                  </p>
                  <br />
                  <Image
                    src="/assets/baby.jpg"
                    alt="Baby photo of me"
                    width={250}
                    height={250}
                  />
                </>
              ),
            },
            {
              title: "2012",
              content: (
                <>
                  <p className="text-xl">
                    I moved to America and started middle school. The transition
                    was both exhilarating and overwhelming. Stepping off the
                    plane, I was immediately struck by the vastness of
                    everything - the wide highways, towering skyscrapers, and
                    sprawling suburbs were a sharp contrast to my hometown in
                    India.
                    <br />
                    <br />
                    My first day of high school was also a whirlwind of new
                    experiences. The school itself seemed enormous, with long
                    corridors and a dizzying array of classrooms. I marveled at
                    the well-equipped libraries and the extensive technologies,
                    resources that were scarce back home.
                  </p>
                  <br />
                  <Image
                    src="/assets/my_pic.jpg"
                    alt="Young photo of me"
                    width={400}
                    height={400}
                  />
                </>
              ),
            },
            {
              title: "2021",
              content: (
                <>
                  <p className="text-xl">
                    I graduated high school and started my undergraduate journey
                    at The University of Texas at Dallas, majoring in Computer
                    Science. Over the next few years, I dove into coursework,
                    personal projects, and problem-solving, eventually
                    completing my Bachelor&apos;s degree in Computer Science.
                  </p>
                  <br />
                  <Image
                    src="/assets/utd-grad.png"
                    alt="Baby photo"
                    width={400}
                    height={400}
                  />
                </>
              ),
            },
            {
              title: "2022",
              content: (
                <>
                  <p className="text-xl">
                    Around this time, I was deep into my undergrad experience at
                    UT Dallas. In my free time, I enjoyed working on personal
                    projects that let me exercise my creativity and
                    problem-solving skills. I&apos;m a big believer in teamwork
                    and was fortunate to work with some amazing people on
                    various projects.
                    <br /> <br />I was also involved in a couple of student
                    organizations on campus. I served as the media officer for
                    the Association for Computing Machinery, where I created
                    engaging content to showcase the work of ACM and highlight
                    key industry trends and innovations. I was also a web
                    developer for the User Experience Club, where I worked with
                    a team of designers and event coordinators to develop and
                    maintain a responsive web application.
                  </p>
                  <br />
                  <Image
                    src="/assets/me-pres.jpg"
                    alt="Baby photo"
                    width={400}
                    height={400}
                  />
                </>
              ),
            },
            {
              title: "2025",
              content: (
                <>
                  <p className="text-xl">
                    I started my Master&apos;s of Science in Computer Science at
                    The University of Texas at Dallas, and I&apos;m currently
                    pursuing it. I&apos;m always looking for new opportunities
                    to grow and learn, whether that&apos;s through my
                    coursework, personal projects, or new collaborations.
                    <br /> <br />
                    Feel free to connect with me on LinkedIn or check out my
                    other socials to learn more about my experiences and
                    interests.
                  </p>
                  <br />
                  <Image
                    src="/assets/utd-campus.png"
                    alt="Baby photo"
                    width={400}
                    height={400}
                  />
                </>
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
