"use client";
import React from "react";
import { Separator } from "../atoms/Separator";

const FILTER_OPTIONS = ["ALL", "FRONTEND", "BACKEND", "AI/LLM"];

interface ToolbarProps {
  filter: string;
  onFilterChange: (f: string) => void;
}

export function Toolbar({ filter, onFilterChange }: ToolbarProps) {
  return (
    <div className="toolbar">
      <span className="tb-lbl">VIEW:</span>
      {FILTER_OPTIONS.map((opt) => (
        <button
          key={opt}
          className={`tb${filter === opt ? " on" : ""}`}
          onClick={() => onFilterChange(opt)}
        >
          {opt}
        </button>
      ))}
      <Separator />
      <span className="tb-lbl">SORT:</span>
      <button className="tb">RECENT</button>
      <button className="tb">STACK</button>
      <Separator />
      <a
        className="tb red"
        style={{ marginLeft: "auto" }}
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        ⬇ RESUME
      </a>
    </div>
  );
}
