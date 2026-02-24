import { useState } from "react";
import { useMoviesInfo } from "../contexts/MoviesInfoContext";

export default function Header() {

    const { setSearchedTerm } = useMoviesInfo();

    const [searchInput, setSearchInput] = useState('');

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        setSearchedTerm(searchInput);
    };

    return (
        <>
            <header className="p-3 d-flex justify-content-between align-items-center bg-black">
                <h1 className="text-danger">Boolflix</h1>

                <form onSubmit={handleSubmitSearch}>
                    <div className="input-group">
                        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Cerca..." className="input-form" />
                        <button className='px-2 btn btn-danger'>Cerca</button>
                    </div>
                </form>

            </header>
        </>
    )
}