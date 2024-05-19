"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useSetRecoilState } from "recoil";
import { appTheme } from "../store/store";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const setAppTheme = useSetRecoilState(appTheme);

  return (
    <div className="absolute top-3 right-3">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setTheme("dark");
          setAppTheme("dark");
        }}
        className="transition-all duration-300 dark:hidden"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setTheme("light");
          setAppTheme("light");
        }}
        className="transition-all duration-300 hidden dark:flex"
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
