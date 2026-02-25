import { useState, useEffect } from "react"
import { useMoviesInfo } from "../contexts/MoviesInfoContext";
import axios from "axios";
import CardsList from "../components/CardsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);


    const { searchedTerm, apiUrl, apiSeriesTv, setIsLoading, isLoading, empty, setEmpty } = useMoviesInfo();

    useEffect(() => {
        setIsLoading(true);
        console.log(apiUrl);
        Promise.all([
            axios.get(apiUrl.href),
            axios.get(apiSeriesTv.href)
        ])
            .then(([moviesRes, seriesRes]) => {
                // console.log('movies', moviesRes.data);
                // console.log('series', seriesRes.data);
                setMovies(moviesRes.data.results);
                setSeries(seriesRes.data.results);

            })
            .finally(() => {
                setIsLoading(false);
            })
    }
        , [searchedTerm]);

    if (empty) return (
        <>
            <div className="empty-state">
                <h1 className="text-white">Inizia la tua ricerca</h1>
            </div>
        </>
    )

    if (isLoading) {
        setEmpty(false);
        return (
            <>
                <div className="empty-state flex-column gap-5">
                    <FontAwesomeIcon icon={faCircleNotch} spinPulse style={{ color: "rgb(255, 255, 255)", fontSize: '150px', }} />
                    <h1 className="text-white">Loading...</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="px-3 pb-4">
                <h1 className="text-white my-4">Film</h1>
                <CardsList list={movies} />

                <h1 className="my-4 text-white">Serie Tv</h1>
                <CardsList list={series} />
            </div>

        </>
    )
}