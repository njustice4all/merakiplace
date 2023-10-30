import { atom, selectorFamily } from 'recoil';

import ScrapManager from 'libs/ScrapManager';
import { Article } from 'types/article.types';

type State = {
  scrapList: Article[];
};

const initialState = {
  scrapList: ScrapManager.getArticleList(),
};

export const scrapState = atom<State>({
  key: 'scrapState',
  default: initialState,
});

export const isScrapState = selectorFamily({
  key: 'isScrapState',
  get:
    (_id: string) =>
    ({ get }) => {
      const { scrapList } = get(scrapState);
      return scrapList.some((article) => article._id === _id);
    },
});
