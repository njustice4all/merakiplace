type Props = React.HTMLAttributes<HTMLDivElement>;

export default function ArticleContainer({ children, className }: Props) {
  const mergedClassNames = ['p-5 pb-[8.5rem] bg-[#F0F1F4]', className].join(' ');

  return <div className={mergedClassNames}>{children}</div>;
}
