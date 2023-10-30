import Http from '@http';
import { successResponse, errorResponse } from 'libs/response';
import { ArticleSearchRequest, ArticleSearchResponse } from 'types/article.types';

const API_KEY = process.env.REACT_APP_API_KEY || '';

export async function getArticleAPI({ page, queryString = '' }: ArticleSearchRequest) {
  return Http.instance
    .get<ArticleSearchResponse>(
      `/articlesearch.json?page=${page}${queryString}&sort=newest&api-key=${API_KEY}`
    )
    .then(successResponse)
    .catch(errorResponse('getArticleAPI'));
}
