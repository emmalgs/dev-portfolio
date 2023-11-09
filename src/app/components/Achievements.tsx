"use client";
import React from "react";
import Image from "next/image";

const achievementData = [
  {
    metric: "Years",
    value: "2",
  },
  {
    metric: "Projects",
    value: "130",
    postfix: "+",
  },
  {
    metric: "Degrees",
    value: "Too Many",
  },
  {
    metric: "Cups of Coffee",
    value: "1000",
    postfix: "+",
  },
  {
    metric: "Hairless Guinea Pigs",
    value: "2",
  },
];

const techData = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Vite",
  "React",
  "Next.js",
  "Tailwind",
  "C#",
  "NET",
  "SQL",
  "MySQL",
];

const Achievements = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-black border-2 rounded-sm py-8 px-16 flex flex-row flex-wrap items-center justify-evenly">
        {achievementData.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center jusitfy-center mx-4"
            >
              <h2 className="text-stone-700 text-4xl font-bold text-center">
                {`${achievement.value} ${achievement.postfix ? achievement.postfix : ""}`}
              </h2>
              <p className="text-stone-900 text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
      <div className="border-black border-2 rounded-sm mt-10 py-8 px-17 flex flex-row flex-wrap items-center justify-evenly">
        {techData.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center jusitfy-center mx-4"
            >
              <Image
                src={`/images/icons/${
                  tech === "C#" ? "Csharp" : tech === "Node.js" ? "Node" : tech
                }.png`}
                alt={`${tech} logo`}
                height={100}
                width={100}
                className="p-2"
              />
              <h2 className="text-stone-700 text-base font-bold mb-4">
                {tech}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
