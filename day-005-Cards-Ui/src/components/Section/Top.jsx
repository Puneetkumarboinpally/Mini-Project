import React from "react";

const Top = ({logo}) => {
  return (
    <div className="flex justify-between items-center">
      <img
        className="h-10 w-10 rounded-full bg-gray-100 p-1 border-2 border-pink-500"
        src={logo}
      />
      <div className="py-1 px-2 border border-pink-600 rounded-lg text-black font-semibold ">
        Save <span>❤️</span>
      </div>
    </div>
  );
};

export default Top;
