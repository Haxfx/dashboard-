import React from "react";
import { Truncate } from "../../util/Truncate";

import { ChatAltIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import { Video } from "../Videos/Video";

export const Notifications = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex flex-row justify-between">
        <div className="grid rows-auto justify-center items-center right-5 bottom-0">
          <div className="inline-block relative rounded-full p-1">
            <img
              src={`/portraits/madre.png`}
              className="w-36 p-0 rounded-full"
            />
            <div className="absolute right-0 bottom-0 p-1 border-2 border-solid border-purple-medium bg-green-primary rounded-full inline-block ml-2 mt-2 p-0 border-4 border-solid border-transparent">
              <ChatAltIcon className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>
        <div className="flex content-around justify-around flex-col ml-3 cursor-pointer">
          <span className="flex text-sm justify-self-start self-start">
            <Truncate lineCount={2} moreText={``} className="font-light">
              Madre left some comments on how to ride your stakeboard safely
            </Truncate>
          </span>
          <span className="text-xs text-purple-light">
            This is really amazing, I really enjoy watching this
          </span>
        </div>
        <div className="flex items-start justify-start flex-col ml-3">
          <DotsHorizontalIcon className="h-6 w-6 text-purple-light cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
};
