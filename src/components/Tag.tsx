import { useMemo } from 'react';
import { useRecoilState } from 'recoil';

import { displayState } from 'recoil/searchFilter.recoil';

type Props = {
  label: string;
  value: string;
  screen: 'home' | 'scrap';
};

export default function Tag({ screen, label, value }: Props) {
  const [display, setDisplay] = useRecoilState(displayState);
  const isActive = useMemo(
    () => display[screen].countries.includes(value),
    [screen, display, value]
  );

  const handleToggle = () => {
    const { countries } = display[screen];
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

    setDisplay((prev) => ({ ...prev, [screen]: { ...prev[screen], countries: newCountry } }));
  };

  const mergedClassNames = [
    'cursor-pointer h-[3.4rem] border border-[#F2F2F2] text-[1.4rem] leading-[2.4rem] tracking-[-0.04em] flex items-center px-[1.2rem] rounded-[3rem]',
    isActive ? 'text-white bg-[#82B0F4]' : 'text-[#6D6D6D] bg-white',
  ].join(' ');

  return (
    <div className={mergedClassNames} onClick={handleToggle}>
      {label}
    </div>
  );
}
