import { useState, useEffect } from "react"
import { useMoviesFetch } from "../contexts/MoviesFetchContext";
import axios from "axios";

export default function HomePage() {
    const [movies, setMovies] = useState();

    const { searchedTerm, apiUrl, apiMoviePoster } = useMoviesFetch();

    useEffect(() => {
        console.log(apiUrl);
        axios.get(apiUrl.href)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data.results);
            });
    }
        , [searchedTerm]);

    return (
        <>
            <h1 className="my-4">Films</h1>
            <div className="row row-cols-4 g-3">
                {
                   movies && movies.map((movie) => (
                        <div key={movie.id} className="col">
                            <ul>
                                <li>Titolo: { movie.title }</li>
                                <li>Titolo originale: {movie.original_title}</li>
                                <li>Lingua: {movie.original_language}</li>
                                <li>Voto: {movie.vote_average}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    )
}