import React, { useState } from "react";

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
  const [sponsored, setSponsored] = useState(true);

  return (
    <div className="flex flex lg:flex-row flex-col justify-start relative lg:p-6">
      <img
        src={`/stage/${thumbnail}.jpeg`}
        alt={thumbnail}
        className="lg:rounded-2xl rounded-t-2xl lg:w-40 lg:h-32 w-full h-auto"
      />
      <div className="flex lg:content-around lg:justify-around lg:flex-col flex-row ml-6">
        <span className="lg:text-sm text-m justify-self-start self-start lg:pt-0 lg:pb-0 pt-12 pb-20">
          {title}
        </span>
        <div className="lg:flex flex-row justify-start content-start text-purple-light hidden">
          <div className="flex flex-row">
            <EyeIcon className="h-4 w-4 hover:text-white cursor-pointer" />
            <span className="text-xs ml-2">{views} views</span>
          </div>
          <div className="flex flex-row ml-6">
            <HeartIcon className="h-4 w-4 hover:text-red-primary cursor-pointer" />
            <span className="text-xs ml-2">{likes} likes</span>
          </div>
        </div>
        <div className="lg:flex lg:flex-row flex-col justify-start">
          <div className="grid rows-auto justify-center items-center right-5 bottom-0 lg:static absolute right-0 bottom-6">
            <div className="inline-block relative rounded-full p-1">
              <img
                src={`/portraits/${userImg}.png`}
                className="w-12 p-0 rounded-full"
              />
              {!sponsored && (
                <div className="absolute right-0 bottom-0 p-1 border-2 border-solid border-purple-medium bg-blue-primary rounded-full inline-block ml-2 mt-2 p-0 border-4 border-solid border-transparent">
                  <CheckIcon className="h-2 w-2 text-white" />
                </div>
              )}
            </div>
          </div>
          <div className="flex lg:content-around lg:justify-around flex-col lg:ml-3 lg:static lg:bottom-none absolute bottom-28 left-6">
            <div className="lg:flex justify-center content-center items-center">
              <span className="lg:text-sm text-xs lg:text-white text-purple-light lg:justify-self-start lg:self-start">
                {byUser}
              </span>
              <button
                className={`w-2 h-2 rounded-full ${
                  userActive ? `bg-green-primary` : `bg-red-primary`
                } ml-2`}
              />
            </div>
            <span className="text-xs text-purple-light lg:block hidden">
              {uploadDate}
            </span>
          </div>
        </div>
      </div>
      <span className="absolute lg:right-6 bottom-6 lg:left-auto left-6 text-xs text-purple-light">
        Sponsored
      </span>
      <CubeTransparentIcon className="w-6 h-6 rounded-full hover:bg-purple-light bg-purple-primary ml-2 p-1 absolute lg:right-6 lg:top-6 top-4 right-4 cursor-pointer" />
    </div>
  );
};
