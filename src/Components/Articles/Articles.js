import { MainArticle } from "../MainArticle/MainArticle.js";
import {SmallArticle} from "../SmallArticle/SmallArticle.js";
import React from "react";
import './Articles.css'

export const Articles = ({articles, onArticleClick}) => {
    return (
        <section className="articles">
            <div className="container grid">
                <section className="articles__big-column">
                    {articles.items.slice(0, 3).map((item) => {
                        return (
                            <MainArticle
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                image={item.image ? item.image : './images/image1.png'}
                                category={articles.categories.find(({id}) => item.category_id === id).name}
                                source={articles.sources.find(({id}) => item.source_id === id).name}
                                onClick={() => onArticleClick(item.id)}
                            />
                        )
                    })}
                </section>
                <section className="articles__small-column">
                    {articles.items.slice(3, 12).map((item) => {
                        return (
                            <SmallArticle
                                key={item.title}
                                title={item.title}
                                source={articles.sources.find(({id}) => item.source_id === id).name}
                                date={item.date}
                                onClick={() => onArticleClick(item.id)}
                            />
                        )
                    })}
                </section>
            </div>
        </section>
    )
}