import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  imageUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-stone-900 group flex flex-col h-full">
      <div
        className="h-52 md:h-72 relative"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="items-center justify-center absolute top-0 left-0 w-full h-full hidden bg-stone-900/75 group-hover:flex transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 mr-2 relative rounded-full border-white/60 hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          {previewUrl !== "" && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-white/60 hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="py-5 px-5 bg-stone-900 border-t-2 border-stone-900 flex-1">
        <h5 className="text-base font-semibold mb-1.5 text-white font-mono">{title}</h5>
        <p className="text-stone-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
