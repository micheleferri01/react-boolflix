import { Outlet } from "react-router-dom";
import Header from "../components/Header";


export default function DeafaultLayout() {
    return (
        <>
        <div className=" bg-dark min-vh-100">
             <Header />
            <main className="px-3 pb-4">
                <Outlet />
            </main>

        </div>
           
        </>

    )
}