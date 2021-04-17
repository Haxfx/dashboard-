import React from "react";

export const Video = ({ img, title, author, views, uploaded }) => {
  return (
    <div className="flex flex-row justify-between mb-6">
      <img
        src={`/stage/${img}.jpeg`}
        alt="building"
        className="rounded-2xl w-32 h-24"
      />
      <div className="flex content-around justify-around flex-col ml-3">
        <span className="text-sm justify-self-start self-start cursor-pointer">
          {title}
        </span>
        <span className="text-xs text-purple-light hover:text-white cursor-pointer">
          {author}
        </span>
        <span className="text-xs text-purple-light">
          {views} views - {uploaded}
        </span>
      </div>
    </div>
  );
};
