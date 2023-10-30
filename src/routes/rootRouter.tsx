import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';

import HomeScreen, { getArticleListLoader } from './HomeScreen';
import ScrapScreen from './ScrapScreen';
import Layout from '../components/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
        loader: getArticleListLoader(queryClient),
      },
      {
        path: '/scrap',
        element: <ScrapScreen />,
      },
    ],
  },
]);
