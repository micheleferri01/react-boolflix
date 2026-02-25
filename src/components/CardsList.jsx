import Card from "./Card"

export default function CardsList({ list }) {
    return (
        <>
            {list.length != 0 ? (<>
                <p className="text-white fs-30">Risultati trovati ({list.length})</p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {list && list.map((movie) => <Card key={movie.id} movie={movie} />)}
                </div>
            </>) : <p className="text-white fs-30">Nessun risultato trovato</p>}

        </>
    )
}