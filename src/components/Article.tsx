import IconStar from 'assets/star.svg';
import IconStarFill from 'assets/star_fill.svg';

export default function Article() {
  return (
    <div className="bg-white px-[20px] py-[10px] rounded-[8px] mb-[8px] tracking-[-0.05em]">
      <div className="flex">
        <div className="flex-1 text-[18px] font-bold leading-[28px] line-clamp-2">
          국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”
        </div>
        <div className="w-[24px] h-[24px] ml-2">
          <img src={IconStar} className="w-full" />
        </div>
      </div>
      <div className="mt-[8px] flex justify-between text-[13px] leading-[20px]">
        <div>
          <span>한겨례 신문</span>
          <span className="ml-[8px]">박정확 기자</span>
        </div>
        <div>2023.12.12. (목)</div>
      </div>
    </div>
  );
}
