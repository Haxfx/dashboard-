import React from "react";

import { Message } from "./Message";

const messagesFixture = [
  {
    user: "Ben Bassie",
    message: "En een lul met je kut coins",
    img: "agnes",
  },
  {
    user: "Hans Dorst",
    message: "Ik ook want ik ben Hans.",
    img: "rembrand",
  },
  {
    user: "Frits Bom",
    message: "Easy mili, heb geld zat nu.",
    img: "madre",
  },
  {
    user: "Ben Bassie",
    message: "Gvd allemaal IKOS",
    img: "agnes",
  },
  {
    user: "Frits Bom",
    message: "Doge, Ripple, Verge en Neurotoken, u?",
    img: "madre",
  },
  {
    user: "Hans Dorst",
    message: "Goed goed, welke munten heb jij?",
    img: "rembrand",
  },
  {
    user: "Frits Bom",
    message: "Hoe gaat het hier?",
    img: "madre",
  },
  {
    user: "Frits Bom",
    message: "Dit is een verhaaltje met een heleboel tekst",
    img: "madre",
  },
  {
    user: "Ben Bassie",
    message: "Ik ben een eetzak en heb net een zak chips op gegeten.",
    img: "agnes",
  },
];

export const Chat = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col-reverse h-large max-h-104 block overflow-y-scroll pr-3">
        {messagesFixture.map((message) => (
          <Message
            user={message.user}
            message={message.message}
            img={message.img}
          />
        ))}
      </div>
      <span className="self-left text-purple-light mt-4">
        Henk is typing...
      </span>
    </div>
  );
};
