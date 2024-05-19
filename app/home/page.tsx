import MainArea from "@/components/main-area/main-area";
import RightArea from "@/components/right-area/right-area";
import SideBar from "@/components/sidebar/side-bar";
import React from "react";

export default function HomePage() {
  return (
    <div className="h-svh w-full flex">
      <SideBar />
      <MainArea />
      <RightArea />
    </div>
  );
}
