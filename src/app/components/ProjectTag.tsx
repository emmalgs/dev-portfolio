import React from "react";

type ProjectTagProps = {
  name: string;
  isSelected: boolean;
  onSelection: (arg0: string) => void;
};

const ProjectTag: React.FC<ProjectTagProps> = ({ name, isSelected, onSelection }) => {
  const buttonStyles = isSelected
    ? "text-stone-900 border-2 border-blue-600"
    : "text-stone-500 border-2 border-stone-500 hover:border-white hover:bg-stone-300";

  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onSelection(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
