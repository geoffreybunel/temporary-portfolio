import React from "react";
import { FadeIn } from "../ui";
import Image from "next/image";
// import Link from "next/link";
import { cn } from "@/lib/utils";

const GalleryImage: React.FC<{
  src: string;
  rotation: string;
  position: string;
  className?: string;
  text?: string;
}> = ({ src, rotation, position, className, text }) => {
  return (
    <div
      className={cn(
        "w-48 h-56 absolute bg-white border border-zinc-200/80 overflow-hidden",
        position,
        rotation,
        className
      )}
    >
      <Image
        className="w-44 h-44 left-[6.78px] top-[6.78px] absolute"
        src={src}
        alt="Photography"
        width={183}
        height={182}
      />
      <div className="left-[55px] top-[192px] italic tracking-wide text-zinc-600 font-normal absolute justify-start text-xs font-normal]">
        {text}{" "}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section className="px-6">
      <FadeIn delay={0.8}>
        <h2 className="text-zinc-900 text-xl  md:text-2xl font-semibold leading-relaxed mb-4">
          About
        </h2>
        <div className="text-zinc-500 text-base font-normal leading-relaxed space-y-4">
          <p>I&apos;m Geoffrey. Based in France, I am a JavaScript developer specialized in building modern web applications with React.</p>
          <p>
            <b className="text-zinc-600 font-semibold">
              {" "}
              Here&apos;s what I actually do:
            </b>{" "}
            My core expertise lies in JavaScript, React, component-based architecture, and modern development tools. I focus on building scalable and maintainable applications, improving performance, and writing clean, readable code. I particularly enjoy solving problems related to application structure, data flow, and user interface responsiveness. What differentiates my approach is my attention to code quality, testing practices, and long-term maintainability.
          </p>
          <p>
          My development philosophy is centered around simplicity, clarity, and continuous improvement. I believe that good software is not only functional but also understandable and maintainable by other developers. I aim to write modular code, reusable components, and well-structured logic that make projects easier to scale and evolve over time.
          </p>
          <p>
          During my training projects, I worked on real-world scenarios including debugging legacy applications, optimizing performance, implementing testing strategies, and redesigning front-end architectures. I also developed a reusable React modal component designed to replace an outdated jQuery solution, demonstrating my ability to modernize existing codebases and build reusable tools.
          </p>
          <p>
          Through my work, I aim to deliver reliable, efficient, and maintainable front-end solutions. My goal is to help teams build applications that are fast, scalable, and enjoyable to use, while maintaining high standards of code quality and developer experience.
          </p>{" "}
          <br />
          {/* <Link
            href="https://yourblog.com/"
            target="_blank"
            className="text-[#9D8BF5] underline hover:text-[#8e7ddf] font-medium hover:underline transition-colors"
          >
            [Optional: Add link to your blog, articles, or additional content]
          </Link>{" "} */}
          {/* <p>
            [Add personal interests or hobbies that humanize you and make you
            more relatable.]
          </p>
          <p className="font-medium">
            [End with a strong statement about your work or value proposition.]
          </p> */}
        </div>
      </FadeIn>

      {/* Polaroid Photos Gallery */}
      <div className="relative mt-20 min-h-[400px]">
        <FadeIn delay={0.8}>
          <GalleryImage
            src="/img.jpg"
            rotation="origin-top-left rotate-[-8deg]"
            position="left-[2%] top-[150px] md:left-[14%] md:top-[130px] lg:left-[10%] lg:top-[90px]"
            className="shadow-xl"
            text="Add caption here"
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <GalleryImage
            src="/img.jpg"
            rotation="origin-top-left rotate-[15deg]"
            position="-right-2 top-[-50px] md:right-[20%] md:top-[-30px] lg:right-[20%] lg:top-[-10px]"
            className="shadow-lg"
            text="Add caption here"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export { About };
