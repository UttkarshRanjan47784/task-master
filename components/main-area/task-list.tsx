import React from "react";

export default function TaskList(props: { title: string }) {
  return (
    <div className="bg-background rounded-xl h-48 shadow-md dark:border p-3">
      <h2 className="text-lg text-center">{props.title}</h2>
      <hr />
    </div>
  );
}
