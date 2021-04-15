import React from "react";

import { Card } from "./Card";

export const Cards = () => {
  return (
    <div className="card-container grid grid-cols-9 grid-rows-9 gap-10 mr-10">
      <Card title="Popular Videos" variant="top" rows="4">
        <span>Dit is een video</span>
      </Card>
      <Card title="Popular Stakers" variant="top" rows="1" />
      <Card variant="top" rows="2" />
      <Card title="Live Chat" rows="5" />
      <Card rows="4" />
      <Card title="Notifications" rows="2" />
    </div>
  );
};
