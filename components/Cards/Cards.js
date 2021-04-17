import React from "react";

import { Card } from "./Card";
import { Settings } from "../Settings/Settings";
import { Stakers } from "../Stakers/Stakers";
import { Videos } from "../Videos/Videos";
import { Tutorial } from "../Tutorial/Tutorial";
import { Notifications } from "../Notifications/Notifications";
import { Basic } from "../Basic/Basic";
import { Chat } from "../Chat/Chat";
import { Projects } from "../Projects/Projects";

export const Cards = () => {
  return (
    <div className="card-container grid grid-cols-9 gap-8">
      <Card title="Related Videos" variant="top" rows="3">
        <Videos />
      </Card>
      <Card title="Popular Stakers" variant="top" rows="2">
        <Stakers />
      </Card>
      <Card variant="top" inline rows="3">
        <Settings />
      </Card>
      <Card title="Live Chat" subTitle="15,986 people" seperator rows="4">
        <Chat />
      </Card>
      <Card
        title="Notifications"
        subTitle="Filter Notifications"
        rows="1"
        seperator
      >
        <Notifications />
      </Card>
      <Card rows="3" inline>
        <Tutorial />
      </Card>
      <Card rows="2" title="ADA Price">
        <div className="flex justify-center flex-col items-center">
          <h1 className="mt-3 text-3xl">$ 1.39</h1>
          <span className="mt-1">Global Average</span>
        </div>
      </Card>
      <Card rows="2" cols="4">
        <Basic
          title="We have a surprise for you"
          thumbnail="lelie"
          byUser="Billybob Toin Toin"
          userImg="agnes"
          views={185.908}
          likes={46.238}
          uploadDate="4 days ago"
          userActive
        />
      </Card>
      <Card title="Popular Projects" rows="4" cols="2">
        <Projects />
      </Card>
      <Card rows="4" title="Chart" />
      <Card rows="2" cols="4">
        <Basic
          title="Prepare for your first stakeboard"
          thumbnail="vulcano"
          byUser="Jimmy John"
          userImg="rembrand2"
          views={125.908}
          likes={46.238}
          uploadDate="2 days ago"
        />
      </Card>
    </div>
  );
};
