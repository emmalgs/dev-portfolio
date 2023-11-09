"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data/projectsData";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section ref={ref}>
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
            <motion.div key={project.id}>
            <ProjectsCard
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
