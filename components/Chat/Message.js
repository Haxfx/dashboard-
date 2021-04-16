import React from "react";

import { CheckIcon } from "@heroicons/react/solid";

export const Message = ({ user, message, img }) => {
  return (
    <div className="flex self-left mt-5">
      <div className="inline-block relative rounded-full p-1">
        <img src={`/portraits/${img}.png`} className="w-14 p-0 rounded-full" />
        <div className="absolute top-7 right-0 bg-blue-400 rounded-full inline-block ml-2 mt-2 p-0">
          <CheckIcon className="h-3 w-3 text-white p-1" />
        </div>
      </div>
      <div className="grid auto-cols-auto inline-block bg-purple-backgroundLight rounded-r-2xl rounded-b-2xl p-3 ml-2">
        <div className="text-sm">
          <span>{user}</span>
          <button className="w-2 h-2 rounded-full bg-red-400 ml-2" />
        </div>
        <span className="text-sm text-purple-light">{message}</span>
      </div>
    </div>
  );
};
