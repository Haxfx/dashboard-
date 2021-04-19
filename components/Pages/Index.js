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
import StyledAreaChart from "../Charts/StyledAreaChart";
import { StyledBarChart } from "../Charts/StyledBarChart";

export const Cards = () => {
  return (
    <div className="card-container grid grid-cols-9 gap-8">
      <Card title="Related Videos" variant="first" rows="4">
        <Videos />
      </Card>
      <Card title="Popular Stakepools" variant="top" rows="2">
        <Stakers />
      </Card>
      <Card variant="top" inline rows="4" noMobile>
        <Settings />
      </Card>
      <Card rows="3" inline>
        <Tutorial />
      </Card>
      <Card
        title="Notifications"
        subTitle="Filter Notifications"
        rows="1"
        seperator
      >
        <Notifications />
      </Card>
      <Card
        title="Live Chat"
        subTitle="15,986 people"
        seperator
        rows="4"
        noMobile
      >
        <Chat />
      </Card>
      {/*<Card rows="2" cols="4" title="Market">
        <div className="mb-8">Current Price: $1.24</div>
        <StyledAreaChart />
      </Card>*/}
      <Card rows="2" cols="4" title="Rewards">
        <div className="mb-8">Current Epoch: 260</div>
        <StyledBarChart />
      </Card>
      <Card title="Popular Projects" rows="3" cols="2">
        <Projects />
      </Card>
      <Card rows="2" cols="4" inline>
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
      <Card rows="1" title="Something">
        <div className="flex justify-center flex-col items-center">
          {/*<h1 className="mt-3 text-3xl">$ 1.39</h1>
          <span className="mt-1">Global Average</span>*/}
        </div>
      </Card>
      {/*<Card rows="2" cols="4">
        <Basic
          title="Prepare for your first stakeboard"
          thumbnail="vulcano"
          byUser="Jimmy John"
          userImg="rembrand2"
          views={125.908}
          likes={46.238}
          uploadDate="2 days ago"
        />
      </Card>*/}
      <Card title="Socials" rows="1" cols="2">
        <Socials />
      </Card>
      <Card cols="9" title="Voetje" variant="last"></Card>
    </div>
  );
};
