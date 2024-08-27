"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const lists = [
  "NextJS",
  "ReactJS",
  "JavaScript",
  "Typescript",
  "HTML",
  "CSS",
  "Tailwind CSS",
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap justify-start gap-3 mr-10  sm:gap-4 lg:gap-6">
        {lists.map((item, i) => (
          <span
            key={i}
            className="py-2 px-3 text-xs opacity-50 rounded-lg text-center bg-[#2e102c] hover:bg-[#3b263a]
                     sm:py-3 sm:px-4 sm:text-sm sm:opacity-75
                     md:py-4 md:px-5 md:text-base md:opacity-90
                     lg:py-5 lg:px-6 lg:text-lg lg:opacity-100"
          >
            {item}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Experience",
    id: "eperience",
    content: (
      <div className="mr-5 sm:mr-10 md:mr-20 ">
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/experience/softvil-logo.png"
                    alt="hero image"
                    className="w-10 h-10"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Associate Software Engineer
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    <Link href="https://www.softvilmedia.com/">
                      Softvil Technologies Pvt Ltd
                    </Link>
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  Jun 2024 - Present
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/experience/softvil-logo.png"
                    alt="hero image"
                    className="w-10 h-10"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Intern Software Engineer
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Softvil Technologies Pvt Ltd
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  Jun 2023 - Jun 2024
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white my-12 md:my-12" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <Image
            src="/images/about-image.png"
            alt="Description"
            width={500}
            height={500}
          />
          <div className="mt-10">
            <div className="flex flex-row justify-start mt-8 gap-5">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("eperience")}
                active={tab === "eperience"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-5">About Me</h2>
          <p className="text-base lg:text-lg">
            Greetings! I&apos;m a passionate software engineer based in Sri
            Lanka 🇱🇰, committed to crafting innovative digital solutions. <br />{" "}
            <br />
            My journey in the world of software development is fueled by a
            genuine enthusiasm for creating impactful web applications. I
            specialize in full-stack development, embracing both front-end and
            back-end challenges with equal fervor. <br /> <br />
            As a Sri Lankan software professional, I combine technical skills
            with creative problem-solving to build intuitive, efficient, and
            visually appealing web experiences. My goal is to develop solutions
            that not only meet but exceed user expectations and drive business
            growth. <br /> <br />
            I&apos;m constantly expanding my knowledge in modern web
            technologies, staying abreast of the latest trends and best
            practices in the ever-evolving tech landscape. This dedication
            allows me to contribute fresh perspectives and innovative ideas to
            every project I undertake. <br /> <br />
            Whether it&apos;s creating responsive interfaces or optimizing
            back-end performance, I approach each task with meticulous attention
            to detail and a commitment to excellence. <br /> <br /> Looking for
            a motivated software engineer in Sri Lanka to bring your digital
            vision to life? Let&apos;s connect and explore how we can work
            together to create remarkable web solutions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
