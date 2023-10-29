type Props = {
  label: string;
  isActive: boolean;
};

export default function Tag({ label, isActive }: Props) {
  const mergedClassNames = [
    'h-[34px] border border-[#F2F2F2] text-[14px] leading-[24px] tracking-[-0.04em] flex items-center px-[12px] rounded-[30px] mr-[6px] last:mr-[0px]',
    isActive ? 'text-white bg-[#82B0F4]' : 'text-[#6D6D6D] bg-white',
  ].join(' ');

  return <div className={mergedClassNames}>{label}</div>;
}
