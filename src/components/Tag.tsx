import { useMemo } from 'react';
import { useRecoilState } from 'recoil';

import { filterState } from 'recoil/searchFilter.recoil';

type Props = {
  label: string;
  value: string;
  screen: 'home' | 'scrap';
};

export default function Tag({ screen, label, value }: Props) {
  const [filter, setFilter] = useRecoilState(filterState);
  const isActive = useMemo(() => filter[screen].countries.includes(value), [screen, filter, value]);

  const handleToggle = () => {
    const { countries } = filter[screen];
    const hasCountry = countries.includes(value);

    let newCountry = '';
    if (hasCountry) {
      newCountry = countries
        .split(',')
        .filter((country) => country !== value)
        .join(',');
    } else {
      newCountry = countries.length === 0 ? value : countries + `,${value}`;
    }

    setFilter((prev) => ({ ...prev, [screen]: { ...prev[screen], countries: newCountry } }));
  };

  const mergedClassNames = [
    'cursor-pointer h-[3.4rem] border border-[#F2F2F2] text-[1.4rem] leading-[2.4rem] tracking-[-0.04em] flex items-center px-[1.2rem] rounded-[3rem] mr-[0.6rem] last:mr-[0rem]',
    isActive ? 'text-white bg-[#82B0F4]' : 'text-[#6D6D6D] bg-white',
  ].join(' ');

  return (
    <div className={mergedClassNames} onClick={handleToggle}>
      {label}
    </div>
  );
}
