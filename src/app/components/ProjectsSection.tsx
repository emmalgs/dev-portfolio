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

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8">
      <h2 className="text-4xl font-bold text-stone-900 pt-8 mb-6 font-mono">
        PROJECTS
      </h2>
      {projects.length > 0 && (
        <div className="flex flex-row gap-2 mb-8">
          <ProjectTag onSelection={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onSelection={handleTagChange} name="Personal" isSelected={tag === "Personal"} />
          <ProjectTag onSelection={handleTagChange} name="Work" isSelected={tag === "Work"} />
        </div>
      )}
      {filteredProjects.length > 0 ? (
        <ul ref={ref} className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.li
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              key={project.id}
              className="h-full"
            >
              <ProjectsCard project={project} />
            </motion.li>
          ))}
        </ul>
      ) : (
        <div className="border-2 border-dashed border-stone-300 rounded-2xl py-20 px-8 text-center">
          <p className="font-mono text-stone-400 text-sm uppercase tracking-widest">
            Coming soon
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
