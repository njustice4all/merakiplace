import { useRecoilValue, useSetRecoilState } from 'recoil';

import FilterHeaderTag from './FilterHeaderTag';
import IconCalendar from 'assets/ico_calendar.svg';
import IconCalendarFill from 'assets/ico_calendar_fill.svg';
import IconSearch from 'assets/ico_search.svg';
import IconSearchFill from 'assets/ico_search_fill.svg';
import { getDisplayHeaderTag } from 'recoil/searchFilter.recoil';
import { uiState } from 'recoil/ui.recoil';

type Props = {
  screen: 'home' | 'scrap';
};

export default function FilterHeader({ screen }: Props) {
  const setUI = useSetRecoilState(uiState);
  const displayTag = useRecoilValue(getDisplayHeaderTag(screen));

  const onClickFilter = () => {
    setUI((prev) => ({ ...prev, showFilterFormModal: true }));
  };

  return (
    <div
      className="h-[6rem] px-[2rem] py-[1.3rem] bg-white flex border-b border-b-[#C4C4C4] tracking-[-0.04em]"
      onClick={onClickFilter}
    >
      <FilterHeaderTag
        className="max-w-[11.7rem] px-[1.2rem]"
        isActive={displayTag.headline.isActive}
      >
        <img
          src={displayTag.headline.isActive ? IconSearchFill : IconSearch}
          className="mr-[0.4rem]"
        />
        <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
          {displayTag.headline.str}
        </div>
      </FilterHeaderTag>

      <FilterHeaderTag className="w-[9.4rem]" isActive={displayTag.date.isActive}>
        <img
          src={displayTag.date.isActive ? IconCalendarFill : IconCalendar}
          className="mr-[0.4rem]"
        />
        <div>{displayTag.date.str}</div>
      </FilterHeaderTag>

      <FilterHeaderTag
        className="px-[1.2rem] max-w-[10.4rem]"
        isActive={displayTag.countries.isActive}
      >
        <div>{displayTag.countries.str}</div>
      </FilterHeaderTag>
    </div>
  );
}
