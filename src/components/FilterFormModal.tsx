import IconCalendar from 'assets/ico_calendar.svg';
import React, { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { filterState } from 'recoil/searchFilter.recoil';
import { uiState } from 'recoil/ui.recoil';

import FormHeadline from './FormHeadline';
import FormTitle from './FormTitle';
import StyledButton from './StyledButton';
import Tag from './Tag';

const COUNTRY_LIST_FIRST = [
  { label: '대한민국', value: 'South Korea' },
  { label: '중국', value: 'China' },
  { label: '일본', value: 'Japan' },
  { label: '미국', value: 'United States' },
  { label: '북한', value: 'North Korea' },
];

const COUNTRY_LIST_SECOND = [
  { label: '러시아', value: 'Russia' },
  { label: '프랑스', value: 'France' },
  { label: '영국', value: 'Britain' },
];

type Props = {
  screen: 'home' | 'scrap';
};

export default function FilterFormModal({ screen }: Props) {
  const datepickerRef = useRef<HTMLInputElement>(null);
  const setUI = useSetRecoilState(uiState);
  const [{ home, scrap }, setFilter] = useRecoilState(filterState);
  console.log(home);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onClickCalendar = () => {
    if (datepickerRef.current) {
      if ('showPicker' in HTMLInputElement.prototype) {
        try {
          datepickerRef.current.showPicker();
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    console.log(selectedDate.replaceAll('-', ''));
  };

  const onSubmit = () => {
    setFilter((prev) => ({
      ...prev,
      home: {
        q: 'tesla',
        countries: 'United States',
        date: '20231018',
      },
    }));
    setUI((prev) => ({ ...prev, showFilterFormModal: false }));
  };

  return (
    <div className="px-[2rem] fixed max-w-[560px] w-full h-full top-0 bg-[#00000050] flex justify-center items-center">
      <div className="bg-white w-full rounded-[1.6rem] p-[2rem]">
        <FormHeadline screen={screen} />
        {/* <FormTitle>헤드라인</FormTitle>
        <input
          type="text"
          placeholder="검색하실 헤드라인을 입력해주세요."
          className="mb-[4rem] w-full h-[4.4rem] border border-[#C4C4C4] rounded-[0.8rem] px-[2rem] py-[1rem] text-[1.4rem] text-[#C4C4C4] placeholder:text-[#C4C4C4]"
        /> */}

        <FormTitle>날짜</FormTitle>
        <div className="text-[0rem]">
          <input
            type="date"
            id="datepicker"
            ref={datepickerRef}
            className="w-[0rem] h-[0rem]"
            onChange={handleDateChange}
          />
          <div
            className="mb-[4rem] w-full h-[4.4rem] border border-[#C4C4C4] rounded-[0.8rem] px-[2rem] py-[1rem] flex justify-between items-center"
            onClick={onClickCalendar}
          >
            <div className="text-[#C4C4C4]">날짜를 선택해주세요.</div>
            <div>
              <img src={IconCalendar} />
            </div>
          </div>
        </div>

        <FormTitle>국가</FormTitle>
        <div>
          <div className="flex">
            {COUNTRY_LIST_FIRST.map(({ label, value }) => (
              <Tag key={value} screen={screen} label={label} value={value} />
            ))}
          </div>
          <div className="flex mt-[0.8rem]">
            {COUNTRY_LIST_SECOND.map(({ label, value }) => (
              <Tag key={value} screen={screen} label={label} value={value} />
            ))}
          </div>
        </div>

        <StyledButton label="필터 적용하기" onSubmit={onSubmit} className="mt-[4rem]" />
      </div>
    </div>
  );
}
