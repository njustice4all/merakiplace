import Http from '@http';
import { successResponse, errorResponse } from 'libs/response';
import { ArticleSearchResponse } from 'types/article.types';

const API_KEY = process.env.REACT_APP_API_KEY || '';

export async function getArticleAPI(payload: any) {
  return Http.instance
    .get<ArticleSearchResponse>(`/articlesearch.json?api-key=${API_KEY}`)
    .then(successResponse)
    .catch(errorResponse('getArticleAPI'));
}
