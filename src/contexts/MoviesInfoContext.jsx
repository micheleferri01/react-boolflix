import { createContext, useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MoviesInfoContext = createContext();

const api_key = 'f84274edb11f00e03988508d65bf61e2';

function MoviesInfoProvider({ children }) {

    const [searchedTerm, setSearchedTerm] = useState('');

    const apiUrl = new URL('https://api.themoviedb.org/3/search/movie');
    apiUrl.searchParams.set('api_key', api_key);
    apiUrl.searchParams.set('query', searchedTerm);
    apiUrl.searchParams.set('language', 'it-IT');

    const apiSeriesTv = new URL('https://api.themoviedb.org/3/search/tv');
    apiSeriesTv.searchParams.set('api_key', api_key);
    apiSeriesTv.searchParams.set('query', searchedTerm);
    apiSeriesTv.searchParams.set('language', 'it-IT');

    const apiPoster = new URL('https://image.tmdb.org/t/p/w342');

    function languageFlags(language) {
        if (language === 'it') return <span className="fi fi-it"></span>;
        if (language === 'fr') return <span className="fi fi-fr"></span>;
        if (language === 'tl') return <span className="fi fi-tl"></span>;
        if (language === 'jp') return <span className="fi fi-jp"></span>;
        if (language === 'es') return <span className="fi fi-es"></span>;
        if (language === 'ko') return <span className="fi fi-kr"></span>;
        if (language === 'en') return <span className="fi fi-sh"></span>;
        if (language === 'ja') return <span className="fi fi-jp"></span>;
        if (language === 'de') return <span className="fi fi-de"></span>;
        if (language === 'el') return <span className="fi fi-gr"></span>;
        if (language === 'hi') return <span className="fi fi-in"></span>;
        if (language === 'zh' || language === 'cn') return <span className="fi fi-cn"></span>;
        if (language === 'th') return <span className="fi fi-th"></span>;
        if (language === 'sv') return <span className="fi fi-se"></span>;
        if (language === 'pt') return <span className="fi fi-pt"></span>;
        if (language === 'pl') return <span className="fi fi-pl"></span>;
        if (language === 'tr') return <span className="fi fi-tr"></span>;
        if (language === 'sr') return <span className="fi fi-rs"></span>;
        if (language === 'ru') return <span className="fi fi-ru"></span>;
        if (language === 'nb') return <span className="fi fi-no"></span>;

    }

    function stars(vote) {
        const intVote = parseInt(vote);
        if (intVote === 0) return (
            <>
                <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            </>
        );
        if (intVote > 0 && intVote <= 2) return (<>
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        </>);
        if (intVote > 2 && intVote <= 4) return (<>
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        </>);
        if (intVote > 4 && intVote <= 6) return (<>
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        </>);
        if (intVote > 6 && intVote <= 8) return (<>
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        </>);
        if (intVote > 8 && intVote <= 10) return (<>
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        </>);
        

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
                stars,
            }}>
            {children}
        </MoviesInfoContext.Provider>
    )
}

function useMoviesInfo() {
    const context = useContext(MoviesInfoContext);
    return context;
}

export { MoviesInfoProvider, useMoviesInfo }

