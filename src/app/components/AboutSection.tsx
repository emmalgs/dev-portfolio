"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface Tab {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: Array<Tab> = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>MySQL</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>.NET</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Epicodus: March - Sept 2023, Certificate in Full Stack Development</li>
        <li>Oregon College of Art and Craft: Aug 2016 - May 2018, MFA in Craft</li>
        <li>Goshen College: Aug 2010 - May 2014, BA in Art, Environmental Science, and Social Policy</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineer: Present, Self-Employed</li>
        <li>Artist: Present, Self-Employed</li>
        <li>Software Engineer Intern: Aug 2023 - Sept 2023, Olio Apps</li>
        <li>Kitchen Lead: July 2021 - December 2022, Angel Face</li>
        <li>Farm Chef: June 2020 - July 2021, Our Table</li>
      </ul>
    )
  }
]

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/colorbg.png"
          alt="computer"
          width={800}
          height={800}
          className=""
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4 font-mono">ABOUT ME</h2>
          <p className="text-stone-500 md:text-lg">
            I am a software engineer and web developer with a background in
            farming, contemporary art, and education. I bring out-of-the-box
            thinking to solving problems for both users and code that results in
            readable and innovative solutions. I am passionate about creating
            accessible and inclusive experiences for all users. I am a lifelong
            learner and am always looking for new ways to grow and improve my
            skills.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-stone-700">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
