

function NavBar({onCategoryChange}){

    const categories = ["general", "technology", "health", "business", "sports", "science", "entertainment"];

    return(
        <nav className="navbar">
            <div><img src="/Logo.png" alt="Logo" className="mainLogo" onClick={() => onCategoryChange("general")}/></div>

            <div className="navbarButtons">
            {categories.map((categ) => (
            <button
            key={categ}
            onClick={() => onCategoryChange(categ)}>

            {categ.charAt(0).toUpperCase() + categ.slice(1)}</button>
           )
           )}
           </div>
        </nav>
    );
}

export default NavBar