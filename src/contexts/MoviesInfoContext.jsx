import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MoviesInfoContext = createContext();

const api_key = 'f84274edb11f00e03988508d65bf61e2';

function MoviesInfoProvider({ children }) {

    // # STATES

    const [searchedTerm, setSearchedTerm] = useState('');
    const [empty, setEmpty] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [genres, setGenres] = useState([]);

    // # API

    const apiUrl = new URL('https://api.themoviedb.org/3/search/movie');
    apiUrl.searchParams.set('api_key', api_key);
    apiUrl.searchParams.set('query', searchedTerm);
    apiUrl.searchParams.set('language', 'it-IT');

    const apiSeriesTv = new URL('https://api.themoviedb.org/3/search/tv');
    apiSeriesTv.searchParams.set('api_key', api_key);
    apiSeriesTv.searchParams.set('query', searchedTerm);
    apiSeriesTv.searchParams.set('language', 'it-IT');

    const apiPoster = new URL('https://image.tmdb.org/t/p/w342');

    const apiMoviesGenres = new URL('https://api.themoviedb.org/3/genre/movie/list');
    apiMoviesGenres.searchParams.set('api_key', api_key);
    apiMoviesGenres.searchParams.set('language', 'it');

    const apiSeriesGenres = new URL('https://api.themoviedb.org/3/genre/tv/list');
    apiSeriesGenres.searchParams.set('api_key', api_key);
    apiSeriesGenres.searchParams.set('language', 'it');

    useEffect( () => {
        Promise.all([axios.get(apiMoviesGenres.href), axios.get(apiSeriesGenres.href)])
        .then(([moviesGenresRes, seriesGenresRes]) => {
            // console.log(moviesGenresRes.data.genres);
            // console.log(seriesGenresRes.data.genres);
            const allGenres = [...moviesGenresRes.data.genres, ...seriesGenresRes.data.genres];
            const uniqueGenres = Array.from(new Map (allGenres.map(genre => [genre.id, genre])).values());
            console.log(uniqueGenres);
            setGenres(uniqueGenres);
        })
    },[]);


    return (
        <MoviesInfoContext.Provider
            value={{
                searchedTerm,
                setSearchedTerm,
                apiUrl,
                apiSeriesTv,
                apiPoster,
                empty,
                setEmpty,
                isLoading,
                setIsLoading,
                genres,
            }}>
            {children}
        </MoviesInfoContext.Provider>
    )
}

function useMoviesInfo() {
    const context = useContext(MoviesInfoContext);
    return context;
}

export { MoviesInfoProvider, useMoviesInfo };

