type Props = React.HTMLAttributes<HTMLDivElement>;

export default function FormTitle({ children }: Props) {
  return (
    <div className="text-[16px] font-bold leading-[24px] tracking-[-0.05em] mb-[8px]">
      {children}
    </div>
  );
}
