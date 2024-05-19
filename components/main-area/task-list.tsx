import React from "react";
import { ScrollArea } from "../ui/scroll-area";

export default function TaskList(props: {
  data: {
    title: string;
    taskList: {
      taskName: string;
      taskStatus: boolean;
    }[];
  };
}) {
  const renderTasks = props.data.taskList.map((item) => {
    return (
      <div className="flex justify-center items-center border p-3 my-3">
        {item.taskName}
      </div>
    );
  });

  return (
    <div className="rounded-xl h-72 shadow-xl bg-background dark:border p-3 space-y-3">
      <h2 className="text-lg text-center">{props.data.title}</h2>
      <hr />
      <ScrollArea className="h-48">{renderTasks}</ScrollArea>
    </div>
  );
}
