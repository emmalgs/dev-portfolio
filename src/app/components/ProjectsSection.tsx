import React from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data/projectsData";

const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-stone-700 mt-4 mb-4">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
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
