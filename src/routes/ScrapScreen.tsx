import { useRecoilValue } from 'recoil';

import Article from 'components/Article';
import ArticleContainer from 'components/ArticleContainer';
import EmptyScrapDescription from 'components/EmptyScrapDescription';
import FilterFormModal from 'components/FilterFormModal';
import FilterHeader from 'components/FilterHeader';
import { filteredScrapListState, scrapState } from 'recoil/scrap.recoil';

export default function ScrapScreen() {
  const { scrapList } = useRecoilValue(scrapState);
  const filteredScrapList = useRecoilValue(filteredScrapListState);

  return (
    <>
      <FilterFormModal screen="scrap" />
      {scrapList.length > 0 && <FilterHeader screen="scrap" />}
      <ArticleContainer className="h-full">
        {scrapList.length === 0 && <EmptyScrapDescription />}
        {filteredScrapList.length === 0 && (
          <p className="text-2xl">조건에 맞는 스크랩 기사가 없습니다</p>
        )}
        {filteredScrapList.map((article) => (
          <Article key={article._id} {...article} />
        ))}
      </ArticleContainer>
    </>
  );
}
