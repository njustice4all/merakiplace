import IconCalendar from 'assets/ico_calendar.svg';
import IconCalendarFill from 'assets/ico_calendar_fill.svg';
import IconSearch from 'assets/ico_search.svg';
import IconSearchFill from 'assets/ico_search_fill.svg';

export default function FilterHeader() {
  return (
    <div className="h-[60px] px-[20px] py-[13px] bg-white flex border-b border-b-[#C4C4C4] tracking-[-0.04em]">
      <ItemWrapper className="w-[117px] px-[12px]">
        <IconWrapper>
          <img src={IconSearch} />
        </IconWrapper>
        <span className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
          전체 헤드라인
        </span>
      </ItemWrapper>

      <ItemWrapper className="w-[94px]">
        <IconWrapper>
          <img src={IconCalendar} />
        </IconWrapper>
        <span>전체 날짜</span>
      </ItemWrapper>

      <ItemWrapper className="max-w-[108px] px-[12px]">
        <span>전체 국가</span>
      </ItemWrapper>
    </div>
  );
}

type Props = React.HTMLAttributes<HTMLDivElement>;

function ItemWrapper({ children, className }: Props) {
  const mergedClassNames = [
    'h-full border border-[#C4C4C4] rounded-[30px] mr-[7px] flex items-center justify-center text-[14px] text-[#6D6D6D]',
    className,
  ].join(' ');

  return <div className={mergedClassNames}>{children}</div>;
}

function IconWrapper({ children }: Props) {
  return <span className="w-[16px] aspect-square mr-[2px]">{children}</span>;
}
