import dayjs from 'dayjs';
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

const scrapListByHeadlineState = selector({
  key: 'scrapListByHeadlineState',
  get: ({ get }) => {
    const { scrapList } = get(scrapState);
    const { scrap } = get(filterState);
    const queryHeadline = scrap.q.toLowerCase();

    if (scrap.q === '') {
      return scrapList;
    }

    return scrapList.filter((article) =>
      article.headline.main.toLowerCase().includes(queryHeadline)
    );
  },
});

const scrapListByCountryState = selector({
  key: 'scrapListByCountryState',
  get: ({ get }) => {
    const scrapListByHeadline = get(scrapListByHeadlineState);
    const { scrap } = get(filterState);

    const countries = scrap.countries.split(',').filter((country) => country !== '');

    if (countries.length === 0) {
      return scrapListByHeadline;
    }

    return scrapListByHeadline.filter(({ keywords }) =>
      keywords.some(
        ({ name, value }) => name === 'glocations' && countries.some((country) => value === country)
      )
    );
  },
});

const scrapListByDateState = selector({
  key: 'scrapListByDateState',
  get: ({ get }) => {
    const scrapListByCountry = get(scrapListByCountryState);
    const { scrap } = get(filterState);

    if (scrap.date === '') {
      return scrapListByCountry;
    }

    const currentDate = dayjs(scrap.date);
    return scrapListByCountry.filter(({ pub_date }) => dayjs(pub_date).isSame(currentDate, 'day'));
  },
});

export const filteredScrapListState = selector({
  key: 'filteredScrapListState',
  get: ({ get }) => {
    return get(scrapListByDateState);
  },
});
