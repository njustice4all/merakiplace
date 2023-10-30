import { COUNTRY_LIST_FIRST, COUNTRY_LIST_SECOND } from 'libs/constants';

import FormTitle from './FormTitle';
import Tag from './Tag';

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
