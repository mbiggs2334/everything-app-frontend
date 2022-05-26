import React, { useEffect } from 'react';
import {v4 as uuid} from 'uuid';

//CSS files
import './NewsMobile.css';

//Components
import ArticleCard from '../Pieces/ArticleCard';

//Functions & Classes & Helpers
import NewsApi from '../../../../APIs/NewsApi';

const NewsMobile = ({news}) => {

    const {newsArticles, setNewsArticles} = news;

    async function getNews(){
        let res = await NewsApi.getNews(newsArticles.skip);
        setNewsArticles(data => ({
            articles: [...data.articles, ...res.data],
            skip: data.skip + 10
        }));
        return res.data;
    };

    useEffect(() => {
        if(newsArticles.articles.length > 0) return;
        getNews();
    }, []);

    const getMoreArticles = () => {
        getNews();
    };

    return (
        <>
            <h1 id="newsMobile-header">News</h1>
            <hr />
            <div>
                {newsArticles.articles.length > 0
                ? newsArticles.articles.map(article => (<ArticleCard key={uuid()} article={article} />))
                :null}
            </div>
            {newsArticles.articles.length > 0 ? <div onClick={getMoreArticles} id="newsMobile-LoadMoreButton">LOAD MORE</div> : null}
        </>        
    );
};

export default NewsMobile;