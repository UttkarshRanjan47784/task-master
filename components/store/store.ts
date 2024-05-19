import { atom } from "recoil";

const emptyStrArr: string[] = [];

const appTheme = atom({
  key: `appTheme`,
  default: `dark`,
});

const boardList = atom({
  key: `boardList`,
  // default: emptyStrArr,
  default: [...Array(20)].map((item, index) => {
    return `Task ${index + 1}`;
  }),
});

export { appTheme, boardList };
