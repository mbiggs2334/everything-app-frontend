import React, { useEffect } from 'react';
import {v4 as uuid} from 'uuid';

//CSS files
import './NewsMain.css';

//Components
import ArticleCard from '../Pieces/ArticleCard';

//Functions & Classes & Helpers
import NewsApi from '../../../../APIs/NewsApi';

const NewsMain = ({news}) => {

    const {newsArticles, setNewsArticles} = news;

    async function getNews(){
        let res = await NewsApi.getNews(newsArticles.skip);
        setNewsArticles(data => ({
            articles: [...data.articles, ...res.data],
            skip: data.skip + 10
        }));
        return res.data;
    };

    const getMoreArticles = () => {
        getNews();
    };

    return (
        <>
            <h1 id="newsMain-header">News</h1>
            <hr />
            <div id="newsMain-ArticleContainer">
                {newsArticles.articles.length > 0
                ? newsArticles.articles.map(article => (<ArticleCard key={uuid()} article={article} />))
                :null}
            </div>
            {newsArticles.articles.length > 0 ? <div onClick={getMoreArticles} id="newsMain-LoadMoreButton">LOAD MORE</div> : null}
        </>
    );
};

export default NewsMain;