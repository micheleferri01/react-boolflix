import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeafaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import { MoviesInfoProvider } from "./contexts/MoviesInfoContext";


export default function App() {

  return (
    <>
      <MoviesInfoProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DeafaultLayout}>
              <Route index Component={HomePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesInfoProvider>


    </>
  )
}

