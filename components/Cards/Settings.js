import React from "react";
import {
  HeartIcon,
  ChevronRightIcon,
  LockClosedIcon,
  UserIcon,
  ArchiveIcon,
  BellIcon,
} from "@heroicons/react/solid";

export const Settings = () => {
  return (
    <>
      <div className="group flex justify-around cursor-pointer hover:bg-white hover:bg-opacity-5 py-3 border-l-4 border-transparent hover:border-l-4 hover:border-purple-primary">
        <div className="flex w-10 h-10 bg-purple-medium text-purple-light justify-center items-center rounded-2xl group-hover:bg-purple-primary">
          <HeartIcon className="h-5 w-5 group-hover:text-white" />
        </div>
        <div className="w-smallMedium grid grid-rows-2">
          <p>Apereances</p>
          <p className="text-xs text-purple-light">
            Dark and Light Mode, Font size
          </p>
        </div>
        <div className="w-6 h-6 self-center">
          <ChevronRightIcon className="h-6 w-6 mr-3" />
        </div>
      </div>
      <div className="flex justify-around cursor-pointer bg-white bg-opacity-5 py-3 border-l-4 border-purple-primary">
        <div className="flex w-10 h-10 bg-purple-primary text-purple-light justify-center items-center rounded-2xl">
          <UserIcon className="h-5 w-5 text-white" />
        </div>
        <div className="w-smallMedium grid grid-rows-2">
          <p>Account Settings</p>
          <p className="text-xs text-purple-light">Personal Information</p>
        </div>
        <div className="w-6 h-6 self-center">
          <ChevronRightIcon className="h-6 w-6 mr-3" />
        </div>
      </div>
      <div className="group flex justify-around cursor-pointer hover:bg-white hover:bg-opacity-5 py-3 border-l-4 border-transparent hover:border-l-4 hover:border-purple-primary">
        <div className="flex w-10 h-10 bg-purple-medium text-purple-light justify-center items-center rounded-2xl group-hover:bg-purple-primary">
          <LockClosedIcon className="h-5 w-5 group-hover:text-white" />
        </div>
        <div className="w-smallMedium grid grid-rows-2">
          <p>Security</p>
          <p className="text-xs text-purple-light">Change Password, 2FA</p>
        </div>
        <div className="w-6 h-6 self-center">
          <ChevronRightIcon className="h-6 w-6 mr-3" />
        </div>
      </div>
      <div className="group flex justify-around cursor-pointer hover:bg-white hover:bg-opacity-5 py-3 border-l-4 border-transparent hover:border-l-4 hover:border-purple-primary">
        <div className="flex w-10 h-10 bg-purple-medium text-purple-light justify-center items-center rounded-2xl group-hover:bg-purple-primary">
          <ArchiveIcon className="h-5 w-5 group-hover:text-white" />
        </div>
        <div className="w-smallMedium grid grid-rows-2">
          <p>Archive</p>
          <p className="text-xs text-purple-light">Another one</p>
        </div>
        <div className="w-6 h-6 self-center">
          <ChevronRightIcon className="h-6 w-6 mr-3" />
        </div>
      </div>
      <div className="group flex justify-around cursor-pointer hover:bg-white hover:bg-opacity-5 py-3 border-l-4 border-transparent hover:border-l-4 hover:border-purple-primary">
        <div className="flex w-10 h-10 bg-purple-medium text-purple-light justify-center items-center rounded-2xl group-hover:bg-purple-primary">
          <BellIcon className="h-5 w-5 group-hover:text-white" />
        </div>
        <div className="w-smallMedium grid grid-rows-2">
          <p>Notification Center</p>
          <p className="text-xs text-purple-light">Another one</p>
        </div>
        <div className="w-6 h-6 self-center">
          <ChevronRightIcon className="h-6 w-6 mr-3" />
        </div>
      </div>
    </>
  );
};
