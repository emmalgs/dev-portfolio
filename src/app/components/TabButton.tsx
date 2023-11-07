import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "text-slate-700 border-b border-green-500"
    : "text-slate-500";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-blue-600 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
