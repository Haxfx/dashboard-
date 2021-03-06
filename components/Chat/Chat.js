import { DotsHorizontalIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import React from "react";

import { Message } from "./Message";

import messagesFixture from "./../../fixtures/chatMessages.json";

export const Chat = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col-reverse h-large max-h-100 block overflow-y-scroll pr-3">
        {messagesFixture.map((message) => (
          <Message
            key={message.id}
            user={message.user}
            message={message.message}
            img={message.img}
          />
        ))}
      </div>
      <span className="self-left text-purple-light mt-4">
        Henk is typing...
      </span>
      <div className="flex relative bg-purple-backgroundLight justify-start p-2 rounded-2xl mt-2">
        <DotsHorizontalIcon className="w-7 h-7 p-1 rounded-full text-purple-medium bg-purple-light cursor-pointer hover:bg-white absolute left-2" />
        <input
          className="w-full px-10 bg-transparent text-purple-light focus:outline-none text-sm py-1"
          placeholder="Write your message..."
        />
        <PaperAirplaneIcon className="w-7 h-7 p-1 rounded-full text-purple-white bg-purple-primary cursor-pointer hover:bg-purple-dark transform rotate-45 absolute right-2" />
      </div>
    </div>
  );
};
