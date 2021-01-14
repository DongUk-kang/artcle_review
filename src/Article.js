import React from 'react';

const Article = ({title, content, published_at}) => {

    return (
        <div>
            <h1>{title}</h1>
            <h2>{content}</h2>
            <h3>{published_at}</h3>

        </div>

    );
};

export default Article;
