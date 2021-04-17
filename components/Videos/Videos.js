import React from "react";
import { Video } from "./Video";

export const Videos = () => {
  return (
    <div className="flex flex-col">
      <Video
        img="vulcano"
        title="Prepare for your first stakeboard"
        author="Bassie Meekie"
        views="125,908"
        uploaded="2 days ago"
      />
      <Video
        img="coast"
        title="Tips of playing stakeboard on a ramp"
        author="Bassie Meekie"
        views="125,908"
        uploaded="2 days ago"
      />
      <span className="flex content-center justify-center rounded-2xl cursor-pointer hover:bg-opacity-70 py-3 text-sm bg-purple-primary">
        See All related videos (106)
      </span>
    </div>
  );
};
