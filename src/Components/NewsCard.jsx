
function NewsCard({article}){
    const { title, description, url, urlToImage } = article;

    return(
      <div className="newsCard">

       <img src={urlToImage || "https://via.placeholder.com/400x250?text=No+Image"} alt={title} className="newsImage"/>
       <h3>{title}</h3>
       <p>{description}</p>
       <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
       
      </div>
    );
}

export default NewsCard