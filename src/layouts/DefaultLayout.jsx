import { Outlet } from "react-router-dom";
import Header from "../components/Header";


export default function DeafaultLayout() {
    return (
        <>
            <Header />
            <main className="px-3">
                <Outlet />
            </main>

        </>

    )
}