import React from "react";
import {
  FaTelegramPlane,
  FaRedditAlien,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex justify-around items-center mt-4 text-white">
      <div className="group flex flex-col justify-center items-center cursor-pointer">
        <FaTelegramPlane className="w-6 h-6 group-hover:text-purple-primary" />
        {/*<span className="text-xs mt-3 group-hover:text-purple-primary">
          Telegram
        </span>*/}
      </div>
      <div className="group flex flex-col justify-center items-center cursor-pointer">
        <FaTwitter className="w-6 h-6 group-hover:text-purple-primary" />
        {/*<span className="text-xs mt-3 group-hover:text-purple-primary">
          Twitter
        </span>*/}
      </div>
      <div className="group flex flex-col justify-center items-center cursor-pointer">
        <FaRedditAlien className="w-6 h-6 group-hover:text-purple-primary" />
        {/*<span className="text-xs mt-3 group-hover:text-purple-primary">
          Reddit
        </span>*/}
      </div>
      <div className="group flex flex-col justify-center items-center cursor-pointer">
        <FaGithub className="w-6 h-6 group-hover:text-purple-primary" />
        {/*<span className="text-xs mt-3 group-hover:text-purple-primary">
          Github
        </span>*/}
      </div>
    </div>
  );
};
