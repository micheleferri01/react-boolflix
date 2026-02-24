import { Outlet } from "react-router-dom";
import Header from "../components/Header";


export default function DeafaultLayout() {
    return (
        <>
        <div className=" bg-dark vh-100">
             <Header />
            <main className="px-3">
                <Outlet />
            </main>

        </div>
           
        </>

    )
}