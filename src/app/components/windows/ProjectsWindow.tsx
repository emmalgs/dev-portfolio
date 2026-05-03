"use client";

import React, { useMemo } from "react";
import { useModal } from "@/app/contexts/ModalContext";
import { projects } from "@/data/projects";
import type { PortfolioProject } from "@/data/projects";

type ProjectsWindowProps = {
  filter: string;
};

export function ProjectsWindow({ filter }: ProjectsWindowProps) {
  const { openModal } = useModal();

  const visible = useMemo(() => {
    if (filter === "ALL") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const openDetail = (p: PortfolioProject) => {
    openModal(p.modalTitle, p.modalBody);
  };

  return (
    <div className="window-body-prose" style={{ maxHeight: "min(300px, 42vh)" }}>
      {visible.length === 0 ? (
        <p style={{ margin: 0 }}>NO PROJECTS MATCH.</p>
      ) : (
        visible.map((p) => (
          <button key={p.id} type="button" className="proj-mini" onClick={() => openDetail(p)}>
            <div className="proj-mini__title" style={{ color: p.accentColor }}>
              {p.numLabel} · {p.name}
            </div>
            <div className="proj-mini__desc">{p.desc}</div>
          </button>
        ))
      )}
    </div>
  );
}
