"use client";

import { useState } from "react";

export default function Projects() {
  /*
  1) Events => Click event
  2)State => save data temperally || conditionally render different ui depending state

  Event
  =>event Trigger =>button
  => event = click
  => callback function =>handleButton Click

  => server => all pages are server side
  =>client(browser) => server to client
  */
  // useState => React Hook
  const [views, setViews] = useState(0);
  function handleButtonClick() {
    console.log("Button Clicked");
    setViews(views + 1);
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-6">
      <p className="text-3xl ">
        View Count: <span className="font-bold">{views}</span>{" "}
      </p>

      <button
        onClick={handleButtonClick}
        className="bg-slate-900 text-slate-50 py-3 px-6 rounded-md"
      >
        Add View
      </button>
    </div>
  );
}
