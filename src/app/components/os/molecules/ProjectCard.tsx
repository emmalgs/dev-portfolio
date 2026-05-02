"use client";
import React from "react";
import { useModal } from "../../../contexts/ModalContext";
import type { OsProject } from "../../../data/projectsData";

interface ProjectCardProps {
  project: OsProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { openModal } = useModal();
  return (
    <div className="pcard" onClick={() => openModal(project.modalTitle, project.modalBody)}>
      <div className="pcard-accent" style={{ background: project.accentColor }} />
      <div className="p-num">{project.numLabel}</div>
      <div className="p-name">{project.name}</div>
      <div className="p-stack">{project.stackDisplay}</div>
      <div className="p-desc">{project.desc}</div>
    </div>
  );
}
