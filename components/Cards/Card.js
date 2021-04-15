import React, { useEffect, useState } from "react";

export const Card = ({ children, title, variant, rows }) => {
  return (
    <div
      className={`lg:col-span-3 col-span-10 row-span-${rows} p-8 ${
        variant === "top" && `lg:rounded-t-none`
      }  rounded-3xl bg-purple-dark`}
    >
      {title && (
        <p className="pb-5">
          <span className="text-xl w-full">{title}</span>
        </p>
      )}

      {children}
    </div>
  );
};
