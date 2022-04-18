export const HOST = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'https://dash-entertainment.vercel.app'
export const API_KEY = "3ab8cbaaf33601b17a319fdcd7af44f3";
export const fetcher = (url) => fetch(url).then(res => res.json())
// export default function fetcher(...urls) {
//     const f = (u) => fetch(u).then((r) => r.json());

//     if (urls.length > 1) {
//         return Promise.all(urls.map(f));
//     }
//     return f(urls);
// }
export const getURL = (path, optional = '') => {
    return `${paths.content}${path}?api_key=${API_KEY}${optional}`
}
export const parse = (contentList) => {
    return contentList.results.map(contentItem => {
        const mediaType = "title" in contentItem ? "movie" : "known_for" in contentItem ? "person" : "name" in contentItem ? "tv" : null
        return {
            category: mediaType,
            id: contentItem.id,
            title: mediaType === "movie" ? contentItem.title : mediaType === "tv" ? contentItem.name : mediaType === "person" ? contentItem.name : null,
            year: "release_date" in contentItem ? contentItem.release_date.substring(0, 4) : "first_air_date" in contentItem ? contentItem.first_air_date.substring(0, 4) : "",
            genres: contentItem.genre_ids,
            image: ("profile_path" in contentItem && contentItem.profile_path !== null) ? contentItem.profile_path : ("backdrop_path" in contentItem && contentItem.backdrop_path !== null) ? contentItem.backdrop_path : ("poster_path" in contentItem && contentItem.poster_path !== null) ? contentItem.poster_path : null,
            backdrop: mediaType === "movie" || mediaType === "tv" ? contentItem.backdrop_path : mediaType === "person" ? contentItem.profile_path : null,
            poster: contentItem.poster_path,
            rating: contentItem.vote_average,
        };
    });
}
export const paths = {
    content: "https://api.themoviedb.org/3/",
    images: "https://image.tmdb.org/t/p/w1280/",
    search: {
        movies: "search/movie",
        tv: "search/tv",
        people: "search/person",
        multi: "search/multi",
    },
    discover: {
        movies: "discover/movie",
        tv: "discover/tv",
    },
    genres: {
        movies: "genre/movie/list",
        tv: "genre/tv/list",
    },
    popular: {
        movies: "movie/popular",
        tv: "tv/popular",
        people: "person/popular",
    },
    trending: {
        all: "trending/all/day",
        movies: "trending/movie/day",
        tv: "trending/tv/day",
    },
    topRated: {
        movies: "movie/top_rated",
        tv: "tv/top_rated",
    },
    nowPlaying: {
        movies: "movie/now_playing",
        tv: "tv/airing_today",
    }
}

export const placeholders = {
    search: "Search for Movies, TV Series, and Cast Members",
    "": "Search for Movies, TV Series, and Cast Members",
    movies: "Search for Movies",
    tv: "Search for TV Series",
    cast: "Search for Cast Members",
}
