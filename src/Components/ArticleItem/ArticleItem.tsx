import React, { FC } from 'react';
import './ArticleItem.css';
import { RelatedSmallArticle } from '../RelatedSmallArticle/RelatedSmallArticle';
import { SingleLineTitleArticle } from '../SingleLineTitleArticle/SingleLineTitleArticle';
import { Article, ArticleItemAPI, Category, RelatedArticlesAPI, Source } from '../../types';
import { beautifyDate } from '../../utils';
import { useParams } from 'react-router-dom';

export const ArticleItem: FC = () => {
  const { id } = useParams();
  const [articleItem, setArticleItem] = React.useState<ArticleItemAPI | null>(null);
  const [relatedArticles, setRelatedArticles] = React.useState<Article[] | null>(null);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [sources, setSources] = React.useState<Source[]>([]);

  React.useEffect(() => {
    fetch(`https://frontend.karpovcourses.net/api/v2/news/full/${id}`)
      .then((response) => response.json())
      .then(setArticleItem);

    Promise.all([
      fetch(`https://frontend.karpovcourses.net/api/v2/news/related/${id}?count=9`).then((response) => response.json()),
      fetch(`https://frontend.karpovcourses.net/api/v2/categories`).then((response) => response.json()),
      fetch(`https://frontend.karpovcourses.net/api/v2/sources`).then((response) => response.json()),
    ]).then((response) => {
      const articles: RelatedArticlesAPI = response[0];
      const categories: Category[] = response[1];
      const sources: Source[] = response[2];

      setRelatedArticles(articles.items);
      setCategories(categories);
      setSources(sources);
    });
  }, [id]);

  if (articleItem === null || relatedArticles === null) {
    return null;
  }

  return (
    <section className="article-page">
      <article className="article">
        {articleItem.image.length ? (
          <section className="article__hero" style={{ backgroundImage: `url(${articleItem.image})` }}>
            <div className="container article__hero-content">
              <div className="grid">
                <h1 className="article__hero-title">{articleItem.title}</h1>
              </div>

              <div className="grid">
                <span className="article-category article__category">{articleItem.category.name}</span>
                <span className="article-date article__date">{beautifyDate(articleItem.date)}</span>
              </div>
            </div>
          </section>
        ) : null}

        <div className="grid container article__main">
          <div className="article__content">
            {!articleItem.image.length && (
              <div className="article__title-container">
                <h1 className="article__title">{articleItem.title}</h1>

                <div className="grid">
                  <span className="article-category article__category">{articleItem.category.name}</span>
                  <span className="article-date article__date">{beautifyDate(articleItem.date)}</span>
                </div>
              </div>
            )}

            <p>{articleItem.text}</p>
          </div>

          <div className="article__small-column">
            {relatedArticles.slice(3, 9).map((item) => {
              const category = categories.find(({ id }) => item.category_id === id);
              const source = sources.find(({ id }) => item.source_id === id);

              return (
                <RelatedSmallArticle
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  category={category?.name || ''}
                  source={source?.name || ''}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </article>

      <section className="article-page__related-articles">
        <div className="container">
          <h2 className="article-page__related-articles-title">Читайте также:</h2>

          <div className="grid article-page__related-articles-list">
            {relatedArticles.slice(0, 3).map((item) => {
              const category = categories.find(({ id }) => item.category_id === id);
              const source = sources.find(({ id }) => item.source_id === id);

              return (
                <SingleLineTitleArticle
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  text={item.description}
                  category={category?.name || ''}
                  source={source?.name || ''}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
