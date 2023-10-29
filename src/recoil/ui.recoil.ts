import { atom } from 'recoil';

type State = {
  showFilterFormModal: boolean;
};

const initialState = {
  showFilterFormModal: false,
};

export const uiState = atom<State>({
  key: 'uiState',
  default: initialState,
});
