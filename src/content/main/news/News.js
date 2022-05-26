import React from 'react';

//CSS files
import './News.css';

//Components
import NewsMobile from './newsMobile/NewsMobile';
import NewsMain from './newMain/NewsMain';

const News = ({news}) => {
    return (
        <>
        <div id='newsMobile'>
            <NewsMobile news={news} />
        </div>
        <div id='newsMain'>
            <NewsMain news={news} />
        </div>
        </>
    )
};

export default News;