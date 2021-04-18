import React from "react";

import { HeartIcon, CheckIcon, EyeIcon } from "@heroicons/react/solid";

export const Tutorial = () => {
  return (
    <div className="flex flex-col justify-center p-0 m-0 ">
      <div className="flex flex-col justify-center relative">
        <img
          src="/stage/flowers.jpg"
          alt="Flowers"
          className="rounded-t-2xl border-b-none h-56"
        />
        <HeartIcon className="w-6 h-6 rounded-full bg-red-primary ml-2 p-1 absolute right-3 top-3 cursor-pointer hover:bg-purple-light" />
        <div className="grid rows-auto justify-center items-center absolute right-5 bottom-0">
          <div className="inline-block relative border-solid border-2 border-opacity-40 border-white rounded-full p-1">
            <img
              src={`/portraits/rembrand.png`}
              className="w-14 p-0 rounded-full border-4 border-solid border-purple-medium bg-purple-medium"
            />
            <div className="absolute right-0 bottom-0 bg-blue-400 rounded-full inline-block ml-2 mt-2 p-0 border-2 border-solid border-purple-medium">
              <CheckIcon className="h-4 w-4 text-white p-1" />
            </div>
          </div>
        </div>
        <span className="px-6 pt-6 text-purple-light text-xs">
          Budi Habibi
          <button className="w-2 h-2 rounded-full bg-red-400 ml-2" />
        </span>
      </div>
      <span className="px-6 pt-4 text-white text-m cursor-pointer">
        Basic how to setup your stakeboard comfortly and Basic Equipment
      </span>
      <div className="flex flex-row px-6 pt-6 justify-start content-start text-purple-light">
        <div className="flex flex-row">
          <EyeIcon className="h-4 w-4 hover:text-white cursor-pointer" />
          <span className="text-xs ml-2">125,908 views</span>
        </div>
        <div className="flex flex-row ml-6">
          <HeartIcon className="h-4 w-4 hover:text-red-primary cursor-pointer" />
          <span className="text-xs ml-2">46,238 likes</span>
        </div>
      </div>
    </div>
  );
};
