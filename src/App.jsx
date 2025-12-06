
import {useState, useEffect} from 'react'
import NavBar from './Components/NavBar.jsx';
import NewsList from './Components/NewsList.jsx';
import ErrorMessage from './Components/ErrorMessage.jsx';
import LoadingMessage from './Components/LoadingMessage.jsx';
import './App.css'
import Skeleton from './Components/Skeleton.jsx';
import Footer from './Components/Footer.jsx';


function App() {

  
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [displayText, setDisplayText] = useState("general");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== "ok") {
          throw new Error("Unable to fetch news");
        }

        setNews(data.articles);
      }
      catch (err) {
        setError(err.message);
        setNews([]);
      }
      finally {
        setLoading(false);
      }
    };

    if(!searchMode){
      fetchNews();
    }
  }, [category, searchMode]);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError("");
      setSearchMode(true);

      setDisplayText(`Search: ${query}`);

      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${import.meta.env.VITE_NEWS_API}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== "ok") {
        throw new Error("Unable to fetch search results");
      }

      setNews(data.articles);
    }
    catch (err) {
      setError(err.message);
      setNews([]);
    }
    finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchMode(false);

    setDisplayText(newCategory);
  };

  return (
   <div>
     <NavBar onCategoryChange = {handleCategoryChange} onSearchNews={handleSearch}/>
      <h2 className='categoryDisplay'>Category: {displayText.charAt(0).toUpperCase() + displayText.slice(1)}</h2>

      {loading && (
        <div className='skeletonContainer'>
          {Array.from({ length: 6}).map((_, i)=>(

            <Skeleton key={i}/>
          ))}
        </div>
      )}

      {error && <ErrorMessage message={error} />}
      {!loading && !error && <NewsList articles={news} />}
      
      <Footer/>
    </div>
      
  );
}

export default App
