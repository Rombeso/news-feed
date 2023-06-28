import { Articles } from '../Articles/Articles';
import React, { useEffect } from 'react';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Page } from '../Page/Page';
import { AdminPage } from '../AdminPage/AdminPage';
import { AdminArticles } from '../AdminArticles/AdminArticles';
import { AdminArticlesItem } from '../AdminArticlesItem/AdminArticlesItem';

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path={'/admin'}
        element={
          <AdminPage>
            <AdminArticles />
          </AdminPage>
        }
      ></Route>
      <Route
        path={'/admin/create'}
        element={
          <AdminPage>
            <AdminArticlesItem />
          </AdminPage>
        }
      ></Route>
      <Route
        path={'/admin/edit/:id'}
        element={
          <AdminPage>
            <AdminArticlesItem />
          </AdminPage>
        }
      ></Route>
      <Route
        path={'/:categoryId'}
        element={
          <Page>
            <Articles />
          </Page>
        }
      ></Route>
      <Route
        path={'/article/:id'}
        element={
          <Page>
            <ArticleItem />
          </Page>
        }
      ></Route>
      <Route
        path={'/*'}
        element={
          <Page>
            <Articles />
          </Page>
        }
      ></Route>
    </Routes>
  );
};
