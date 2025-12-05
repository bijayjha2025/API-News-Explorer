
import NewsCard from "./NewsCard.jsx";

function NewsList({articles}){
    return(
        <div className="newsList">
          {articles.map((item, index) => (
          <NewsCard key={item.url || index} article={item} />
         ))}
        </div>

    );
}

export default NewsList
