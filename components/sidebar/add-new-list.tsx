"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useSetRecoilState } from "recoil";
import { boardList } from "../store/store";
import { previousFriday } from "date-fns/previousFriday";

export default function AddNewList() {
  const [newBoard, setNewBoard] = useState(``);

  let setBoards = useSetRecoilState(boardList);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New Board</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-10">
          <DialogTitle>Add New Board</DialogTitle>
          <Input
            id="newBoardTitle"
            onChange={(event) => {
              setNewBoard(event.target.value);
            }}
            value={newBoard}
          />
          <div className="flex space-x-3">
            <DialogClose asChild>
              <Button
                className="w-fit"
                disabled={newBoard.length == 0}
                onClick={() => {
                  setBoards((prev) => {
                    return [
                      ...prev,
                      {
                        title: newBoard,
                        taskList: [
                          {
                            taskName: `Task 1 :  remote: Resolving deltas: 100% (2/2), completed with 2 local objects.`,
                            taskStatus: false,
                          },
                          {
                            taskName: `Task 2 :  remote: Resolving deltas: 100% (2/2), completed with 2 local objects.`,
                            taskStatus: false,
                          },
                          {
                            taskName: `Task 3 :  remote: Resolving deltas: 100% (2/2), completed with 2 local objects.`,
                            taskStatus: false,
                          },
                          {
                            taskName: `Task 4 :  remote: Resolving deltas: 100% (2/2), completed with 2 local objects.`,
                            taskStatus: false,
                          },
                          {
                            taskName: `Task 5 :  remote: Resolving deltas: 100% (2/2), completed with 2 local objects.`,
                            taskStatus: false,
                          },
                        ],
                      },
                    ];
                  });
                  setNewBoard(``);
                }}
              >
                Add
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="w-fit">Cancel</Button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
