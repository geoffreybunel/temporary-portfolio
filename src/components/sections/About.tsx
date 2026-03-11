import React from "react";
import { FadeIn } from "../ui";
// import Image from "next/image";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// const GalleryImage: React.FC<{
//   src: string;
//   rotation: string;
//   position: string;
//   className?: string;
//   text?: string;
// }> = ({ src, rotation, position, className, text }) => {
//   return (
//     <div
//       className={cn(
//         "w-48 h-56 absolute bg-white border border-zinc-200/80 overflow-hidden",
//         position,
//         rotation,
//         className
//       )}
//     >
//       <Image
//         className="w-44 h-44 left-[6.78px] top-[6.78px] absolute"
//         src={src}
//         alt="Photography"
//         width={183}
//         height={182}
//       />
//       <div className="left-[55px] top-[192px] italic tracking-wide text-zinc-600 font-normal absolute justify-start text-xs font-normal]">
//         {text}{" "}
//       </div>
//     </div>
//   );
// };

const About: React.FC = () => {
  return (
    <section className="px-6">
      <FadeIn delay={0.8}>
        <h2 className="text-zinc-900 text-xl  md:text-2xl font-semibold leading-relaxed mb-4">
          About
        </h2>
        <div className="text-zinc-500 text-base font-normal leading-relaxed space-y-4">
          <p>I&apos;m Geoffrey, a JavaScript developer based in France, specializing in React and modern web applications.</p>
          <p>
            My focus is on code quality, application structure, and long-term maintainability. I care about writing modular, readable code that other developers can understand and build on, not just code that works today.
          </p>
          <p>
            During my training, I worked on real-world challenges: debugging legacy apps, optimizing performance, implementing testing strategies, and rebuilding front-end architectures. One project I&apos;m particularly proud of is a reusable React modal component built to replace an outdated jQuery solution - a small example of how I approach modernization: pragmatically, with reusability in mind.
          </p>
          <p>
            I believe good front-end work is as much about clarity and structure as it is about functionality.
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
      {/* <div className="relative mt-20 min-h-[400px]">
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
      </div> */}
    </section>
  );
};

export { About };
