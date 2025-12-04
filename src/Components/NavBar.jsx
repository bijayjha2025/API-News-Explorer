

function NavBar({onCategoryChange}){

    const categories = ["general", "technology", "health", "business", "sports"];

    return(
        <nav className="navbar">
        {categories.map((categ) => (
            <button className="buttons"
            key={categ}
            onClick={() => onCategoryChange(categ)}>

            {categ.charAt(0).toUpperCase() + categ.slice(1)}</button>
           )
           )}
        </nav>
    );
}

export default NavBar