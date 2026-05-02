"use client";
import React from "react";
import { Tag } from "../atoms/Tag";
import { ProjectCard } from "../molecules/ProjectCard";
import { osProjects } from "../../../data/projectsData";
import { useModal } from "../../../contexts/ModalContext";

interface CenterPanelProps {
  filter: string;
}

export function CenterPanel({ filter }: CenterPanelProps) {
  const { openModal } = useModal();

  const visible = filter === "ALL"
    ? osProjects
    : osProjects.filter((p) => p.categories.includes(filter));

  return (
    <div className="center-col">
      <div className="hero">
        <div className="hero-inner">
          <div
            className="illo-box"
            onClick={() =>
              openModal(
                "// HELLO",
                "Full-stack software engineer with 3+ years shipping production TypeScript, React, and Next.js applications.<br><br>Background in fine art and design. Active studio practice. Adjunct at PNCA.<br><br><strong>Click objects to explore →</strong>"
              )
            }
          >
            <div className="illo-corner tl" />
            <div className="illo-corner tr" />
            <div className="illo-corner bl" />
            <div className="illo-corner br" />
            <div>
              <div className="illo-hint">your illustration<br />lives here</div>
              <div className="blink">[ CLICK TO EXPLORE ]</div>
            </div>
          </div>
          <div className="hero-name">EMMA <em>GERIG</em></div>
          <div className="hero-sub">Full Stack Software Engineer · Artist</div>
          <div className="hero-tags">
            <Tag color="l">TypeScript</Tag>
            <Tag color="g">React</Tag>
            <Tag color="p">LLM APIs</Tag>
            <Tag color="l">Next.js</Tag>
            <Tag color="o">Twilio</Tag>
          </div>
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
