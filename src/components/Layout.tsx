import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { uiState } from 'recoil/ui.recoil';

import FilterFormModal from './FilterFormModal';
import Navigator from './Navigator';

export default function Layout() {
  const { showFilterFormModal } = useRecoilValue(uiState);

  return (
    <main>
      <Outlet />
      <Navigator />
      {showFilterFormModal && <FilterFormModal />}
    </main>
  );
}
