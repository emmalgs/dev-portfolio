"use client";
import React from "react";
import Image from "next/image";

type TechItem = {
  name: string;
  devicon?: string;
  svgFile?: string;
  familiar?: boolean;
};

type TechCategory = {
  category: string;
  items: TechItem[];
};

const techCategories: TechCategory[] = [
  {
    category: "Backend",
    items: [
      { name: "C#", devicon: "devicon-csharp-plain colored" },
      { name: ".NET", devicon: "devicon-dot-net-plain colored" },
      { name: "Node.js", devicon: "devicon-nodejs-plain colored" },
      { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", devicon: "devicon-react-original colored" },
      { name: "Next.js", devicon: "devicon-nextjs-original" },
      { name: "JavaScript", devicon: "devicon-javascript-plain colored" },
      { name: "Webpack", devicon: "devicon-webpack-plain colored" },
      { name: "Angular", devicon: "devicon-angularjs-plain colored", familiar: true },
      { name: "jQuery", devicon: "devicon-jquery-plain colored", familiar: true },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", devicon: "devicon-postgresql-plain colored" },
      { name: "MySQL", devicon: "devicon-mysql-plain colored" },
      { name: "Firebase", devicon: "devicon-firebase-plain colored" },
      { name: "Neon", svgFile: "Neon.svg" },
      { name: "SQL Server", devicon: "devicon-microsoftsqlserver-plain colored", familiar: true },
    ],
  },
  {
    category: "APIs",
    items: [
      { name: "GraphQL", devicon: "devicon-graphql-plain colored" },
      { name: "Axios", svgFile: "Axios.svg" },
      { name: "TanStack Query", svgFile: "TanStack.svg" },
    ],
  },
  {
    category: "Cloud & Infra",
    items: [
      { name: "AWS", devicon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Docker", devicon: "devicon-docker-plain colored" },
      { name: "Vercel", devicon: "devicon-vercel-original" },
      { name: "Azure", devicon: "devicon-azure-plain colored", familiar: true },
    ],
  },
  {
    category: "Tooling",
    items: [
      { name: "Git", devicon: "devicon-git-plain colored" },
      { name: "GitHub Actions", devicon: "devicon-github-original" },
      { name: "Jest", devicon: "devicon-jest-plain colored" },
      { name: "Playwright", svgFile: "Playwright.svg" },
      { name: "Jira", devicon: "devicon-jira-plain colored" },
      { name: "Confluence", devicon: "devicon-confluence-original colored" },
      { name: "TeamCity", svgFile: "TeamCity.svg" },
    ],
  },
];

// Wrapper: square-dot border drawn with 4 repeating gradients, one per edge.
// Each gradient draws 4px-wide black squares with 4px gaps, 3px tall/wide.
const squareDotBorder: React.CSSProperties = {
  backgroundImage: `
    repeating-linear-gradient(to right, #1c1c1e 0, #1c1c1e 4px, transparent 4px, transparent 8px),
    repeating-linear-gradient(to right, #1c1c1e 0, #1c1c1e 4px, transparent 4px, transparent 8px),
    repeating-linear-gradient(to bottom, #1c1c1e 0, #1c1c1e 4px, transparent 4px, transparent 8px),
    repeating-linear-gradient(to bottom, #1c1c1e 0, #1c1c1e 4px, transparent 4px, transparent 8px)
  `,
  backgroundSize: "8px 3px, 8px 3px, 3px 8px, 3px 8px",
  backgroundPosition: "0 0, 0 100%, 0 0, 100% 0",
  backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
};

// Inner card: faint ruled lines + subtle red margin line
const indexCardStyle: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(to right, transparent 44px, rgba(248, 113, 113, 0.3) 44px, rgba(248, 113, 113, 0.3) 46px, transparent 46px),
    repeating-linear-gradient(
      transparent 0px,
      transparent 30px,
      rgba(147, 197, 253, 0.45) 30px,
      rgba(147, 197, 253, 0.45) 32px
    )
  `,
  backgroundColor: "#FFFEF8",
};

const TechIcon: React.FC<{ item: TechItem }> = ({ item }) => (
  <div className={`flex flex-col items-center gap-2 ${item.familiar ? "opacity-50" : ""}`}>
    {item.devicon ? (
      <i className={`${item.devicon} text-6xl`} />
    ) : (
      <Image
        src={`/images/icons/${item.svgFile}`}
        alt={`${item.name} logo`}
        width={60}
        height={60}
        className="rounded-md"
      />
    )}
    <span className="text-sm text-stone-600 text-center leading-tight max-w-[72px]">
      {item.name}
    </span>
    {item.familiar && (
      <span className="text-xs text-stone-400 italic">familiar</span>
    )}
  </div>
);

const Achievements = () => {
  return (
    <div className="py-8 xl:px-0">
      <h2 className="text-4xl font-bold text-stone-900 mb-8 font-mono">TECH STACK</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techCategories.map((cat) => (
          // Outer wrapper draws the square-dot border via background gradients
          <div key={cat.category} className="p-[3px]" style={squareDotBorder}>
            {/* Inner card with notebook paper texture */}
            <div className="overflow-hidden h-full" style={indexCardStyle}>
              <div className="pl-16 pr-6 pt-5 pb-4 border-b border-stone-200">
                <h3 className="font-mono font-bold text-base uppercase tracking-widest text-stone-900">
                  {cat.category}
                </h3>
              </div>
              <div className="pl-16 pr-6 py-6">
                <div className="flex flex-row flex-wrap gap-6">
                  {cat.items.map((item) => (
                    <TechIcon key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
