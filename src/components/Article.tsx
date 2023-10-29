import IconStar from 'assets/star.svg';
import IconStarFill from 'assets/star_fill.svg';
import { Article as ArticleType } from 'types/article.types';

type Props = ArticleType;

export default function Article(props: Props) {
  return (
    <div className="bg-white px-[2rem] py-[1rem] rounded-[0.8rem] mb-[0.8rem] tracking-[-0.05em]">
      <div className="flex">
        <div className="flex-1 text-[1.8rem] font-bold leading-[2.8rem] line-clamp-2">
          {props.headline.main}
        </div>
        <div className="w-[2.4rem] h-[2.4rem] ml-[0.8rem]">
          <img src={IconStar} className="w-full" />
        </div>
      </div>
      <div className="mt-[0.8rem] flex justify-between text-[1.3rem] leading-[2rem]">
        <div>
          <span>{props.source}</span>
          <span className="ml-[0.8rem]">{props.byline.original}</span>
        </div>
        <div>2023.12.12. (목)</div>
      </div>
    </div>
  );
}
