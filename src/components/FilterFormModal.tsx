import { InfiniteData, QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { uiState } from 'recoil/ui.recoil';
import { ArticleSearchResponse } from 'types/article.types';

import FormCountries from './FormCountries';
import FormDate from './FormDate';
import FormHeadline from './FormHeadline';
import StyledButton from './StyledButton';

type Props = {
  screen: 'home' | 'scrap';
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<InfiniteData<ArticleSearchResponse, unknown>, Error>>;
};

export default function FilterFormModal({ screen, refetch }: Props) {
  const setUI = useSetRecoilState(uiState);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onSubmit = () => {
    refetch();
    setUI((prev) => ({ ...prev, showFilterFormModal: false }));
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
