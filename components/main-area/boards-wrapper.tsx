"use client";

import { useRecoilValue } from "recoil";
import { boardList } from "../store/store";
import TaskList from "./task-list";
import { ScrollArea } from "../ui/scroll-area";

export default function BoardsWrapper() {
  const boards = useRecoilValue(boardList);

  let renderBoards = boards.map((item, index) => {
    return (
      <TaskList key={`${index}${Math.random()}`} title={`${item}`}></TaskList>
    );
  });

  return (
    <ScrollArea className="w-full h-full">
      <div className="w-full h-full grid grid-cols-3 gap-5">{renderBoards}</div>
    </ScrollArea>
  );
}
