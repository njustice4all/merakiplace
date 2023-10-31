import { atom } from 'recoil';

type State = {
  home: {
    showFilterFormModal: boolean;
  };
  scrap: {
    showFilterFormModal: boolean;
  };
};

const initialState = {
  home: {
    showFilterFormModal: false,
  },
  scrap: {
    showFilterFormModal: false,
  },
};

export const uiState = atom<State>({
  key: 'uiState',
  default: initialState,
});
