import IconCalendar from 'assets/ico_calendar.svg';
import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from 'recoil/searchFilter.recoil';

import FormTitle from './FormTitle';

type Props = {
  screen: 'home' | 'scrap';
};

export default function FormDate({ screen }: Props) {
  const datepickerRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useRecoilState(filterState);
  const [displayDate, setDisplayDate] = useState('');

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
    setFilter((prev) => ({
      ...prev,
      [screen]: { ...prev[screen], date: selectedDate.replaceAll('-', '') },
    }));
    setDisplayDate(selectedDate.replaceAll('-', '.'));
  };

  return (
    <>
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
          <div className="text-[1.4rem] text-[#C4C4C4]">
            {displayDate || '날짜를 선택해주세요.'}
          </div>
          <div>
            <img src={IconCalendar} />
          </div>
        </div>
      </div>
    </>
  );
}
