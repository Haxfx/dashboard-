import React from "react";

export const MenuItem = ({ iconComponent, title, active }) => {
  const IconComponent = iconComponent;
  return (
    <div className="menu-items mt-10">
      <div className="flex flex-row justify-start align-center">
        <div
          className={`flex w-10 h-10 ${
            active ? `bg-green-primary` : `bg-purple-medium `
          } justify-center items-center rounded-2xl`}
        >
          <IconComponent className="h-5 w-5 text-white" />
        </div>
        <div className="self-center ml-4">{title}</div>
      </div>
    </div>
  );
};
