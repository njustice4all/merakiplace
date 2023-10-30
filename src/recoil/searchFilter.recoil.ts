import { createQueryString } from 'libs';
import { atom, selectorFamily } from 'recoil';

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
