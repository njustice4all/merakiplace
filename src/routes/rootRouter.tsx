import { createBrowserRouter } from 'react-router-dom';

import HomeScreen from './HomeScreen';
import ScrapScreen from './ScrapScreen';
import Layout from '../components/Layout';

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/scrap',
        element: <ScrapScreen />,
      },
    ],
  },
]);
