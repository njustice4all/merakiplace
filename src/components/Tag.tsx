type Props = {
  label: string;
  isActive: boolean;
};

export default function Tag({ label, isActive }: Props) {
  const mergedClassNames = [
    'h-[3.4rem] border border-[#F2F2F2] text-[1.4rem] leading-[2.4rem] tracking-[-0.04em] flex items-center px-[1.2rem] rounded-[3rem] mr-[0.6rem] last:mr-[0rem]',
    isActive ? 'text-white bg-[#82B0F4]' : 'text-[#6D6D6D] bg-white',
  ].join(' ');

  return <div className={mergedClassNames}>{label}</div>;
}
