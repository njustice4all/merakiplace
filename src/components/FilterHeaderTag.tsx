type ItemProps = React.HTMLAttributes<HTMLDivElement> & {
  isActive: boolean;
};

export default function FilterHeaderTag({ children, className, isActive }: ItemProps) {
  const activeClassStr = 'text-[#3478F6] border-[#82B0F4]';

  const mergedClassNames = [
    'h-full border border-[#C4C4C4] rounded-[3rem] mr-[0.7rem] flex items-center justify-center text-[1.3rem] text-[#6D6D6D] last:mr-[0rem]',
    isActive ? activeClassStr : '',
    className,
  ].join(' ');

  return <div className={mergedClassNames}>{children}</div>;
}
