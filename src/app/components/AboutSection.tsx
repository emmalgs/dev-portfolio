"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/computer.png"
          alt="computer"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-slate-700 mb-4">About Me</h2>
          <p className="text-slate-500 md:text-lg">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
