import React, { useState } from "react";
import {
  HomeIcon,
  ChevronDoubleRightIcon,
  PlayIcon,
  VideoCameraIcon,
  BookmarkIcon,
  FireIcon,
  LibraryIcon,
  AnnotationIcon,
  ShareIcon,
} from "@heroicons/react/solid";

import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const [nightMode, setNightMode] = useState(true);
  return (
    <div className="grid auto-rows-auto grid-flow-row row-auto gap-10 w-full items-center">
      <div className="flex w-2/3 justify-self-center">
        <h1 className="mt-10 text-2xl">Stakeboard</h1>
      </div>

      {/*Menu*/}
      <div className="grid justify-self-center pb-10 border-b-2 border-purple-medium w-medium">
        <p className="w-full">
          <span className="text-purple-medium font-bold uppercase">Menu</span>
        </p>
        <MenuItem iconComponent={HomeIcon} title="Discover" active />
        <MenuItem iconComponent={ChevronDoubleRightIcon} title="Trending" />
        <MenuItem iconComponent={VideoCameraIcon} title="Streaming" />
        <MenuItem iconComponent={PlayIcon} title="Playlist" />
        <MenuItem iconComponent={BookmarkIcon} title="Bookmark" />
      </div>

      {/*Category*/}
      <div className="grid justify-self-center pb-10 border-b-2 border-purple-medium w-medium">
        <p className="w-full">
          <span className="text-purple-medium font-bold uppercase">
            Category
          </span>
        </p>
        <MenuItem iconComponent={HomeIcon} title="Live Stream" />
        <MenuItem iconComponent={LibraryIcon} title="Tutorial" />
        <MenuItem iconComponent={FireIcon} title="Competition" />
        <MenuItem iconComponent={AnnotationIcon} title="Community" />
      </div>
      <div className="flex items-center justify-self-center pb-10 border-b-2 border-purple-medium w-medium">
        <form className="flex items-center justify-self-center">
          <label className="switch">
            <input
              type="checkbox"
              {...(nightMode && `checked`)}
              onChange={(e) => {
                e.preventDefault;
                setNightMode();
              }}
            />
            <span className="slider round"></span>
          </label>
          <span className="ml-5">Night Mode</span>
        </form>
      </div>
      <div className="socials grid grid-rows-auto gap-10">
        <div className="flex w-2/3 self-center justify-self-center items-center justify-center h-10 bg-purple-medium mr-5 ml-5 rounded-xl">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="text-white mr-2"
          >
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </div>
        <div className="flex w-2/3 self-center justify-self-center items-center justify-center h-10 bg-red-primary mr-5 ml-5 rounded-xl">
          <ShareIcon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
};
