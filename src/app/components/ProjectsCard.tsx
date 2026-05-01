import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { Project } from "../data/projectsData";

const ProjectsCard: React.FC<{ project: Project }> = ({ project }) => {
  const hasLinks = project.gitUrl || project.previewUrl;

  return (
    <div className="rounded-2xl overflow-hidden border-2 border-stone-900 flex flex-col h-full group">

      {/* Top band: image if available, otherwise a branded company header */}
      {project.image ? (
        <div
          className="h-52 md:h-64 relative flex-shrink-0"
          style={{ background: `url(${project.image})`, backgroundSize: "cover" }}
        >
          {hasLinks && (
            <div className="items-center justify-center absolute top-0 left-0 w-full h-full hidden bg-stone-900/75 group-hover:flex transition-all duration-500">
              {project.gitUrl && (
                <Link href={project.gitUrl} className="h-14 w-14 border-2 mr-2 relative rounded-full border-white/60 hover:border-white group/link">
                  <CodeBracketIcon className="h-10 w-10 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
                </Link>
              )}
              {project.previewUrl && (
                <Link href={project.previewUrl} className="h-14 w-14 border-2 relative rounded-full border-white/60 hover:border-white group/link">
                  <EyeIcon className="h-10 w-10 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
                </Link>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[#3535DC] px-5 py-4 flex-shrink-0">
          {project.company && (
            <span className="font-mono text-xs uppercase tracking-widest text-white/70">
              {project.company}
            </span>
          )}
        </div>
      )}

      {/* Dark info panel */}
      <div className="bg-stone-900 flex-1 px-5 py-5 flex flex-col gap-4">

        <div>
          <h5 className="text-lg font-bold text-white font-mono leading-snug">
            {project.title}
          </h5>
          <p className="text-stone-400 text-sm mt-1 leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 bg-stone-700 text-stone-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-2.5">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-stone-400 leading-relaxed">
              <span className="text-[#3535DC] flex-shrink-0 mt-0.5">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ProjectsCard;
