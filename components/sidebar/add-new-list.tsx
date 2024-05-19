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
                    return [...prev, newBoard];
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
