import React from "react";

import { Portrait } from "./Portrait";

export const Stakers = () => {
  return (
    <div className="flex justify-around">
      <Portrait userImg="agnes" user="agnes" />
      <Portrait userImg="catherine" user="catherine" />
      {/*<Portrait userImg="madre" user="madre" />*/}
      <Portrait userImg="rembrand" user="rembrand" />
      <Portrait userImg="sotheby" user="sotheby" />
    </div>
  );
};
