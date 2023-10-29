type Props = React.HTMLAttributes<HTMLDivElement>;

export default function FormTitle({ children }: Props) {
  return (
    <div className="text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.05em] mb-[0.8rem]">
      {children}
    </div>
  );
}
