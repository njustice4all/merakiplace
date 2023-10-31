import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import Article from 'components/Article';
import ArticleContainer from 'components/ArticleContainer';
import EmptyScrapDescription from 'components/EmptyScrapDescription';
import FilterFormModal from 'components/FilterFormModal';
import FilterHeader from 'components/FilterHeader';
import { filteredScrapListState, scrapState } from 'recoil/scrap.recoil';
import { filterState } from 'recoil/searchFilter.recoil';
import { uiState } from 'recoil/ui.recoil';

export default function ScrapScreen() {
  const {
    scrap: { showFilterFormModal },
  } = useRecoilValue(uiState);
  const filter = useRecoilValue(filterState);
  const { scrapList } = useRecoilValue(scrapState);
  const filteredScrapList = useRecoilValue(filteredScrapListState);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {showFilterFormModal && <FilterFormModal screen="scrap" />}
      {scrapList.length > 0 && <FilterHeader screen="scrap" />}
      <ArticleContainer className="h-full">
        {scrapList.length === 0 && <EmptyScrapDescription />}
        {filteredScrapList.map((article) => (
          <Article key={article._id} {...article} />
        ))}
      </ArticleContainer>
    </>
  );
}
