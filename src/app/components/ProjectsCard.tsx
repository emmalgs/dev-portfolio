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
    <div className="border-2 border-black rounded-sm">
      <div
        className="h-52 md:h-72 rounded-t-sm relative group"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full hidden bg-stone-800 bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={`${gitUrl}`}
            className="h-14 w-14 border-2 mr-2 relative rounded-full border-stone-300 hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 mr-2 text-stone-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl === "" ? null : (
            <Link
              href={`${previewUrl}`}
              className="h-14 w-14 border-2 relative rounded-full border-stone-300 hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-stone-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="rounded-b-sm bg-stone-200 py-6 px-4 group-hover:bg-stone-300">
        <h5 className="text-xl font-semibold mb-2 text-stone-900">{title}</h5>
        <p className="text-stone-600 h-10">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
