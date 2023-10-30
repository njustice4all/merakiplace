import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { getArticleAPI } from 'api/articleSearch.api';
import Article from 'components/Article';
import FilterFormModal from 'components/FilterFormModal';
import FilterHeader from 'components/FilterHeader';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLoaderData } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getPayloadByScreen } from 'recoil/searchFilter.recoil';
import { uiState } from 'recoil/ui.recoil';
import { ArticleSearchResponse } from 'types/article.types';

export const getArticleListLoader = (queryClient: QueryClient) => () => {
  return queryClient.fetchInfiniteQuery({ ...getArticleQuery(''), staleTime: Infinity });
};

const getArticleQuery = (queryString: string) => ({
  queryKey: ['GET_ARTICLE_LIST', { queryString }],
  queryFn: async ({ pageParam = 0 }) => getArticleAPI({ page: pageParam, queryString }),
  initialPageParam: 0,
  getNextPageParam: (lastPage: ArticleSearchResponse) => {
    if (lastPage.response.docs.length === 0) return null;
    return lastPage.response.meta.offset / 10 + 1 ?? null;
  },
});

export default function HomeScreen() {
  const { ref, inView } = useInView();
  const queryString = useRecoilValue(getPayloadByScreen('home'));
  const { showFilterFormModal } = useRecoilValue(uiState);

  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof getArticleListLoader>>
  >;
  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    ...getArticleQuery(queryString),
    initialData,
    enabled: false,
  });

  // useEffect(() => {
  //   if (inView) {
  //     fetchNextPage();
  //   }
  // }, [inView, fetchNextPage]);

  return (
    <>
      {showFilterFormModal && <FilterFormModal screen="home" refetch={refetch} />}
      <FilterHeader />
      <div className="p-5 pb-[8.5rem] bg-[#F0F1F4]">
        {/* {data.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.response.docs.map((doc) => (
              <Article key={doc._id} {...doc} />
            ))}
          </React.Fragment>
        ))} */}
        <div ref={ref} />
      </div>
    </>
  );
}
