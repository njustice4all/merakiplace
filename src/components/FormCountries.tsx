import FormTitle from './FormTitle';
import Tag from './Tag';
import { COUNTRY_LIST } from 'libs/constants';

type Props = {
  screen: 'home' | 'scrap';
};

export default function FormCountries({ screen }: Props) {
  return (
    <>
      <FormTitle>국가</FormTitle>
      <div className="flex flex-wrap gap-[0.6rem]">
        {COUNTRY_LIST.map(({ label, value }) => (
          <Tag key={value} screen={screen} label={label} value={value} />
        ))}
      </div>
    </>
  );
}
