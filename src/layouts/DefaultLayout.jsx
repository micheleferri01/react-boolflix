import { Outlet } from "react-router-dom";
import Header from "../components/Header";


export default function DeafaultLayout() {
    return (
        <>
        <div className=" bg-grey min-vh-100">
             <Header />
            <main>
                <Outlet />
            </main>

        </div>
           
        </>

    )
}