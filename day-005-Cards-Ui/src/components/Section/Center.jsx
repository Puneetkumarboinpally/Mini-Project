import React from "react";

const Center = ({ company, post, date , tag1, tag2}) => {
  return (
    <div className="text-black my-6">
      <h2 className="font-bold">
        {company}
        <span className="text-gray-600 text-xs"> {date}</span>
      </h2>
      <h1 className="font-extrabold text-lg">{post}</h1>
      <button>{tag1}</button>
      <button>{tag2}</button>
    </div>
  );
};

export default Center;
