import React from "react";

import {
  HeartIcon,
  CheckIcon,
  EyeIcon,
  CubeTransparentIcon,
} from "@heroicons/react/solid";

export const Basic = ({
  title,
  thumbnail,
  userImg,
  byUser,
  views,
  likes,
  uploadDate,
  userActive,
}) => {
  return (
    <div className="flex flex flex-row justify-start relative">
      <img
        src={`/stage/${thumbnail}.jpeg`}
        alt="building"
        className="rounded-2xl w-40 h-32"
      />
      <div className="flex content-around justify-around flex-col ml-6">
        <span className="text-sm justify-self-start self-start">{title}</span>
        <div className="flex flex-row justify-start content-start text-purple-light">
          <div className="flex flex-row">
            <EyeIcon className="h-4 w-4 hover:text-white cursor-pointer" />
            <span className="text-xs ml-2">{views} views</span>
          </div>
          <div className="flex flex-row ml-6">
            <HeartIcon className="h-4 w-4 hover:text-red-primary cursor-pointer" />
            <span className="text-xs ml-2">{likes} likes</span>
          </div>
        </div>
        <div className="flex flex-row justify-start">
          <div className="grid rows-auto justify-center items-center right-5 bottom-0">
            <div className="inline-block relative rounded-full p-1">
              <img
                src={`/portraits/${userImg}.png`}
                className="w-12 p-0 rounded-full"
              />
              <div className="absolute right-0 bottom-0 p-1 border-2 border-solid border-purple-medium bg-blue-primary rounded-full inline-block ml-2 mt-2 p-0 border-4 border-solid border-transparent">
                <CheckIcon className="h-2 w-2 text-white" />
              </div>
            </div>
          </div>
          <div className="flex content-around justify-around flex-col ml-3">
            <div className="flex justify-center content-center items-center">
              <span className="text-sm justify-self-start self-start">
                {byUser}
              </span>
              <button
                className={`w-2 h-2 rounded-full ${
                  userActive ? `bg-green-primary` : `bg-red-primary`
                } ml-2`}
              />
            </div>
            <span className="text-xs text-purple-light">{uploadDate}</span>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-2 text-xs text-purple-light">
        <span>Sponsored</span>
      </div>
      <CubeTransparentIcon className="w-6 h-6 rounded-full hover:bg-purple-light bg-purple-primary ml-2 p-1 absolute right-0 cursor-pointer" />
    </div>
  );
};
