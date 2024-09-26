import { Timeline } from "@/components/ui/timeline";
import Image from 'next/image';
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
            <Timeline data={[
                {
                    title: "2003",
                    content: (
                    <>
                        <p>
                            I was born in a small town in India. I grew up in a loving family and had a happy childhood. 
                            The narrow streets of our town were always bustling with activity, filled with the aroma of spices 
                            from local markets and the chatter of neighbors. My parents, both engineers, instilled in me a love for learning from an early age.
                            <br /><br />
                            Despite limited resources, my parents always encouraged my dreams and made sure my needs and wants were catered to. 
                        </p>
                        <br />
                        <Image src="/assets/baby.jpg" alt="Baby photo" width={250} height={250} />
                    </>
                    ),
                },
                {
                    title: "2012",
                    content: (
                    <>
                        <p>
                            I moved to America and started middle school. The transition was both exhilarating and overwhelming. 
                            Stepping off the plane, I was immediately struck by the vastness of everything - the wide highways, 
                            towering skyscrapers, and sprawling suburbs were a sharp contrast to my hometown in India.
                            <br /><br />
                            My first day of high school was also a whirlwind of new experiences. The school itself seemed enormous, 
                            with long corridors and a dizzying array of classrooms. I marveled at the well-equipped libraries and 
                            the extensive technologies, resources that were scarce back home.
                        </p>
                        <br />
                        <Image src="/assets/my_pic.jpg" alt="Baby photo" width={400} height={400} />
                        
                    </>
                    ),
                },
                {
                    title: "2020",
                    content: (
                    <>
                        <p>
                            I graduated high school and started college. I went to UT Dallas and majored in computer science.
                        </p>
                        
                    </>
                    ),
                },
                {
                    title: "2024",
                    content: (
                    <>
                        <p>
                            I am currently a senior at UT Dallas and will be graduating in May 2025. 
                        </p>
                        
                    </>
                    ),
                },
            ]} />
            </div>
    </main>

  )
};