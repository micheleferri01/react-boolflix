import { useMoviesInfo } from "../contexts/MoviesInfoContext";
import CardsList from "../components/CardsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


export default function HomePage() {
    


    const { isLoading, empty, movies, series, genreFilter } = useMoviesInfo();

    const filteredMovies =
        genreFilter !== 0
            ? movies.filter(movie => movie.genre_ids.includes(genreFilter))
            : movies;

    const filteredSeries =
        genreFilter !== 0
            ? series.filter(tv => tv.genre_ids.includes(genreFilter))
            : series;

    if (empty) return (
        <>
            <div className="empty-state">
                <h1 className="text-white">Benvenuto! Trova i tuoi film e serie tv preferiti.</h1>
            </div>
        </>
    )

    if (isLoading) {
        return (
            <>
                <div className="empty-state flex-column gap-5">
                    <FontAwesomeIcon icon={faCircleNotch} spinPulse style={{ color: "rgb(255, 255, 255)", fontSize: '180px', }} />
                    <h1 className="text-white">Loading...</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="px-3 pb-4">
                <h1 className="text-white my-4 fs-80">Film</h1>
                <CardsList list={filteredMovies} />

                <h1 className="my-4 text-white fs-80">Serie Tv</h1>
                <CardsList list={filteredSeries} />
            </div>

        </>
    )
}