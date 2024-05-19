import { atom } from "recoil";

type taskType = {
  taskName: string;
  taskStatus: boolean;
};
type boardType = {
  title: string;
  taskList: taskType[];
};

const emptyBoardArr: boardType[] = [];

const appTheme = atom({
  key: `appTheme`,
  default: `dark`,
});

const boardList = atom({
  key: `boardList`,
  default: emptyBoardArr,
  // default: [...Array(20)].map((item, index) => {
  //   return `Task List ${index + 1}`;
  // }),
});

export { appTheme, boardList };
