import React from 'react';
import { Outlet } from 'react-router-dom';

import FilterFormModal from './FilterFormModal';
import Navigator from './Navigator';

export default function Layout() {
  return (
    <main className="bg-[#F0F1F4]">
      <Outlet />
      <Navigator />
      {true && <FilterFormModal />}
    </main>
  );
}
