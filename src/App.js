import React, {useState, useEffect} from "react";
import Article from "./Article";

const App = () => {

  const [articles, setArticles] = useState([])

  const getData = async () => {
    return (
        await fetch("http://www.findyourapi.com/api/posts/")
            .then(data => data.json())
            .then(jsondata => setArticles(jsondata.data.id))
            .catch(err => console.log(err))
      )
    }
    useEffect(() => {
      getData()
    }, [])

    return (
      <div>
        {articles.map(article => (

            <Article title={article.title} content={article.content} published_at={article.published_at} />

        ))}
      </div>

  );
};

export default App;
