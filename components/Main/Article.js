import React from "react";

import { Card } from "../Cards/Card";
import { Settings } from "../Settings/Settings";
import { Stakers } from "../Stakers/Stakers";
import { Videos } from "../Videos/Videos";
import { Tutorial } from "../Tutorial/Tutorial";
import { Notifications } from "../Notifications/Notifications";
import { Basic } from "../Basic/Basic";
import { Chat } from "../Chat/Chat";
import { Projects } from "../Projects/Projects";
import { Socials } from "../Socials/Socials";

export const Cards = () => {
  return (
    <div className="card-container grid grid-cols-9 gap-8">
      <Card
        title="This is the Article Title"
        rows="8"
        cols="6"
        variant="top"
        subTitle="Sponsored"
      />
      <Card
        title="Notifications"
        subTitle="Filter Notifications"
        rows="1"
        seperator
        variant="top"
      >
        <Notifications />
      </Card>
      <Card title="Popular Projects" rows="4" cols="3">
        <Projects />
      </Card>

      <Card rows="2" title="ADA Price">
        <div className="flex justify-center flex-col items-center">
          <h1 className="mt-3 text-3xl">$ 1.39</h1>
          <span className="mt-1">Global Average</span>
        </div>
      </Card>
      <Card rows="1" title="Chart" />
      <Card title="Comments" rows="2" cols="6" />
      <Card inline rows="3" variant="bottom">
        <Settings />
      </Card>
    </div>
  );
};
