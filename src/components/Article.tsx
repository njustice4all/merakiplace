import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import IconStar from 'assets/star.svg';
import IconStarFill from 'assets/star_fill.svg';
import { convertDateFormat } from 'libs';
import ScrapManager from 'libs/ScrapManager';
import { isScrapState, scrapState } from 'recoil/scrap.recoil';
import { Article as ArticleType } from 'types/article.types';

type Props = ArticleType;

export default function Article(props: Props) {
  const setScrap = useSetRecoilState(scrapState);
  const isScrap = useRecoilValue(isScrapState(props._id));

  const onClickStar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    ScrapManager.toggleArticle(props);
    setScrap((prev) => {
      const isExist = prev.scrapList.some(({ _id }) => _id === props._id);
      if (isExist) {
        alert('스크랩 제거');
        return { ...prev, scrapList: prev.scrapList.filter(({ _id }) => _id !== props._id) };
      }
      alert('스크랩 추가');
      return { ...prev, scrapList: [props, ...prev.scrapList] };
    });
  };

  return (
    <Link to={props.web_url}>
      <div className="bg-white px-[2rem] py-[1rem] rounded-[0.8rem] mb-[0.8rem] tracking-[-0.05em]">
        <div className="flex">
          <div className="flex-1 text-[1.8rem] font-bold leading-[2.8rem] line-clamp-2">
            {props.headline.main}
          </div>
          <div className="w-[2.4rem] h-[2.4rem] ml-[0.8rem]" onClick={onClickStar}>
            <img src={isScrap ? IconStarFill : IconStar} className="w-full" />
          </div>
        </div>
        <div className="mt-[0.8rem] flex justify-between text-[1.3rem] leading-[2rem]">
          <div>
            <span>{props.source}</span>
            {props.byline.person.length > 0 && (
              <span className="ml-[0.8rem]">
                {props.byline.person[0].firstname} {props.byline.person[0].lastname}
              </span>
            )}
          </div>
          <div>{convertDateFormat(props.pub_date)}</div>
        </div>
      </div>
    </Link>
  );
}
