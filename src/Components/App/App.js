import {categoryIds} from "../../utils.js";
import { Navigation} from "../Navigation/Navigation.js";
import {Articles} from "../Articles/Articles.js";
import React, {useState} from "react";
import './App.css'
import {Article} from "../Article/Article";

export const App = () => {
    const [articleId, setArticleId] =  useState(null)
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState({ items: [], categories: [], sources: [] });
    console.log(articleId )
    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    }

    const onArticleClick = (id) => {
        setArticleId(id)
    }
    React.useEffect(() => {
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
            .then(response => response.json())
            .then((response) => {
                setArticles(response);
            })
    }, [category])

    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <Navigation onNavClick={onNavClick} currentCategory={category} className="header__navigation" />
                </div>
            </header>

            <main>
                {articleId !== null
                    ? <Article/>
                    : <Articles articles={articles} onArticleClick={onArticleClick}/>
                }
            </main>

            <footer className="footer">
                <div className="container">
                    <Navigation onNavClick={onNavClick} currentCategory={category} className="footer__navigation" />
                    <div className="footer__bottom">
                        <p className="footer__text">Сделано на Frontend курсе в <a className="footer__link" href="https://karpov.courses/frontend" target="_blank">Karpov.Courses</a></p>
                        <p className="footer__text footer__text--gray">© 2021</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}