import React from "react";

import { StyledBarChart } from "../Charts/StyledbarChart";

export const Charts = () => {
  return (
    <div className="card-container grid grid-cols-9 gap-8">
      <StyledBarChart />
    </div>
  );
};
