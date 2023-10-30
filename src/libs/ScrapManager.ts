import { Article } from 'types/article.types';

type LocalArticleList = Article[];

class ScrapManager {
  private _KEY = '_scrapList';

  public toggleArticle(article: Article) {
    const articleList = this.getArticleList();
    const isExist = this.hasArticle(article._id);

    let newArticleList: Article[] = [];
    if (isExist) {
      newArticleList = articleList.filter(({ _id }) => _id !== article._id);
    } else {
      newArticleList = [article, ...articleList];
    }

    localStorage.setItem(this._KEY, JSON.stringify(newArticleList));
  }

  public hasArticle(_id: string) {
    const articleList = this.getArticleList();
    return articleList.some((article) => article._id === _id);
  }

  public getArticleList() {
    const article = localStorage.getItem(this._KEY);
    if (article) {
      return JSON.parse(article) as LocalArticleList;
    }

    return [];
  }
}

export default new ScrapManager();
