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
    (screen: 'Home' | 'Scrap') =>
    ({ get }) => {
      const { home } = get(filterState);
      return createQueryString(home);
    },
});
