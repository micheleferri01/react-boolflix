import { useMoviesInfo } from "../contexts/MoviesInfoContext"

export default function Card({ movie }) {

    const { languageFlags, apiPoster, stars, genres } = useMoviesInfo();

    const poster = apiPoster + movie.poster_path;

    console.log(movie);

    const movieGenres = genres?.filter((genre) => movie.genre_ids.includes(genre.id)).map(genre => genre.name).join(', ');
    console.log(movieGenres);

    return (
        <>
            <div className="col">
                <div className="my-card overflow-y-auto">
                    <img src={poster} alt={movie.title ? movie.title : movie.name} className="poster" />
                    <ul className="px-2 py-3 movie-info list-unstyled">
                        <li><strong>Titolo:</strong> {movie.title ? movie.title : movie.name}</li>
                        <li><strong>Titolo originale:</strong>  {movie.original_title ? movie.original_title : movie.original_name}</li>
                        {movieGenres && <li><strong>Generi:</strong> {movieGenres}</li>}
                        <li><strong>Lingua:</strong> {languageFlags(movie.original_language)} {movie.original_language}</li>
                        <li><strong>Voto:</strong> {stars(movie.vote_average)}</li>
                        {movie.overview && <li><strong>Overview:</strong> {movie.overview}</li>}
                    </ul>
                </div>

            </div>
        </>
    )
}