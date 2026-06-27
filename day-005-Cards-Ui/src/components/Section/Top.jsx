import React from "react";

const Top = ({ logo }) => {
  return (
    <div className="flex justify-between items-center">
      <img
        src={logo}
        className="w-10 h-10 rounded-full p-1 border border-gray-400 "
      />
      <div className="border-[1.5px] border-gray-200 py-1 px-2 rounded-md font-bold hover:translate-y-[-2px] transition-transform duration-300">
        Save <span>💀</span>
      </div>
    </div>
  );
};

export default Top;
