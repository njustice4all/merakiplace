import { atom, selector, selectorFamily } from 'recoil';

import { createQueryString } from 'libs';
import { COUNTRY_LIST } from 'libs/constants';

export type Filter = {
  q: string;
  countries: string;
  date: string;
};

type State = {
  home: Filter;
  scrap: Filter;
};

const initialFilterState = {
  q: '',
  countries: '',
  date: '',
};

const initialState = {
  home: initialFilterState,
  scrap: initialFilterState,
};

export const filterState = atom<State>({
  key: 'filterState',
  default: initialState,
});

export const displayState = atom<State>({
  key: 'displayState',
  default: initialState,
});

export const updateQuerySelector = selector({
  key: 'updateQuerySelector',
  get: ({ get }) => {
    return get(displayState);
  },
  set: ({ set }, newValue) => {
    set(filterState, newValue);
  },
});

export const getPayloadByScreen = selectorFamily({
  key: 'getPayloadByScreen',
  get:
    (screen: 'home' | 'scrap') =>
    ({ get }) => {
      const filter = get(filterState);
      const item = filter[screen];
      return createQueryString(item);
    },
});

export const getDisplayHeaderTag = selectorFamily({
  key: 'getDisplayHeaderTag',
  get:
    (screen: 'home' | 'scrap') =>
    ({ get }) => {
      const filter = get(filterState);
      const item = filter[screen];
      const countries = item.countries.split(',').filter((country) => country !== '');

      let countryStr = '';
      if (countries.length === 0) {
        countryStr = '전체 국가';
      } else if (countries.length === 1) {
        const [{ label }] = COUNTRY_LIST.filter(({ value }) => value === item.countries);
        countryStr = label;
      } else {
        const [{ label }] = COUNTRY_LIST.filter(({ value }) =>
          countries.some((country) => value === country)
        );
        countryStr = `${label} 외 ${countries.length - 1}개`;
      }

      return {
        headline: {
          isActive: item.q !== '',
          str: item.q || '전체 헤드라인',
        },
        date: {
          isActive: item.date !== '',
          str: item.date || '전체 날짜',
        },
        countries: {
          isActive: item.countries !== '',
          str: countryStr,
        },
      };
    },
});
