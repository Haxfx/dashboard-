import React, { useEffect, useState } from "react";

import { UsersIcon } from "@heroicons/react/solid";

export const Card = ({ children, title, subTitle, variant, rows, inline }) => {
  return (
    <div
      className={`lg:col-span-3 col-span-10 py-6 row-span-${rows} ${
        !inline && `p-8`
      } ${
        variant === "top" && `lg:rounded-t-none`
      }  rounded-3xl bg-purple-dark`}
    >
      {title && (
        <p className="flex pb-5 justify-between">
          <span className="text-xl">{title}</span>
          {subTitle && (
            <span className="flex text-purple-light text-m self-center">
              <UsersIcon className="h-6 w-6 mr-3" />
              {subTitle}
            </span>
          )}
        </p>
      )}

      {children}
    </div>
  );
};
