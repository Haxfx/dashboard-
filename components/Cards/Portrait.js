import React from "react";

import { CheckIcon } from "@heroicons/react/solid";

export const Portrait = ({ user, userImg }) => {
  return (
    <div className="grid rows-auto justify-center items-center">
      <div className="inline-block relative border-solid bg-gradient-to-tl from-purple-light to-blue-400 rounded-full p-1">
        <img
          src={`/portraits/${userImg}.png`}
          className="w-16 p-0 rounded-full border-4 border-solid border-purple-medium bg-purple-medium"
        />
        <div className="absolute right-0 bottom-0 bg-blue-400 rounded-full inline-block ml-2 mt-2 p-1 border-4 border-solid border-purple-medium">
          <CheckIcon className="h-3 w-3" />
        </div>
      </div>
      <span className="text-xs mt-3 capitalize text-purple-light justify-self-center self-center">
        {user}
      </span>
    </div>
  );
};
