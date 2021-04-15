import React from "react";

import { Card } from "./Card";
import { Settings } from "./Settings";
import { Stakers } from "./Stakers";

export const Cards = () => {
  return (
    <div className="card-container grid grid-cols-9 grid-rows-9 gap-8 mr-10">
      <Card title="Popular Videos" variant="top" rows="3">
        <span>Dit is een video</span>
      </Card>
      <Card title="Popular Stakers" variant="top" rows="1">
        <Stakers />
      </Card>
      <Card variant="top" inline rows="2">
        <Settings />
      </Card>
      <Card title="Live Chat" subTitle="15,986 people" rows="5" />
      <Card rows="4" />
      <Card title="Notifications" subTitle="Filter Notifications" rows="2" />
    </div>
  );
};
