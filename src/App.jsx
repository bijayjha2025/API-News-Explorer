
import {useState, useEffect} from 'react'
import NavBar from './Components/NavBar.jsx';
import NewsList from './Components/NewsList.jsx';
import ErrorMessage from './Components/ErrorMessage.jsx';
import LoadingMessage from './Components/LoadingMessage.jsx';
import './App.css'


function App() {

  
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

    fetchNews();
  }, [category]);

  return (
   <div>
     <NavBar onCategoryChange = {setCategory}/>
      <h2 className='categoryDisplay'>Category: {category} </h2>

      {loading && <LoadingMessage />}
      {error && <ErrorMessage message= {error}/>}

      {!loading && !error && <NewsList articles={news} />}

    </div>
  );
}

export default App
