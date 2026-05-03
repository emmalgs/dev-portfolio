"use client";
import React from "react";
import { ProjectCard } from "../molecules/ProjectCard";
import { osProjects } from "../../../data/projectsData";
import { GamePage } from "@/app/pages/GamePage";

interface CenterPanelProps {
  filter: string;
}

export function CenterPanel({ filter }: CenterPanelProps) {
  const visible = filter === "ALL"
    ? osProjects
    : osProjects.filter((p) => p.categories.includes(filter));

  return (
    <div className="center-col">
      <div className="hero">
        <div className="hero-inner">
            <div className="illo-corner tl" />
            <div className="illo-corner tr" />
            <div className="illo-corner bl" />
            <div className="illo-corner br" />
            <GamePage />
        </div>
      </div>

      <div className="proj-grid">
        {visible.length > 0 ? (
          visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="proj-empty">NO PROJECTS MATCH THIS FILTER</div>
        )}
      </div>
    </div>
  );
}
