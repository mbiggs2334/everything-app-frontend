import React from 'react';

//CSS files
import './ArticleCard.css';

const ArticleCard = ({article}) => {
    return (
        <a className="ArticleCard" href={article.url} target="_new">
            <div className="ArticleCardContainer">
                
                    <h4>{article.title}</h4>
                    <img src={article.image} />
                
                <p>{article.summary}</p>
            </div>
        </a>
    );
};

export default ArticleCard;