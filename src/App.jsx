import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeafaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DeafaultLayout}>
            <Route index Component={HomePage}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

