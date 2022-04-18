import React from 'react'
import Image from 'next/dist/client/image';
const SearchBar = ({ router, searchPath, placeholder, searchQuery, setSearchQuery }) => {
    //searchpath includes a trailing slash
    const handleSearch = () => {
        if (searchQuery !== "") {
            router.push(`${searchPath}${searchQuery}`);
        }
    }
    return (
        <>
            <div className="search-wrapper">
                <img src="/assets/icon-search.svg" alt="magnifying glass"></img>
                <input type="text" value={searchQuery} onKeyDown={e => e.key === 'Enter' && handleSearch()} onChange={(e) => setSearchQuery(e.target.value)} name="search" id="search" className="search" placeholder={placeholder}></input>
                <button className="button search-button" onClick={() => handleSearch()}>Search</button>
            </div>
        </>
    )
}

export default SearchBar