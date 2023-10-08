import { atom, selector } from "recoil";

export const titleState = atom({
  key: "titleState",
  default: false,
});

export const contentState = atom({
  key: "contentState",
  default: false,
});

export const categoryState = atom({
  key: "categoryState",
  default: "total",
});

export const timeLimitState = atom({
  key: "timeLimitState",
  default: 1440,
});

export const optionState = atom({
  key: "optionState",
  default: [
    { name: "", img: "" },
    { name: "", img: "" },
  ],
});

//전부 가져와서 selector 로 합쳐 get 으로 내보내기
export const uploadSelector = selector({
  key: "uploadSelector",
  get: ({ get }) => {
    return {
      title: get(titleState),
      content: get(contentState),
      category: get(categoryState),
      timeLimit: get(timeLimitState),
      option: get(optionState),
    };
  },
});