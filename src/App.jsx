import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Home from "./pages/home/main"
import Movies from "./pages/movies/main"
import Login from "./pages/login/main"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
