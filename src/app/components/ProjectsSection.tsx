"use client";
import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data/projectsData";
import ProjectTag from "./ProjectTag";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) => project.tag.includes(tag))

  return (
    <div className="border-t-2 border-black">
      <h2 className="text-center text-4xl font-bold text-black pt-8 mb-4 md:mb-1 font-mono">
        PROJECTS
      </h2>
      <div className="flex flex-row justify-center gap-2 py-6">
        <ProjectTag
          onSelection={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onSelection={handleTagChange}
          name="JS/TS"
          isSelected={tag === "JS/TS"}
        />
        <ProjectTag
          onSelection={handleTagChange}
          name="C#"
          isSelected={tag === "C#"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
