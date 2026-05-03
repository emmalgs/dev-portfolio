"use client";
import React from "react";
import { ProjectCard } from "../molecules/ProjectCard";
import { osProjects } from "../../../data/projectsData";
import { HeroPastureInvite } from "./HeroPastureInvite";

interface CenterPanelProps {
  filter: string;
  onOpenPasture: () => void;
}

export function CenterPanel({ filter, onOpenPasture }: CenterPanelProps) {
  const visible = filter === "ALL"
    ? osProjects
    : osProjects.filter((p) => p.categories.includes(filter));

  return (
    <div className="center-col">
      <div className="hero">
        <div className="hero-inner">
          <HeroPastureInvite onOpenPasture={onOpenPasture} />
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
