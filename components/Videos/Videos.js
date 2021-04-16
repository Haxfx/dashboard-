import React from "react";

export const Videos = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <img
          src="/stage/vulcano.jpeg"
          alt="building"
          className="rounded-2xl w-32 h-24"
        />
        <div className="flex content-around justify-around flex-col ml-3">
          <span className="text-sm justify-self-start self-start">
            Prepare for your first stakeboard
          </span>
          <span className="text-xs text-purple-light">Bassie Meekie</span>
          <span className="text-xs text-purple-light">
            125,908 views - 2 days ago
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6">
        <img
          src="/stage/coast.jpeg"
          alt="building"
          className="rounded-2xl w-32 h-24"
        />
        <div className="flex content-around justify-around flex-col ml-3">
          <span className="text-sm justify-self-start self-start">
            Tips of playing stakeboard on a ramp
          </span>
          <span className="text-xs text-purple-light">Bassie Meekie</span>
          <span className="text-xs text-purple-light">
            125,908 views - 2 days ago
          </span>
        </div>
      </div>
      <span className="flex content-center justify-center rounded-2xl cursor-pointer hover:bg-opacity-70 mt-6 py-3 text-sm bg-purple-primary">
        See All related videos (32)
      </span>
    </div>
  );
};
