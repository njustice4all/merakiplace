import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { getArticleAPI } from 'api/articleSearch.api';
import Article from 'components/Article';
import FilterHeader from 'components/FilterHeader';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLoaderData } from 'react-router-dom';
import { ArticleSearchResponse } from 'types/article.types';

export const getArticleListLoader = (queryClient: QueryClient) => () => {
  return queryClient.fetchInfiniteQuery({ ...getArticleQuery(), staleTime: Infinity });
};

const getArticleQuery = () => ({
  queryKey: ['GET_ARTICLE_LIST'],
  queryFn: async ({ pageParam = 0 }) => getArticleAPI({ page: pageParam }),
  initialPageParam: 0,
  getNextPageParam: (lastPage: ArticleSearchResponse) => {
    return lastPage.response.meta.offset / 10 + 1 ?? null;
  },
});

export default function HomeScreen() {
  const { ref, inView } = useInView();
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof getArticleListLoader>>
  >;
  const { data, fetchNextPage } = useInfiniteQuery({ ...getArticleQuery(), initialData });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      <FilterHeader />
      <div className="p-5 pb-[8.5rem] bg-[#F0F1F4]">
        {data.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.response.docs.map((doc) => (
              <Article key={doc._id} {...doc} />
            ))}
          </React.Fragment>
        ))}
        <div ref={ref} />
      </div>
    </>
  );
}
