import { Outlet } from 'react-router-dom';

import Navigator from './Navigator';

export default function Layout() {
  return (
    <main>
      <Outlet />
      <Navigator />
    </main>
  );
}
