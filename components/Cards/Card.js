import React from "react";

import { UsersIcon } from "@heroicons/react/solid";

export const Card = ({
  children,
  title,
  subTitle,
  variant,
  rows,
  cols,
  inline,
  seperator,
  noMobile,
}) => {
  return (
    <div
      className={`lg:col-span-9-${cols ? cols : "3"} lg:row-span-${
        rows ? rows : "3"
      } 
      ${!inline && `p-6 py-6`} 
      ${variant === "first" && ` rounded-t-none`} 
      ${variant === "last" && ` rounded-b-none lg:mb-0 mb-20`} 
      ${variant === "top" && ` lg:rounded-t-none`} 
      ${variant === "bottom" && ` lg:rounded-b-none`} 
      ${noMobile && `lg:block hidden`} 
      lg:mx-0 mx-5 rounded-3xl col-span-9-9 bg-purple-dark`}
    >
      {title && (
        <p
          className={`flex pb-5 ${
            seperator &&
            `border-b-2 border-b-xl border-b-solid border-purple-light border-opacity-20`
          } justify-between`}
        >
          <span className="text-xl">{title}</span>
          {subTitle && (
            <span className="flex text-purple-light text-sm self-center">
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
