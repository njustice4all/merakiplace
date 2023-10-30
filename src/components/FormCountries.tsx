import FormTitle from './FormTitle';
import Tag from './Tag';

const COUNTRY_LIST_FIRST = [
  { label: '대한민국', value: 'South Korea' },
  { label: '중국', value: 'China' },
  { label: '일본', value: 'Japan' },
  { label: '미국', value: 'United States' },
  { label: '북한', value: 'North Korea' },
];

const COUNTRY_LIST_SECOND = [
  { label: '러시아', value: 'Russia' },
  { label: '프랑스', value: 'France' },
  { label: '영국', value: 'Britain' },
];

type Props = {
  screen: 'home' | 'scrap';
};

export default function FormCountries({ screen }: Props) {
  return (
    <>
      <FormTitle>국가</FormTitle>
      <div>
        <div className="flex">
          {COUNTRY_LIST_FIRST.map(({ label, value }) => (
            <Tag key={value} screen={screen} label={label} value={value} />
          ))}
        </div>
        <div className="flex mt-[0.8rem]">
          {COUNTRY_LIST_SECOND.map(({ label, value }) => (
            <Tag key={value} screen={screen} label={label} value={value} />
          ))}
        </div>
      </div>
    </>
  );
}
