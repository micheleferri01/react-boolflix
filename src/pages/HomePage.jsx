import { useState, useEffect } from "react"
import { useMoviesInfo } from "../contexts/MoviesInfoContext";
import axios from "axios";
import Card from "../components/Card";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    const { searchedTerm, apiUrl, apiSeriesTv, apiMoviePoster } = useMoviesInfo();

    useEffect(() => {
        console.log(apiUrl);
        Promise.all([
            axios.get(apiUrl.href),
            axios.get(apiSeriesTv.href)
        ])
            .then(([moviesRes, seriesRes]) => {
                console.log('movies', moviesRes.data);
                console.log('series', seriesRes.data);
                setMovies(moviesRes.data.results);
                setSeries(seriesRes.data.results);
            })
    }
        , [searchedTerm]);

    return (
        <>
            <h1 className="my-4">Films</h1>
            <div className="row row-cols-4 g-3">
                {movies && movies.map((movie) =><Card movie={movie} />)}
            </div>

            <h1 className="my-4">Serie Tv</h1>
            <div className="row row-cols-4 g-3">
                {
                    series && series.map ((serie) => <Card movie={serie} />)
                }
            </div>

        </>
    )
}