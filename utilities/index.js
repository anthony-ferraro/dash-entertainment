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
export const getURL = (path, optional = '', type = 'content') => {
    return `${type === "image" ? paths.images : paths.content}${path}${type === "content" && "?api_key="}${type === "content" && API_KEY}${optional}`
}
export const getIMG = (imgpath, resolution = "w500") => {
    return `https://image.tmdb.org/t/p/${resolution}/${imgpath}`

}
export const parse = (contentList) => {
    return "results" in contentList ? contentList.results.map(contentItem => {
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
    }) : contentList.cast.map(contentItem => {
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

export const parseContentItem = (contentItem) => {
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
        tagline: contentItem.tagline,
        runtime: mediaType === "movie" ? contentItem.runtime : contentItem.episode_run_time[0],
        synopsis: contentItem.overview,
        language: contentItem.spoken_languages[0]!==undefined ? contentItem.spoken_languages[0].name : null,
        status: contentItem.status,
        seasons: mediaType === "tv" ? contentItem.number_of_seasons : null,
    };
}

export const parseProviderData = (providerData, country = "US") => {
    const minPriority = 50;
    if (Object.keys(providerData).length !== 0 && "results" in providerData && country in providerData.results) {
        const results = providerData.results[country];
        const parseProvider = (provider) => { return { name: provider.provider_name, logo: provider.logo_path, priority: provider.display_priority } }
        return {
            free: "free" in results ? results.free
                .filter(provider => provider.display_priority <= minPriority)
                .map(provider => parseProvider(provider)) : [],
            stream: "flatrate" in results ? results.flatrate
                .filter(provider => provider.display_priority <= minPriority)
                .map(provider => parseProvider(provider)) : [],
            ads: "ads" in results ? results.ads
                .filter(provider => provider.display_priority <= minPriority)
                .map(provider => parseProvider(provider)) : [],
            rent: "rent" in results ? results.rent
                .filter(provider => provider.display_priority <= minPriority)
                .map(provider => parseProvider(provider)) : [],
            buy: "buy" in results ? results.buy
                .filter(provider => provider.display_priority <= minPriority)
                .map(provider => parseProvider(provider)) : [],
        };
    } else {
        return {
            free: [],
            stream: [],
            ads: [],
            rent: [],
            buy: [],
        }
    }

}

export const paths = {
    content: "https://api.themoviedb.org/3/",
    images: "https://image.tmdb.org/t/p/w500",
    search: {
        movies: "search/movie",
        tv: "search/tv",
        cast: "search/person",
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
    search: "Search for Movies, TV Series, and People",
    trending: "Search for Movies, TV Series, and People",
    "": "Search for Movies, TV Series, and People",
    movies: "Search for Movies",
    tv: "Search for TV Series",
    cast: "Search for People",
}
