"use client";

import React, { useMemo, useState } from "react";
import { useModal } from "@/app/contexts/ModalContext";
import { projects } from "@/data/projects";
import type { PortfolioProject } from "@/data/projects";


export function ProjectsWindow() {
  const [localFilter, setLocalFilter] = useState("ALL");
  const { openModal } = useModal();

  const visible = useMemo(() => {
    if (localFilter === "ALL") return projects;
    return projects.filter((p) => p.categories.includes(localFilter));
  }, [localFilter]);

  const openDetail = (p: PortfolioProject) => {
    openModal(p.modalTitle, p.modalBody);
  };

  return (
    <div className="window-body-prose" style={{ maxHeight: "min(300px, 42vh)" }}>
      <div className="window-filter-row">
        <p>FILTER BY:</p>
        <button type="button" className="tb" onClick={() => setLocalFilter("ALL")}>ALL</button>
        <button type="button" className="tb" onClick={() => setLocalFilter("FRONTEND")}>FRONTEND</button>
        <button type="button" className="tb" onClick={() => setLocalFilter("BACKEND")}>BACKEND</button>
        <button type="button" className="tb" onClick={() => setLocalFilter("FULL STACK")}>FULL STACK</button>
      </div>
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
