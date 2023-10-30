type Props = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  onSubmit: () => void;
};

export default function StyledButton({ label, onSubmit, className }: Props) {
  const mergedClassNames = [
    'cursor-pointer w-full h-[6rem] rounded-[1.6rem] bg-[#3478F6] flex justify-center items-center text-white font-bold text-[1.6rem]',
    className,
  ].join(' ');

  return (
    <div className={mergedClassNames} onClick={onSubmit}>
      {label}
    </div>
  );
}
