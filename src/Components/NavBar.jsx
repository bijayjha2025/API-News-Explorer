
import {useState} from 'react'

function NavBar({onCategoryChange, onSearchNews}){

    const categories = ["general", "technology", "health", "business", "sports", "science", "entertainment"];
    const [searchQuery, setSearchQuery] = useState("");

    const handleClickSearch = () =>{
        if(searchQuery.trim()){
            onSearchNews(searchQuery);
        }
    }

    const handleKeyPress = (e) =>{
        if(e.key == 'Enter'){
            handleClickSearch();
        }
    }

    return(
        <nav className="navbar">
            <div><img src="/Logo.png" alt="Logo" className="mainLogo" onClick={() => onCategoryChange("general")}/></div>

            <div className="searchBox">
                <input type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                onKeyPress = {handleKeyPress}
                className="searchInput"></input>
                <button onClick={handleClickSearch} className="searchButton"><img src='./search.png' alt ='searchIcon' className='searchIcon'></img></button>
            </div>

            <div className="navbarButtons">
              {categories.map((categ) => (
              <button
              key={categ}
              onClick={() => onCategoryChange(categ)}>
              {categ.charAt(0).toUpperCase() + categ.slice(1)}</button>
           ))}
           </div>
        </nav>
    );
}

export default NavBar