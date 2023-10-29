import IconCalendar from 'assets/ico_calendar.svg';
import React, { useEffect, useRef } from 'react';

import FormTitle from './FormTitle';
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

export default function FilterFormModal() {
  const datepickerRef = useRef<HTMLInputElement>(null);

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
    console.log(selectedDate);
  };

  return (
    <div className="px-[20px] fixed max-w-[560px] w-full h-full top-0 bg-[#00000050] flex justify-center items-center">
      <div className="bg-white w-full rounded-[16px] p-[20px]">
        <FormTitle>헤드라인</FormTitle>
        <input
          type="text"
          placeholder="검색하실 헤드라인을 입력해주세요."
          className="mb-[40px] w-full h-[44px] border border-[#C4C4C4] rounded-[8px] px-[20px] py-[10px] text-[#C4C4C4] placeholder:text-[#C4C4C4]"
        />

        <FormTitle>날짜</FormTitle>
        <div className="text-[0px]">
          <input
            type="date"
            id="datepicker"
            ref={datepickerRef}
            className="w-[0px] h-[0px]"
            onChange={handleDateChange}
          />
          <div
            className="flex justify-between items-center mb-[40px] w-full border border-[#C4C4C4] rounded-[8px] px-[20px] py-[10px]"
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
              <Tag key={value} label={label} isActive={true} />
            ))}
          </div>
          <div className="flex mt-[8px]">
            {COUNTRY_LIST_SECOND.map(({ label, value }) => (
              <Tag key={value} label={label} isActive={false} />
            ))}
          </div>
        </div>

        <div className="mt-[40px] h-[60px] rounded-[16px] bg-[#3478F6] flex justify-center items-center text-white font-bold text-[16px]">
          필터 적용하기
        </div>
      </div>
    </div>
  );
}
