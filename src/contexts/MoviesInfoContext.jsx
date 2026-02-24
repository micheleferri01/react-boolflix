import { createContext, useContext, useState } from "react";

const MoviesInfoContext = createContext();

const api_key = 'f84274edb11f00e03988508d65bf61e2';

function MoviesInfoProvider ({children}) {

    const [searchedTerm, setSearchedTerm] = useState('');

    const apiUrl = new URL('https://api.themoviedb.org/3/search/movie');
    apiUrl.searchParams.set('api_key', api_key);
    apiUrl.searchParams.set('query', searchedTerm);

    const apiSeriesTv = new URL('https://api.themoviedb.org/3/search/tv');
    apiSeriesTv.searchParams.set('api_key', api_key);
    apiSeriesTv.searchParams.set('query', searchedTerm);

    const apiPoster = new URL('https://image.tmdb.org/t/p/w325');

    function languageFlags(language) {
        if (language === 'it') return <span class="fi fi-it"></span>;
        if (language === 'fr') return <span class="fi fi-fr"></span>;
        if (language === 'tl') return <span class="fi fi-tl"></span>;
        if (language === 'jp') return <span class="fi fi-jp"></span>;
        if (language === 'es') return <span class="fi fi-es"></span>;
        if (language === 'ko') return <span class="fi fi-kr"></span>;
        if (language === 'en') return <span class="fi fi-sh"></span>;
        if (language === 'ja') return <span class="fi fi-jp"></span>;
        if (language === 'de') return <span class="fi fi-de"></span>;
        if (language === 'el') return <span class="fi fi-gr"></span>;
        if (language === 'hi') return <span class="fi fi-in"></span>;
        if (language === 'zh' || language === 'cn') return <span class="fi fi-cn"></span>;
        if (language === 'th') return <span class="fi fi-th"></span>;
        if (language === 'sv') return <span class="fi fi-se"></span>;
        if (language === 'pt') return <span class="fi fi-pt"></span>;
        if (language === 'pl') return <span class="fi fi-pl"></span>;
        if (language === 'tr') return <span class="fi fi-tr"></span>;
        if (language === 'sr') return <span class="fi fi-rs"></span>;

    }


    
    return (
        <MoviesInfoContext.Provider 
        value={{
            searchedTerm,
            setSearchedTerm,
            apiUrl,
            apiSeriesTv,
            apiPoster,
            languageFlags,
            }}>
            {children}
        </MoviesInfoContext.Provider>
    )
}

function useMoviesInfo () {
    const context = useContext(MoviesInfoContext);
    return context;
}

export {MoviesInfoProvider, useMoviesInfo}

