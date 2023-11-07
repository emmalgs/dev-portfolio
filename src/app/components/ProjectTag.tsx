import React from "react";

type ProjectTagProps = {
  name: string;
  isSelected: boolean;
  onSelection: (arg0: string) => void;
};

const ProjectTag: React.FC<ProjectTagProps> = ({ name, isSelected, onSelection }) => {
  const buttonStyles = isSelected
    ? "text-black border-2 border-green-600"
    : "text-amber-500 border-2 border-amber-500 hover:border-stone-600 hover:bg-blue-500 hover:text-stone-600";

  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-3 text-xl cursor-pointer font-mono`}
      onClick={() => onSelection(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
