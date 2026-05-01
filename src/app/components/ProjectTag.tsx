import React from "react";

type ProjectTagProps = {
  name: string;
  isSelected: boolean;
  onSelection: (arg0: string) => void;
};

const ProjectTag: React.FC<ProjectTagProps> = ({ name, isSelected, onSelection }) => {
  const buttonStyles = isSelected
    ? "bg-[#3535DC] text-white border-2 border-[#3535DC]"
    : "text-stone-600 border-2 border-stone-300 hover:border-[#3535DC] hover:text-[#3535DC]";

  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-2.5 text-sm font-mono font-semibold cursor-pointer transition-colors`}
      onClick={() => onSelection(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
