import React from "react";
import { motion } from "framer-motion";

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
    ? "text-stone-700"
    : "text-stone-500";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-blue-600 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={{
          default: { width: 0 },
          active: { width: "calc(100% - 0.75rem)" },
        }}
        className="h-1 bg-green-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
