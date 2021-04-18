import React, { useState } from "react";
import { Switch } from "@headlessui/react";
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
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="lg:grid hidden auto-rows-auto grid-flow-row row-auto gap-10 w-full items-center ">
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
        <MenuItem iconComponent={LibraryIcon} title="Education" />
        <MenuItem iconComponent={FireIcon} title="Competition" />
        <MenuItem iconComponent={AnnotationIcon} title="Community" />
      </div>
      <Switch.Group>
        <div className="flex items-center justify-center justify-self-center pb-10 border-b-2 border-purple-medium w-medium">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-purple-primary" : "bg-purple-medium"
            } relative inline-flex items-center h-9 rounded-full w-16 transition-colors focus:outline-none`}
          >
            <span
              className={`${
                enabled ? "translate-x-7" : "translate-x-1"
              } inline-block w-7 h-7 transform bg-white rounded-full transition duration-300 transition-transform mx-1`}
            />
          </Switch>
          <Switch.Label className="ml-4">Night Mode</Switch.Label>
        </div>
      </Switch.Group>
      <div className="socials grid grid-rows-auto gap-10">
        <div className="flex w-2/3 self-center cursor-pointer justify-self-center items-center justify-center h-14 bg-purple-medium mr-5 ml-5 rounded-xl">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="text-white mr-2"
          >
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
          <span className="ml-4">Follow</span>
        </div>
        <div className="flex w-2/3 cursor-pointer self-center justify-self-center items-center justify-center h-14 bg-red-primary mr-5 ml-5 rounded-xl">
          <ShareIcon className="h-5 w-5 text-white" />
          <span className="ml-4">Share</span>
        </div>
      </div>
    </div>
  );
};
