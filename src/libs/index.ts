import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { Filter } from 'recoil/searchFilter.recoil';

dayjs.locale('ko');

export function convertDateFormat(dateString: string) {
  return dayjs(dateString).format('YYYY.MM.DD (ddd)');
}

function getCountryQuery(countryString: string) {
  const countries = countryString.split(',');
  return `glocations.contains:("${countries.join('", "')}")`;
}

export function createQueryString(filter: Filter) {
  let queryString = '';
  if (filter.date !== '') {
    queryString += `&begin_date=${filter.date}&end_date=${filter.date}`;
  }
  if (filter.q !== '' && filter.countries !== '') {
    queryString += `&fq=headline:("${filter.q}") AND ${getCountryQuery(filter.countries)}`;
  } else {
    if (filter.q !== '') {
      queryString += `&fq=headline:("${filter.q}")`;
    }
    if (filter.countries !== '') {
      queryString += `&fq=${getCountryQuery(filter.countries)}`;
    }
  }

  return queryString;
}
