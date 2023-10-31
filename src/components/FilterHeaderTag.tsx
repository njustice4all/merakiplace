type ItemProps = React.HTMLAttributes<HTMLDivElement> & {
  isActive: boolean;
};

export default function FilterHeaderTag({ children, className, isActive }: ItemProps) {
  const activeClassNames = isActive
    ? 'text-[#3478F6] border-[#82B0F4]'
    : 'text-[#6D6D6D] border-[#C4C4C4]';

  const mergedClassNames = [
    'cursor-pointer h-full border rounded-[3rem] mr-[0.7rem] flex items-center justify-center text-[1.3rem] last:mr-[0rem]',
    activeClassNames,
    className,
  ].join(' ');

  return <div className={mergedClassNames}>{children}</div>;
}
