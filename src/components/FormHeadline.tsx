import { useRecoilState } from 'recoil';

import FormTitle from './FormTitle';
import { displayState } from 'recoil/searchFilter.recoil';

type Props = {
  screen: 'home' | 'scrap';
};

export default function FormHeadline({ screen }: Props) {
  const [display, setDisplay] = useRecoilState(displayState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplay((prev) => ({ ...prev, [screen]: { ...prev[screen], q: e.target.value } }));
  };

  return (
    <>
      <FormTitle>헤드라인</FormTitle>
      <input
        type="text"
        placeholder="검색하실 헤드라인을 입력해주세요."
        className="mb-[4rem] w-full h-[4.4rem] border border-[#C4C4C4] rounded-[0.8rem] px-[2rem] py-[1rem] text-[1.4rem] text-[#C4C4C4] placeholder:text-[#C4C4C4]"
        onChange={onChange}
        value={display[screen].q}
      />
    </>
  );
}
