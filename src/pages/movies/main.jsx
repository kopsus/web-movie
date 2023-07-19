import React, { useEffect, useState } from "react"

import HeaderMain from "../../components/header/header.movies"
import MoviesOriginal from "../../components/movies/moviesOriginal"
import MoviesTranding from "../../components/movies/moviesTranding"
import MovieTopRated from "../../components/movies/movieTopRated"
import MoviesUpComing from "../../components/movies/moviesUpComing"
import Footer from "../../components/footer"

import {
  getMovieListOriginal,
  getMovieListTranding,
  getMovieListUpComing,
  getMovieListTopRated,
  getMovieSearch,
  searchMovie,
} from "../../components/api/api"

const Main = () => {
  const [moviesOriginal, setMoviesOriginal] = useState([])
  const [moviesTranding, setMoviesTranding] = useState([])
  const [moviesUpComing, setMoviesUpComing] = useState([])
  const [moviesTopRated, setMoviesTopRated] = useState([])
  const [moviesSearch, setMoviesSearch] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [disableInteraction, setDisableInteraction] = useState(false)

  useEffect(() => {
    getMovieListOriginal().then((result) => {
      setMoviesOriginal(result)
    })
    getMovieListTranding().then((result) => {
      setMoviesTranding(result)
    })
    getMovieListUpComing().then((result) => {
      setMoviesUpComing(result)
    })
    getMovieListTopRated().then((result) => {
      setMoviesTopRated(result)
    })
    getMovieSearch().then((result) => {
      setMoviesSearch(result)
    })
  }, [])

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setMoviesSearch(query.results)
      setShowSearchResults(true)
    } else {
      setMoviesSearch([])
      setShowSearchResults(false)
    }
  }

  return (
    <div>
      <HeaderMain
        search={search}
        movies={showSearchResults ? moviesSearch : []}
        setDisableInteraction={setDisableInteraction}
        disableInteraction={disableInteraction}
      />
      {!showSearchResults && (
        <>
          <MoviesOriginal
            disableInteraction={disableInteraction}
            movies={moviesOriginal}
            setDisableInteraction={setDisableInteraction}
          />
          <MoviesTranding
            disableInteraction={disableInteraction}
            movies={moviesTranding}
            setDisableInteraction={setDisableInteraction}
          />
          <MovieTopRated
            disableInteraction={disableInteraction}
            movies={moviesTopRated}
            setDisableInteraction={setDisableInteraction}
          />
          <MoviesUpComing
            disableInteraction={disableInteraction}
            movies={moviesUpComing}
            setDisableInteraction={setDisableInteraction}
          />
        </>
      )}
      <Footer />
    </div>
  )
}

export default Main
