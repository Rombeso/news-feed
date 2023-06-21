import { Navigation } from '../Navigation/Navigation';
import { Articles } from '../Articles/Articles';
import React, { useEffect } from 'react';
import './App.css';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { Route, Routes, useLocation } from 'react-router-dom';

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="container">
          <Navigation placement="header" className="header__navigation" />
        </div>
      </header>
      <main>
        <Routes>
          <Route path={'/:categoryId'} element={<Articles />} />
          <Route path={'/article/:id'} element={<ArticleItem />} />
          <Route path={'/*'} element={<Articles />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <Navigation placement="footer" className="footer__navigation" />
          <div className="footer__bottom">
            <p className="footer__text">
              Сделано на Frontend курсе в{' '}
              <a className="footer__link" href="https://karpov.courses/frontend" target="_blank" rel="noreferrer">
                Karpov.Courses
              </a>
            </p>
            <p className="footer__text footer__text--gray">© 2021</p>
          </div>
        </div>
      </footer>
    </>
  );
};
