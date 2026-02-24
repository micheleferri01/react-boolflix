import { createContext, useContext, useState } from "react";

const MoviesFetchContext = createContext();

const api_key = 'f84274edb11f00e03988508d65bf61e2';

function MoviesFetchProvider ({children}) {

    const [searchedTerm, setSearchedTerm] = useState('');

    const apiUrl = new URL('https://api.themoviedb.org/3/search/movie');
    apiUrl.searchParams.set('api_key', api_key);
    apiUrl.searchParams.set('query', searchedTerm);

    const apiMoviePoster = new URL('https://image.tmdb.org/t/p/w325');


    
    return (
        <MoviesFetchContext.Provider 
        value={{
            searchedTerm,
            setSearchedTerm,
            apiUrl,
            apiMoviePoster,
            }}>
            {children}
        </MoviesFetchContext.Provider>
    )
}

function useMoviesFetch () {
    const context = useContext(MoviesFetchContext);
    return context;
}

export {MoviesFetchProvider, useMoviesFetch}

