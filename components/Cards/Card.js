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
}) => {
  return (
    <div
      className={`col-span-9-${cols ? cols : "3"} row-span-${
        rows ? rows : "3"
      } ${!inline && `p-6 py-6`} ${
        variant === "top" && ` lg:rounded-t-none`
      }  rounded-3xl bg-purple-dark`}
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
