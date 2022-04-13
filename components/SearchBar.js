import React from 'react'

const SearchBar = ({ path, searchQuery, setSearchQuery }) => {
    const searchForText = path === "tv" ? "TV Series" : path === "movies" ? "Movies" : "Movies and TV Series";
    const handleSearch = () => {
        if (searchQuery !== "") {
            router.push(`${path !== "" ? "/" + path : ""}/${path !== "search" && "search/"}${searchQuery}`);
        }
    }
    return (
        <>
            <div className="search-wrapper">
                <img src="/assets/icon-search.svg" alt="magnifying glass" />
                <input type="text" value={searchQuery} onKeyDown={e => e.key === 'Enter' && handleSearch()} onChange={(e) => setSearchQuery(e.target.value)} name="search" id="search" className="search" placeholder={`Search for ${searchForText}`}></input>
                <button className="button search-button" onClick={() => handleSearch()}>Search</button>
            </div>
        </>
    )
}

export default SearchBar