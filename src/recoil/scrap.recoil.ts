import { atom, selector, selectorFamily } from 'recoil';

import { filterState } from './searchFilter.recoil';
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

export const filteredScrapListState = selector({
  key: 'filteredScrapListState',
  get: ({ get }) => {
    const { scrap } = get(filterState);
    const { scrapList } = get(scrapState);
    const queryHeadline = scrap.q;

    return scrapList.filter((article) => article.headline.main.includes(queryHeadline));
  },
});
