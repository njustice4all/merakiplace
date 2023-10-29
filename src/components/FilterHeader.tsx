import IconCalendar from 'assets/ico_calendar.svg';
import IconCalendarFill from 'assets/ico_calendar_fill.svg';
import IconSearch from 'assets/ico_search.svg';
import IconSearchFill from 'assets/ico_search_fill.svg';
import { useSetRecoilState } from 'recoil';
import { uiState } from 'recoil/ui.recoil';

export default function FilterHeader() {
  const setUI = useSetRecoilState(uiState);

  const onClickFilter = () => {
    setUI((prev) => ({ ...prev, showFilterFormModal: true }));
  };

  return (
    <div
      className="h-[6rem] px-[2rem] py-[1.3rem] bg-white flex border-b border-b-[#C4C4C4] tracking-[-0.04em]"
      onClick={onClickFilter}
    >
      <ItemWrapper className="w-[11.7rem] px-[1.2rem]">
        <IconWrapper>
          <img src={IconSearch} />
        </IconWrapper>
        <span className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
          전체 헤드라인
        </span>
      </ItemWrapper>

      <ItemWrapper className="w-[9.4rem]">
        <IconWrapper>
          <img src={IconCalendar} />
        </IconWrapper>
        <span>전체 날짜</span>
      </ItemWrapper>

      <ItemWrapper className="max-w-[10.8rem] px-[1.2rem]">
        <span>전체 국가</span>
      </ItemWrapper>
    </div>
  );
}

type Props = React.HTMLAttributes<HTMLDivElement>;

function ItemWrapper({ children, className }: Props) {
  const mergedClassNames = [
    'h-full border border-[#C4C4C4] rounded-[3rem] mr-[0.7rem] flex items-center justify-center text-[1.4rem] text-[#6D6D6D]',
    className,
  ].join(' ');

  return <div className={mergedClassNames}>{children}</div>;
}

function IconWrapper({ children }: Props) {
  return <span className="w-[1.6rem] aspect-square mr-[0.2rem]">{children}</span>;
}
