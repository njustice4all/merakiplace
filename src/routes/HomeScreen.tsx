import { useQuery } from '@tanstack/react-query';
import { getArticleAPI } from 'api/articleSearch.api';
import Article from 'components/Article';
import FilterHeader from 'components/FilterHeader';
import { useState } from 'react';

export default function HomeScreen() {
  const [page, setPage] = useState(0);

  const { data } = useQuery({
    queryKey: ['GET_ARTICLE_LIST', { page }],
    queryFn: () => getArticleAPI({ page }),
  });

  return (
    <>
      <FilterHeader />
      <div className="p-5 pb-[8.5rem]">
        {data?.response.docs.map((doc) => <Article key={doc._id} />)}
      </div>
    </>
  );
}
