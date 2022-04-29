import React from 'react'
import Image from 'next/dist/client/image';
import styles from '../styles/SearchBar.module.css'
const SearchBar = ({ router, searchPath, placeholder, searchQuery, setSearchQuery }) => {
    const handleSearch = () => {
        if (searchQuery !== "") {
            router.push(`${searchPath}${searchQuery}?page=1`);
        }
    }
    return (
        <>
            <div className={`${styles.searchWrapper}`}>
                <img src="/assets/icon-search.svg" alt="magnifying glass"></img>
                <input type="text" value={searchQuery} onKeyDown={e => e.key === 'Enter' && handleSearch()} onChange={(e) => setSearchQuery(e.target.value)} name="search" id="search" className="search" placeholder={placeholder}></input>
                <button className={`button ${styles.searchButton}`} onClick={() => handleSearch()}>Search</button>
            </div>
        </>
    )
}

export default SearchBar