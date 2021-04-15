import React from "react";

export const MenuItem = ({ iconComponent, title, active }) => {
  const IconComponent = iconComponent;
  return (
    <div className="menu-items mt-4 cursor-pointer p-2 hover:bg-purple-medium rounded-xl">
      <div className="flex flex-row justify-start align-center">
        <div
          className={`flex w-10 h-10 ${
            active
              ? `bg-green-primary text-white`
              : `bg-purple-medium text-purple-light`
          } justify-center items-center rounded-2xl`}
        >
          <IconComponent className="h-5 w-5 " />
        </div>
        <div className="self-center ml-4 text-purple-light">{title}</div>
      </div>
    </div>
  );
};
