import axios from "axios";
import { useMoviesInfo } from "../contexts/MoviesInfoContext";

export default function Header() {

    const {
        searchedTerm,
        setSearchedTerm,
        setEmpty,
        genres,
        setMovies,
        setSeries,
        setIsLoading,
        apiUrl,
        apiSeriesTv,
        setGenreFilter,
        genreFilter
    } = useMoviesInfo();

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        setGenreFilter(genreFilter);
        setEmpty(false);

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
    };

    return (
        <>
            <header className="p-3 d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-center gap-3 bg-black">
                <h1 className="text-danger fs-1">BOOLFLIX</h1>

                <form onSubmit={handleSubmitSearch} className="row g-3">
                    <div className="col-12 col-sm-6">
                        <select value={genreFilter} onChange={(e) => setGenreFilter(Number(e.target.value))} name="Genre filter" id="genre-filter" className="form-select rounded-pill">
                            <option value={0}>Tutti i generi</option>
                            {genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                    </div>

                    <div className="col-12 col-sm-6">
                        <div className="input-group">
                            <input value={searchedTerm} onChange={(e) => setSearchedTerm(e.target.value)} type="text" placeholder="Cerca..." className="form-control ps-2 rounded-start-5" />
                            <button className='px-2 btn btn-danger rounded-end-5'>Cerca</button>
                        </div>
                    </div>

                </form>

            </header>
        </>
    )
}