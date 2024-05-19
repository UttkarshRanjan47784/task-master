import React from "react";
import { ModeToggle } from "./theme/mode-toggle";

export default function TopBar() {
  return (
    <div className="h-16 w-full flex justify-center items-center shadow-md  dark:border-b-2">
      <p className="text-xl">Task Master</p>
      <ModeToggle />
    </div>
  );
}
