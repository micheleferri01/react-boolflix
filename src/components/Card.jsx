import { useMoviesInfo } from "../contexts/MoviesInfoContext"

export default function Card({ list }) {
    const { languageFlags } = useMoviesInfo();
    return (
        <>
            {list.map((movie) => (
                <div key={movie.id} className="col">
                    <ul>
                        <li>Titolo: {movie.title ? movie.title : movie.name}</li>
                        <li>Titolo originale:  {movie.original_title ? movie.original_title : movie.original_name}</li>
                        <li>Lingua: {languageFlags(movie.original_language)} {movie.original_language}</li>
                        <li>Voto: {movie.vote_average}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}