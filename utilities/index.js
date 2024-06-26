export const HOST = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'https://dash-entertainment.vercel.app';
export const API_KEY = "3ab8cbaaf33601b17a319fdcd7af44f3";
export const fetcher = (url) => fetch(url).then(res => res.json());

export const getURL = (path, optional = '', type = 'content') => {
    const basePath = type === "image" ? paths.images : paths.content;
    const apiKey = type === "content" ? `?api_key=${API_KEY}` : '';
    return `${basePath}${path}${apiKey}${optional}`;
};

export const getIMG = (imgpath, resolution = "w500") => {
    return `https://image.tmdb.org/t/p/${resolution}/${imgpath}`;
};

const mapContentItem = (contentItem) => {
    const mediaType = "title" in contentItem ? "movie" : ("known_for" in contentItem || "biography" in contentItem) ? "person" : "name" in contentItem ? "tv" : null;
    return {
        category: mediaType,
        id: contentItem.id,
        title: mediaType === "movie" ? contentItem.title : mediaType === "tv" ? contentItem.name : mediaType === "person" ? contentItem.name : null,
        year: "release_date" in contentItem ? contentItem.release_date.substring(0, 4) : ("first_air_date" in contentItem && contentItem.first_air_date !== null) ? contentItem.first_air_date.substring(0, 4) : null,
        genres: contentItem.genre_ids,
        image: ("profile_path" in contentItem && contentItem.profile_path !== null) ? contentItem.profile_path : ("backdrop_path" in contentItem && contentItem.backdrop_path !== null) ? contentItem.backdrop_path : ("poster_path" in contentItem && contentItem.poster_path !== null) ? contentItem.poster_path : null,
        backdrop: mediaType === "movie" || mediaType === "tv" ? contentItem.backdrop_path : mediaType === "person" ? contentItem.profile_path : null,
        poster: contentItem.poster_path,
        rating: contentItem.vote_average,
    };
};

export const parse = (contentList) => {
    if ("results" in contentList) {
        return contentList.results.map(mapContentItem);
    } else if ("cast" in contentList) {
        return contentList.cast.map(mapContentItem);
    } else if (Array.isArray(contentList)) {
        return contentList.map(mapContentItem);
    } else {
        return [mapContentItem(contentList)];
    }
};

export const parseContentItem = (contentItem) => {
    const mediaType = "title" in contentItem ? "movie" : "known_for" in contentItem ? "person" : "name" in contentItem ? "tv" : null;
    return {
        category: mediaType,
        id: contentItem.id,
        title: mediaType === "movie" ? contentItem.title : mediaType === "tv" ? contentItem.name : mediaType === "person" ? contentItem.name : null,
        year: "release_date" in contentItem ? contentItem.release_date.substring(0, 4) : ("first_air_date" in contentItem && contentItem.first_air_date !== null) ? contentItem.first_air_date.substring(0, 4) : null,
        genres: contentItem.genre_ids,
        image: ("profile_path" in contentItem && contentItem.profile_path !== null) ? contentItem.profile_path : ("backdrop_path" in contentItem && contentItem.backdrop_path !== null) ? contentItem.backdrop_path : ("poster_path" in contentItem && contentItem.poster_path !== null) ? contentItem.poster_path : null,
        backdrop: mediaType === "movie" || mediaType === "tv" ? contentItem.backdrop_path : mediaType === "person" ? contentItem.profile_path : null,
        poster: contentItem.poster_path,
        rating: contentItem.vote_average,
        tagline: contentItem.tagline,
        runtime: mediaType === "movie" ? ("runtime" in contentItem ? contentItem.runtime : null) : mediaType === "tv" ? ("episode_run_time" in contentItem ? contentItem.episode_run_time[0] : null) : null,
        synopsis: contentItem.overview,
        language: "spoken_languages" in contentItem && contentItem.spoken_languages[0] !== undefined ? contentItem.spoken_languages[0].name : null,
        status: contentItem.status,
        seasons: mediaType === "tv" ? contentItem.number_of_seasons : null,
    };
};

const parseProvider = (provider) => {
    return { name: provider.provider_name, logo: provider.logo_path, priority: provider.display_priority };
};

export const parseProviderData = (providerData, country = "US") => {
    const maxPriority = 50;
    if (Object.keys(providerData).length !== 0 && "results" in providerData && country in providerData.results) {
        const results = providerData.results[country];
        return {
            free: results.free?.filter(provider => provider.display_priority <= maxPriority).map(parseProvider) || [],
            stream: results.flatrate?.filter(provider => provider.display_priority <= maxPriority).map(parseProvider) || [],
            ads: results.ads?.filter(provider => provider.display_priority <= maxPriority).map(parseProvider) || [],
            rent: results.rent?.filter(provider => provider.display_priority <= maxPriority).map(parseProvider) || [],
            buy: results.buy?.filter(provider => provider.display_priority <= maxPriority).map(parseProvider) || [],
        };
    } else {
        return {
            free: [],
            stream: [],
            ads: [],
            rent: [],
            buy: [],
        };
    }
};

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
};

export const placeholders = {
    search: "Search for Movies, TV Series, and People",
    trending: "Search for Movies, TV Series, and People",
    "": "Search for Movies, TV Series, and People",
    movies: "Search for Movies",
    tv: "Search for TV Series",
    cast: "Search for People",
};

export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>
`;

export const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
