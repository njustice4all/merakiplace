import { useNavigate } from 'react-router-dom';

import StyledButton from './StyledButton';
import IconEmpty from 'assets/ico_empty.svg';

export default function EmptyScrapDescription() {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/');
  };

  return (
    <div className="px-[4rem] h-full flex flex-col justify-center items-center">
      <div>
        <img src={IconEmpty} />
      </div>
      <p className="text-[#6D6D6D] text-[1.8rem] leading-[2.8rem] font-bold mt-[0.8rem] mb-[2rem]">
        저장된 스크랩이 없습니다.
      </p>
      <StyledButton label="스크랩 하러 가기" onSubmit={onClickButton} />
    </div>
  );
}
