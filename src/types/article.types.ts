type Multimedia = {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  };
  crop_name: string;
};

type Headline = {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
};

type Keyword = {
  name: string;
  value: string;
  rank: number;
  major: string;
};

type Person = {
  firstname: string;
  middlename: string;
  lastname: string;
  qualifier: string;
  title: string;
  role: string;
  organization: string;
  rank: string;
};

type Byline = {
  original: string;
  organization: string;
  person: Person[];
};

export type Article = {
  web_url: string;
  snippet: string;
  print_page: number;
  print_section: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
};

export type Meta = {
  hits: number;
  offset: number;
  time: number;
};

export type ArticleSearchResponse = {
  status: string;
  copyright: string;
  response: [];
};
