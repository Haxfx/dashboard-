import { EyeIcon } from "@heroicons/react/solid";
import React from "react";

export const Projects = () => {
  return (
    <>
      <div className="flex flex-col mt-4 mb-10">
        <div className="flex flex-row justify-between">
          <div className="text-white text-sm">Stakeboard</div>
          <div className="flex text-purple-light text-xs justify-center items-center">
            <EyeIcon className="w-3 h-3" />
            <span className="ml-1">21,847,438</span>
          </div>
        </div>
        <div className="h-2 w-full block rounded-2xl bg-purple-backgroundLight mt-2">
          <div className="w-36 h-2 rounded-2xl bg-purple-primary"></div>
        </div>
      </div>
      <div className="flex flex-col mt-4 mb-10">
        <div className="flex flex-row justify-between">
          <div className="text-white text-sm">COTI</div>
          <div className="flex text-purple-light text-xs justify-center items-center">
            <EyeIcon className="w-3 h-3" />
            <span className="ml-1">12,847,438</span>
          </div>
        </div>
        <div className="h-2 w-full block rounded-2xl bg-purple-backgroundLight mt-2">
          <div className="w-28 h-2 rounded-2xl bg-purple-primary"></div>
        </div>
      </div>
      <div className="flex flex-col mt-4 mb-10">
        <div className="flex flex-row justify-between">
          <div className="text-white text-sm">SingularityNET</div>
          <div className="flex text-purple-light text-xs justify-center items-center">
            <EyeIcon className="w-3 h-3" />
            <span className="ml-1">8,847,438</span>
          </div>
        </div>
        <div className="h-2 w-full block rounded-2xl bg-purple-backgroundLight mt-2">
          <div className="w-16 h-2 rounded-2xl bg-purple-primary"></div>
        </div>
      </div>
      <span className="flex content-center justify-center rounded-2xl cursor-pointer hover:bg-purple-primary mt-6 py-3 text-sm border-2 border-purple-primary">
        See More Projects (87)
      </span>
    </>
  );
};
