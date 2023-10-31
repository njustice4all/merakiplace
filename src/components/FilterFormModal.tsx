import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import FormCountries from './FormCountries';
import FormDate from './FormDate';
import FormHeadline from './FormHeadline';
import StyledButton from './StyledButton';
import { updateQuerySelector } from 'recoil/searchFilter.recoil';
import { uiState } from 'recoil/ui.recoil';

type Props = {
  screen: 'home' | 'scrap';
};

export default function FilterFormModal({ screen }: Props) {
  const setUI = useSetRecoilState(uiState);
  const [display, updateQuery] = useRecoilState(updateQuerySelector);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onSubmit = () => {
    updateQuery(display);
    setUI((prev) => ({ ...prev, [screen]: { showFilterFormModal: false } }));
  };

  return (
    <div className="px-[2rem] fixed max-w-[560px] w-full h-full top-0 bg-[#00000050] flex justify-center items-center">
      <div className="bg-white w-full rounded-[1.6rem] p-[2rem]">
        <FormHeadline screen={screen} />
        <FormDate screen={screen} />
        <FormCountries screen={screen} />
        <StyledButton label="필터 적용하기" onSubmit={onSubmit} className="mt-[4rem]" />
      </div>
    </div>
  );
}
