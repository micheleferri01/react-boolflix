import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeafaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import {MoviesFetchProvider} from "./contexts/MoviesFetchContext";


export default function App() {

  return (
    <>
      <MoviesFetchProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DeafaultLayout}>
              <Route index Component={HomePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesFetchProvider>


    </>
  )
}

